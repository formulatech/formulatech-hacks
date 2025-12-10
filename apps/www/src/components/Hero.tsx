import "../styles/Hero.css";
import carSide from "../assets/car-side.svg";

export default function Hero() {
    return (
        <div className="mt-[10dvh] py-8 flex flex-col px-8 gap-8 items-center">
            <h1 className="font-black text-center p-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl capitalize text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-xl font-title">
                FORMULATECH HACKS
            </h1>

            <h1 className="font-mono text-xl sm:text-2xl md:text-3xl text-white text-center">
                February 7th - 8ths, 2026 <br />
                Waterloo's first ever{" "}
                <span className="font-bold">Formula One</span> hackathon.
            </h1>

            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScru3wvO6uZcbIDaXxxaUfB5GVFhpmB5LtLRFH8gHBSazsdFg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white font-mono font-bold text-lg sm:text-xl md:text-2xl px-8 py-4 rounded-full uppercase tracking-wide transition-all duration-200 hover:scale-105"
            >
                SAVE MY SPOT
            </a>

            <a
                href="#sponsors"
                className="font-mono text-xl sm:text-2xl md:text-3xl text-white text-center hover:text-primary underline"
            >
                interested in becoming a sponsor?
            </a>

            <img className="mt-5" src={carSide.src} alt="Side Car" />
        </div>
    );
}
