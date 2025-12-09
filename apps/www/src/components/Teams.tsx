import { useState } from "react";
import stands from "../assets/Stands.png";
import developersCar from "../assets/developersCar.png";
import marketingCar from "../assets/marketingCar.png";
import financeCar from "../assets/financeCar.png";
import designCar from "../assets/designCar.png";
import workshopsCar from "../assets/workshopsCar.svg";

export default function Teams() {
    const [selectedCar, setSelectedCar] = useState<string | null>(null);

    const handleCarClick = (carName: string) => {
        setSelectedCar(carName);
        console.log(`Clicked on ${carName} car`);
    };

    const cars = [
        { name: "Development", src: developersCar.src, alt: "Developer Car" },
        { name: "Marketing", src: marketingCar.src, alt: "Marketing Car" },
        { name: "Finance", src: financeCar.src, alt: "Finance Car" },
        { name: "Design", src: designCar.src, alt: "Design Car" },
        { name: "Workshops", src: workshopsCar.src, alt: "Workshops Car" },
    ];

    return (
        <>
            <div className="mt-[5dvh] pt-5 w-[80%] mx-auto flex flex-col gap-[30px]" id="teams">
                <h1 className="font-black p-5 -ml-2.5 text-5xl capitalize text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-xl font-title">
                    THE TEAM
                </h1>
            </div>

            {/* stands container */}
            <div className="relative w-full flex flex-col items-center justify-center -mt-12">
                <div className="relative w-full max-w-7xl flex justify-center">
                    <img
                        src={stands.src}
                        alt="Team Stands"
                        className="w-full h-auto object-contain scale-150 mx-auto"
                    />
                </div>
            </div>

            {/* cars at the bottom */}
            <div className="w-full overflow-hidden mt-16 md:mt-20 lg:mt-24">
                <div 
                    className="flex items-center gap-8 md:gap-12 lg:gap-16 car-scroll-animation"
                    style={{
                        width: "fit-content",
                    }}
                >
                    {[...cars, ...cars, ...cars].map((car, index) => (
                        <button
                            key={`${car.name}-${index}`}
                            type="button"
                            onClick={() => handleCarClick(car.name)}
                            className={`flex-shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer ${
                                selectedCar === car.name ? "scale-110" : ""
                            }`}
                            aria-label={`${car.name} Team`}
                        >
                            <img
                                src={car.src}
                                alt={car.alt}
                                className="w-48 md:w-64 lg:w-80 xl:w-96 h-auto object-contain"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

