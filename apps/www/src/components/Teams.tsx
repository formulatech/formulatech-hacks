import { useState } from "react";
import stands from "../assets/stands.svg";
import developersCar from "../assets/developersCar.png";
import marketingCar from "../assets/marketingCar.png";
import financeCar from "../assets/financeCar.png";
import designCar from "../assets/designCar.png";
import workshopsCar from "../assets/workshopsCar.svg";
import track from "../assets/track.svg";
import blueStar from "../assets/teal-star.svg";

// Team member headshots
import francesZhao from "../assets/headshots/francess - Frances Zhao.jpeg";

export default function Teams() {
    const [selectedCar, setSelectedCar] = useState<string | null>(null);

    const handleCarHover = (carName: string | null) => {
        setSelectedCar(carName);
    };

    const cars = [
        { name: "Development", src: developersCar.src, alt: "Developer Car" },
        { name: "Marketing", src: marketingCar.src, alt: "Marketing Car" },
        { name: "Finance", src: financeCar.src, alt: "Finance Car" },
        { name: "Design", src: designCar.src, alt: "Design Car" },
        { name: "Workshops", src: workshopsCar.src, alt: "Workshops Car" },
    ];

    const teamMembers = [
        // Development Team
        { name: "Marwa Zaryab", teams: ["Development", "Workshops","Finance"], image: "/src/assets/headshots/IMG_9466 - Marwa Zaryab.JPG", level: 1 },
        //{ name: "Rodney Wu", teams: ["Development"], image: "/src/assets/headshots/IMG_1788 - Rodney Wu.jpeg", level: 2 },
        { name: "Dequan Kong", teams: ["Workshops"], image: "/src/assets/headshots/Dequan_Kong_Headshot - Dequan Kong.jpg", level: 2 },
        { name: "Richard Li", teams: ["Development"], image: "/src/assets/headshots/headshot - Richard Li.png", level: 3 },
        { name: "Adrian Mathew", teams: ["Finance"], image: "/src/assets/headshots/IMG_6749 - Adrian Mathew.jpeg", level: 5 },
        { name: "Sharvesh V", teams: ["Finance"], image: "/src/assets/headshots/IMG_4442 - Sharvesh V.jpeg", level: 3 },
        { name: "Rayyan", teams: ["Marketing"], image: "/src/assets/headshots/headshot - Rayyan Huda.png", level: 3},

        // Marketing Team
        { name: "Maira Khawaja", teams: ["Logistics"], image: "/src/assets/headshots/IMG_2884 - Maira Khawaja.heic", level: 1 },
        { name: "Ana Maniram", teams: ["Marketing"], image: "/src/assets/headshots/100_2669 - Ana Maniram.jpeg", level: 3 },
        { name: "Victoria Gee", teams: ["Logistics"], image: "/src/assets/headshots/VGee Headshot - Victoria Gee.JPG", level: 1 },

        // Finance Team
        { name: "Linda Chen", teams: ["Marketing"], image: "/src/assets/headshots/lindawinda - Linda Chen.PNG", level: 2 },

        // Design Team
        { name: "Frances Zhao", teams: ["Design"], image: francesZhao.src, level: 2 },
        { name: "Elin Zhang", teams: ["Marketing"], image: "/src/assets/headshots/54565301122_051267de38_q - Elin Zhang.jpg", level: 2 },
        { name: "Ariel", teams: ["Finance"], image: "/src/assets/headshots/IMG_8261 - Ariel.heic", level: 5 },

        // Workshops Team
        { name: "Ammar Adam", teams: ["Finance"], image: "/src/assets/headshots/headshot! - Ammar Adam.jpg", level: 5 },

        // Additional members
        { name: "Deepika", teams: ["Marketing"], image: "/src/assets/headshots/deepika.png", level: 4 },
        //{ name: "Akriti Batra", teams: ["Design"], image: "/src/assets/headshots/IMG_2801 - Akriti Batra.heic", level: 3 },
        { name: "Hy Lac Nguyen", teams: ["Development"], image: "/src/assets/headshots/IMG-20240503-WA0046 - Hy Lac Nguyen.jpg", level: 2 },
        { name: "Jovitta Seb", teams: ["Logistics"], image: "/src/assets/headshots/WhatsApp Image 2025-12-06 at 11.39.53 AM - Jovitta Seb.jpeg", level: 4 },
    ];

    return (
        <>
            <div className="mt-[5dvh] pt-5 w-[80%] mx-auto flex flex-col gap-[30px] bg-[#fafbee]" id="teams">
                <img src={blueStar.src} alt="Blue Star" className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 -mt-10 -ml-10 z-0" />
                <h1 className="font-black p-5 -ml-2.5 text-5xl capitalize text-foreground stroke-xl font-title">
                    THE TEAM
                </h1>
            </div>

            {/* stands container */}
            <div className="relative w-full flex flex-col items-center justify-center mt-20">
                <div className="relative w-full max-w-7xl flex justify-center">
                    <img
                        src={stands.src}
                    alt="Team Stands"
                        className="w-full h-auto object-contain scale-90 md:scale-100 mx-auto"
                    />

                    {/* Team member circles on stands */}
                    {teamMembers.map((member) => {
                        const membersInLevel = teamMembers.filter(m => m.level === member.level);
                        const memberIndexInLevel = membersInLevel.findIndex(m => m.name === member.name);
                        const spacing = 100 / (membersInLevel.length + 1); // Distribute evenly across the level

                        // Calculate position based on level (responsive positioning)
                        const levelConfigs = {
                            1: { top: "3%", baseLeft: 3 }, // Top level
                            2: { top: "23%", baseLeft: 3 }, // Upper middle level
                            3: { top: "43%", baseLeft: 3 }, // Lower middle level
                            4: { top: "63%", baseLeft: 3 }, // Bottom level
                            5: { top: "83%", baseLeft: 3 }, // Lowest level
                        };
                        const config = levelConfigs[member.level as keyof typeof levelConfigs];
                        const leftPosition = config.baseLeft + (memberIndexInLevel + 1) * spacing;

                        return (
                            <div
                                key={member.name}
                                className={`absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-full border-2 border-white shadow-2xl overflow-hidden transition-all duration-300 drop-shadow-lg ${
                                    selectedCar === null || member.teams.includes(selectedCar)
                                        ? "opacity-100 scale-100"
                                        : "opacity-30 scale-90"
                                }`}
                            style={{
                                    top: config.top,
                                    left: `${leftPosition}%`,
                                    transform: "translate(-70%, 0%)", // Positioned to sit directly on stands
                                }}
                                title={member.name}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* cars at the bottom */}
            <div className="w-full overflow-hidden mt-16 md:mt-20 lg:mt-24 relative">
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
                            onMouseEnter={() => handleCarHover(car.name)}
                            onMouseLeave={() => handleCarHover(null)}
                            className={`flex-shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer z-10 relative ${
                                selectedCar === car.name ? "scale-110" : ""
                            }`}
                            aria-label={`${car.name} Team`}
                        >
                            <img
                                src={car.src}
                                alt={car.alt}
                                className="w-48 md:w-64 lg:w-80 xl:w-96 h-auto -translate-y-4 object-contain"
                            />
                        </button>
                    ))}
                </div>
                
                {/* Road */}
                <img
                    src={track.src}
                    alt="Road"
                    className="w-full h-auto object-cover absolute bottom-0 left-0"
                    style={{ maxWidth: "100vw" }}
                />
            </div>
        </>
    );
}

