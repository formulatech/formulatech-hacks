import carVertical from "../assets/car_top.svg";
import carHorizontal from "../assets/car_top_mobile.png";
import blueGrid from "../assets/blue-grid.svg";
import temp from "../assets/placeholder.png";


const images = [
    {
        src: temp.src,
        altText: "temp image 1",
    },
    {
        src: temp.src,
        altText: "temp image 2",
    },
    {
        src: temp.src,
        altText: "temp image 3",
    },
];

const imageClass = "p-[7px] rounded-[15px] bg-gradient-to-t from-primary to-secondary drop-shadow-xl/50 w-full max-w-[330px]";
export default function About() {
    return (
        <div
            className="mb-32 flex flex-col items-center justify-center min-h-screen bg-[#fafbee] relative"
            id="about"
        >
            {/* Checkered pattern background decoration */}
            <img src={blueGrid.src} className="absolute bottom-[600px] right-[-400px] md:bottom-[700px] md:right-[-400px] lg:bottom-[570px] lg:right-[-500px] object-fit scale-300 md:scale-200 lg:scale-125" alt="" />
            <div className="container relative w-[80%] mx-auto flex flex-col lg:flex-row md:items-center lg:items-start justify-between gap-10 lg:gap-28">
                {/* Text Section */}
                <div className="flex flex-col md:items-center lg:items-start gap-3 md:gap-5">
                <h1
                    className="inline-block md:inline flex-col md:flex-row md:items-center font-black font-title capitalize md:text-center leading-tight text-[clamp(1.7rem,4vw,2.75rem)]">
                    <span className="mr-6 bg-clip-text text-transparent bg-gradient-to-t from-primary to-secondary hidden md:inline">/</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
                        ABOUT
                    </span>
                    <span className="ml-6 bg-clip-text text-transparent bg-gradient-to-t from-primary to-secondary hidden md:inline">/</span>
                </h1>
                    <p className="font-primary text-base md:text-lg text-black md:text-center md:leading-relaxed lg:text-left">
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
                    <h2 className="font-primary font-bold text-lg md:text-xl">Interested in participating?</h2>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScru3wvO6uZcbIDaXxxaUfB5GVFhpmB5LtLRFH8gHBSazsdFg/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit bg-primary hover:bg-primary/90 text-white font-title font-bold text-base md:text-lg px-6 py-4 rounded-full uppercase tracking-wide transition-all duration-200 hover:scale-105"
                    >
                        SAVE MY SPOT
                    </a>
                </div>
                {/* Mobile view of car (rotating with CSS introduces extra whitespace) */}
                <img
                    src={carHorizontal.src}
                    alt="Birds eye view of car"
                    className="max-w-[400px] md:max-w-[500px] w-full object-contain self-center lg:self-start block lg:hidden"
                />
                {/* Desktop view of car */}
                <img
                    src={carVertical.src}
                    alt="Birds eye view of car"
                    className="w-[180px] object-contain self-center lg:self-start md:mr-30 hidden lg:block"
                />
            </div>
            {/* Images from event */}
            <div className="flex flex-col lg:flex-row mt-12 gap-10 items-start mx-20">
                {images.map((img, index) => (
                    <div                        
                        key={img.src}
                        className={index === 1 ? `${imageClass} ml-[50px] md:ml-[100px] lg:ml-0 lg:mt-[100px]` : `${imageClass}`}>
                        <img
                            src={img.src}
                            alt-text={img.altText}
                            className="rounded-[10px] object-cover"
                        />
                  </div>
                ))}
            </div>
        </div>
    );
}
