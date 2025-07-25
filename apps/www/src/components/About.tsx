import car from "../assets/car_top.svg";

export default function About() {
	return (
		<div
			className="mt-[10dvh] py-8 px-8 flex flex-col lg:flex-row gap-8 items-center justify-between"
			id="about"
		>
			<div className="flex flex-col items-start text-left max-w-3xl">
				<h1 className="font-black p-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl capitalize text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-xl font-title">
					ABOUT
				</h1>
				<p className="font-title text-xl sm:text-2xl md:text-3xl text-white">
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
				className="w-[200px] lg:w-[200px]"
			/>
		</div>
	);
}
