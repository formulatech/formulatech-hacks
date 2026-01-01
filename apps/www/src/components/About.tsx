import car from "../assets/car_top.svg";

export default function About() {
    return (
        <div
            className="mt-[10dvh] py-8 flex flex-col items-center justify-center min-h-screen bg-[#fafbee]"
            id="about"
        >
            <div className="w-[80%] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
                {/* Text Section */}
                <div className="flex flex-col items-center lg:items-start gap-[30px]">
                <h1
                className="flex flex-col md:flex-row items-center font-black px-3 py-4 md:p-5 sm:ml-0 lg:ml-15 font-title capitalize text-center leading-tight"
                style={{ fontSize: "clamp(1.4rem, 4vw, 2.75rem)" }}>
                    <span className="mr-6 bg-clip-text text-transparent bg-gradient-to-t from-primary to-secondary hidden md:block">/</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        ABOUT
                    </span>
                    <span className="ml-6 bg-clip-text text-transparent bg-gradient-to-t from-primary to-secondary hidden md:block">/</span>
                </h1>
                    <p className="font-arial text-xl sm:text-2xl md:text-xl text-black leading-relaxed text-center lg:text-left">
                        FormulaTech Hacks creates an energizing space where
                        motorsport enthusiasts can thrive, fostering an
                        environment that accelerates learning and ignites
                        passion for the sport. Our hackathon runs on Waterloo
                        University's campus and is organized by a student-led
                        team with you in mind. We aim to be the catalyst that
                        transforms curious fans into experts. This year,
                        students can compete in one of our three tracks:
                        Software, Hardware, or CAD to gain technical experience
                        and drive innovation forward!
                    </p>

                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScru3wvO6uZcbIDaXxxaUfB5GVFhpmB5LtLRFH8gHBSazsdFg/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary/90 text-white font-mono font-bold text-lg sm:text-xl md:text-2xl px-8 py-4 rounded-full uppercase tracking-wide transition-all duration-200 hover:scale-105"
                    >
                        SAVE MY SPOT
                    </a>
                </div>

                {/* Car Image */}
                <img
                    src={car.src}
                    alt="Birds eye view of car"
                    className="w-[200px] lg:w-[200px] object-contain self-center lg:self-start pt-4"
                />
            </div>
        </div>
    );
}
