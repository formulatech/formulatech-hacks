import "../styles/Hero.css";
import carSide from "../assets/car-side.svg";

export default function Hero() {
	return (
		<div className="mt-[10dvh] py-8 flex flex-col px-8 gap-8 items-center">
			<h1 className="font-black text-center p-4 text-7xl capitalize text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-xl font-title">
				FORMULATECH HACKS
			</h1>

			<h1 className="font-mono text-3xl text-white">Winter 2026</h1>
			<h1 className="font-mono text-3xl text-white">
				Waterloo’s first ever Formula One hackathon.
			</h1>

			<h1 className="font-mono text-3xl text-white hover:text-secondary underline">
				Interested in becoming a sponsor?
			</h1>

			<img className="mt-32" src={carSide.src} />
		</div>
	);
}
