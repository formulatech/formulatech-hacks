import { readdir, stat, unlink, rename } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "../src/assets");
const HEADSHOTS = path.join(ROOT, "headshots");
const MAX_EDGE = 512;
const MIN_BYTES = 120_000;

async function walk(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = [];
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) files.push(...(await walk(full)));
		else files.push(full);
	}
	return files;
}

async function optimize(file) {
	const info = await stat(file);
	if (info.size < MIN_BYTES) return null;

	const ext = path.extname(file).toLowerCase();
	if (![".png", ".jpg", ".jpeg", ".webp"].includes(ext)) return null;

	const image = sharp(file).rotate();
	const meta = await image.metadata();
	const width = meta.width ?? MAX_EDGE;
	const height = meta.height ?? MAX_EDGE;
	const resize =
		width > MAX_EDGE || height > MAX_EDGE
			? { width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true }
			: null;

	let pipeline = image;
	if (resize) pipeline = pipeline.resize(resize);

	const tmp = `${file}.tmp`;
	if (ext === ".png") {
		await pipeline.png({ compressionLevel: 9, palette: true }).toFile(tmp);
	} else {
		await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(tmp);
	}

	const { size: newSize } = await stat(tmp);
	await unlink(file);
	await rename(tmp, file);
	return { file, before: info.size, after: newSize };
}

const files = [...(await walk(HEADSHOTS))];
for (const car of ["designCar.png", "developersCar.png", "financeCar.png", "marketingCar.png", "Stands.png"]) {
	files.push(path.join(ROOT, car));
}

const results = [];
for (const file of files) {
	try {
		const result = await optimize(file);
		if (result) results.push(result);
	} catch {
		// skip unsupported formats
	}
}

for (const { file, before, after } of results) {
	console.log(`${path.relative(ROOT, file)}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
}
console.log(`Optimized ${results.length} files`);
