import car from "../assets/car_top.svg";

export default function About() {
	return (
		<div className="grid grid-cols-7 mt-256">
			<div className="pl-24 flex flex-col items-start col-span-5">
				<h1 className="font-black text-center p-4 text-4xl capitalize text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-lg font-title">
					ABOUT
				</h1>
				<p className="font-title text-xl lg:pr-30">
					FormulaTech Hacks creates an energizing space where motorsport
					enthusiasts can thrive, fostering an environment that accelerates
					learning and ignites passion for the sport. Our hackathon runs on
					Waterloo University’s campus and is organized by a student-led team
					with you in mind. We aim to be the catalyst that transforms curious
					fans into experts. This year, students can compete in one of our three
					tracks: Software, Hardware, or CAD to gain technical experience and
					drive innovation forward!
				</p>
			</div>
			<img
				src={car.src}
				alt="Birds eye view of car"
				className="w-50 lg:w-xs m-auto col-span-2"
			/>
		</div>
	);
}
