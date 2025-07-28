import "../styles/Hero.css";
import carSide from "../assets/car-side.svg";

export default function Hero() {
	return (
		<div className="mt-[10dvh] py-8 flex flex-col px-8 gap-8 items-center">
			<h1 className="font-black text-center p-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl capitalize text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-xl font-title">
				FORMULATECH HACKS
			</h1>

			<h1 className="font-mono text-xl sm:text-2xl md:text-3xl text-white">Winter 2026</h1>
			<h1 className="font-mono text-xl sm:text-2xl md:text-3xl text-white">
				Waterloo’s first ever Motorsport hackathon.
			</h1>

			<h1 className="font-mono text-xl sm:text-2xl md:text-3xl text-white hover:text-primary underline">
				Interested in becoming a sponsor?
			</h1>

			<img className="mt-5" src={carSide.src} />
		</div>
	);
}
