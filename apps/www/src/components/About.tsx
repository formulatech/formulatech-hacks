import car from "../assets/car_top.svg";

export default function About() {
  return (
    <div className="mt-[10dvh] py-8 flex flex-col items-center justify-center min-h-screen" id="about">
      <div className="w-[80%] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start gap-[30px]">
          <h1 className="font-black p-5 -ml-2.5 text-5xl capitalize text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-xl font-title">
            ABOUT
          </h1>
          <p className="font-mono text-xl sm:text-2xl md:text-xl text-white leading-relaxed text-center lg:text-left">
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

        {/* Car Image */}
        <img
          src={car.src}
          alt="Birds eye view of car"
          className="w-[200px] lg:w-[200px] object-contain self-start pt-4"
        />
      </div>
    </div>
  );
}
