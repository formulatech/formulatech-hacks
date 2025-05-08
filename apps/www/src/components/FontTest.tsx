export default function FontTest() {
	return (
		<div>
			{/* Title (main) font: Orbitron */}
			<h1 className="font-title font-black text-5xl">Title (main)</h1>
			{/* Body (main) font: Roboto Mono */}
			<p className="font-body font-regular text-5xl">Body (main)</p>
			<br />
			{/* Title (alternative) font: Audiowide */}
			<h1 className="font-title-alternative font-regular text-5xl">
				Title (alternative)
			</h1>
			{/* Body (alternative) font: Open Sans */}
			<p className="font-body-alternative font-regular text-5xl">
				Body (alternative)
			</p>
		</div>
	);
}
