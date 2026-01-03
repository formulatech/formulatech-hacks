import { useEffect, useState } from "react";
import designCar from "../assets/designCar.png";
import developersCar from "../assets/developersCar.png";
import financeCar from "../assets/financeCar.png";
import marketingCar from "../assets/marketingCar.png";
import stands from "../assets/stands.svg";
import blueStar from "../assets/teal-star.svg";
import track from "../assets/track.svg";
import workshopsCar from "../assets/workshopsCar.svg";

// Team member headshots

export default function Teams() {
    const [selectedCar, setSelectedCar] = useState<string | null>(null);

    const [hoveredMember, setHoveredMember] = useState<string | null>(null);
    const [popupSide, setPopupSide] = useState<"left" | "right">("right");

    const handleMemberHover = (
        memberName: string,
        el: HTMLDivElement | null
    ) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const spaceLeft = rect.left;
        const spaceRight = window.innerWidth - rect.right;

        setPopupSide(spaceRight >= spaceLeft ? "right" : "left");
        setHoveredMember(memberName);
    };

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

    const [offsetPx, setOffsetPx] = useState(0);
    const CAR_WIDTH = 320;
    const loopCars = [...cars, ...cars];

    useEffect(() => {
        const interval = setInterval(() => {
            setOffsetPx(prev => {
            const next = prev + CAR_WIDTH;
            return next >= cars.length * CAR_WIDTH ? 0 : next;
            });
        }, 2000);
        
        return () => clearInterval(interval);
    }, [cars.length]);      
    
    /**
     * TODO:
     * Once sponsorship is an official team, the team members with a comment beside their entry should have "Sponsorship" added to the teams array
     * For now, sponsorship and finance have been merged.
     * It will be specified whether or not the Sponsorship team member should keep the "Finance" role or not
     * ("also sponsorship" means don't remove finance but just add sponsorship, "replace with sponsorship" means replace finance with sponsorship)
    */

    const teamMembers = [
        // Chair and Team Leads
        { name: "Adrian Mathew", teams: ["Finance"], role: ["Treasurer", "Finance Team Lead"], image: "/src/assets/headshots/adrian_mathew.jpeg", level: 5 },
        { name: "Frances Zhao", teams: ["Design"], role: ["Design Team Lead"], image: "/src/assets/headshots/frances_zhao.jpeg", level: 5 },
        { name: "Marwa Zaryab", teams: ["Development", "Design", "Marketing", "Finance", "Workshops", "Logistics", "Sponsorship"], role: ["Deputy Chair", "Secretary", "Developer Team Lead"], image: "/src/assets/headshots/marwa_zaryab.jpg", level: 5 },
        { name: "Maira Khawaja", teams: ["Development", "Design", "Marketing", "Finance", "Workshops", "Logistics", "Sponsorship"], role: ["President"], image: "/src/assets/headshots/maira_khawaja.png", level: 5 },
        { name: "Rayyan Huda", teams: ["Marketing"], role: ["Marketing Team Lead"], image: "/src/assets/headshots/rayyan_huda.png", level: 5 },
        { name: "Sharvesh Vivekanandhan", teams: ["Finance", "Sponsorship Team Lead"], role: ["Sponsorship Team Lead"], image: "/src/assets/headshots/sharvesh_v.jpeg", level: 5 },
        { name: "Victoria Gee", teams: ["Logistics"], role: ["Logistics Team Lead"], image: "/src/assets/headshots/victoria_gee.JPG", level: 5 },

        // Marketing Team
        { name: "Ana Maniram Rodriguez", teams: ["Marketing"], role: ["Media Manager"], image: "/src/assets/headshots/ana_maniram.jpeg", level: 4 },
        { name: "Deepika Anbalagan", teams: ["Marketing"], role: ["Marketing Coordinator"], image: "/src/assets/headshots/deepika_anbalagan.png", level: 4 },

        // Logistics Team
        { name: "Jovitta Sebastiampillai", teams: ["Logistics"], role: ["Logistics Coordinator"], image: "/src/assets/headshots/jovitta_seb.jpeg", level: 4 },
        { name: "Sunny Hu", teams: ["Logistics"], role: ["Logistics Coordinator"], image: "/src/assets/headshots/blank_headshot.png", level: 4 },
        { name: "Emilee Chen", teams: ["Logistics"], role: ["Logistics Coordinator"], image: "/src/assets/headshots/blank_headshot.png", level: 4 },

        // Finance Team
        { name: "Ariel Liu", teams: ["Finance", "Sponsorship"], role: ["Sponsorship General Member", "Finance Coordinator"], image: "/src/assets/headshots/blank_headshot.png", level: 4 },
        { name: "Ammar Adam", teams: ["Finance"], role: ["Finance Coordinator"], image: "/src/assets/headshots/ammar_adam.jpg", level: 4 },
        { name: "Rodney Wu", teams: ["Finance"], role: ["Finance Coordinator"], image: "/src/assets/headshots/rodney_wu.jpeg", level: 3 },
        { name: "Akriti Batra", teams: ["Finance"], role: ["Finance Coordinator"], image: "/src/assets/headshots/blank_headshot.png", level: 2 },

        // Development Team
        { name: "Richard Li", teams: ["Development", "Sponsorship"], role: ["Front-End Developer", "Back-End Developer"], image: "/src/assets/headshots/richard_li.png", level: 3 },
        { name: "Linda Chen", teams: ["Marketing", "Development"], role: ["Front-End Devloper", "Outreach Manager"], image: "/src/assets/headshots/linda_chen.png", level: 3 },
        { name: "Elin Zhang", teams: ["Marketing", "Development"], role: ["Front-End Developer", "Marketing Coordinator"], image: "/src/assets/headshots/elin_zhang.jpg", level: 3 },
        { name: "Hy Lac Nguyen", teams: ["Development"], role: ["Front-End Developer"], image: "/src/assets/headshots/hy_lac_nguyen.jpg", level: 3 },
        { name: "Akki Sengupta", teams: ["Development"], role: ["Back-End Developer"], image: "/src/assets/headshots/blank_headshot.png", level: 3 },

        // Design Team
        { name: "Annie Song", teams: ["Design"], role: ["Designer"], image: "/src/assets/headshots/blank_headshot.png", level: 2 },
        { name: "Iris Zhu", teams: ["Design"], role: ["Designer"], image: "/src/assets/headshots/blank_headshot.png", level: 2 },
        { name: "Aidan Chien", teams: ["Design"], role: ["Designer"], image: "/src/assets/headshots/blank_headshot.png", level: 2 },

        // Sponsorship Team
        { name: "Frank Ding", teams: ["Finance"], role: ["Sponsorship General Member"], image: "/src/assets/headshots/blank_headshot.png", level: 1 },  // replace with sponsorship
        { name: "Muhammad Ahmad", teams: ["Finance"], role: ["Sponsorship General Member"], image: "/src/assets/headshots/muhammad_ahmad.jpg", level: 1 },  // replace with sponsorship

        // Workshops Team
        { name: "Dequan Kong", teams: ["Workshops", "Logistics"], role: ["Logistics Coordinator", "Workshops Coordinator"], image: "/src/assets/headshots/dequan_kong.jpg", level: 1 },
        { name: "Advait Gore", teams: ["Workshops"], role: ["Workshops Coordinator"], image: "/src/assets/headshots/blank_headshot.png", level: 1 },
    ];

    const levels = [5, 4, 3, 2, 1];

    const membersByLevel = levels.map(level => ({
    level,
    members: teamMembers.filter(m => m.level === level),
    }));

    return (
        <>
            <div className="mt-[5dvh] pt-5 w-[80%] mx-auto flex flex-col gap-[30px] bg-[#fafbee]" id="teams">
                <img src={blueStar.src} alt="Blue Star" className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 -mt-10 -ml-10 z-0" />
                <h1
                    className="mx-auto flex justify-center items-center font-black font-title capitalize text-center leading-tight"
                    style={{ fontSize: "clamp(1.4rem, 4vw, 2.75rem)" }}>
                    <span className="mr-6 bg-clip-text text-transparent bg-gradient-to-t from-primary to-secondary hidden md:block">/</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        MEET THE TEAM
                    </span>
                    <span className="ml-6 bg-clip-text text-transparent bg-gradient-to-t from-primary to-secondary hidden md:block">/</span>
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
                    {membersByLevel.map(({ level, members }) => {
                        const levelConfigs = {
                            1: { top: "3%", width: "66%" },
                            2: { top: "23%", width: "75%" },
                            3: { top: "43%", width: "82%" },
                            4: { top: "63%", width: "92%" },
                            5: { top: "83%",  width: "100%" },
                        };

                        return (
                            <div
                                key={level}
                                className="absolute left-1/2 -translate-x-1/2 flex justify-evenly items-center"
                                style={{
                                    top: levelConfigs[level as keyof typeof levelConfigs].top,
                                    width: levelConfigs[level as keyof typeof levelConfigs].width,
                                }}
                            >
                                {members.map(member => (
                                    <div
                                        key={member.name}
                                        className={`relative ${
                                            hoveredMember === member.name ? "z-30" : "z-10"
                                        }`}
                                        onMouseEnter={e =>
                                            handleMemberHover(member.name, e.currentTarget)
                                        }
                                        onMouseLeave={() => setHoveredMember(null)}
                                    >
                                        {/* Circle */}
                                        <div
                                        className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-18 lg:h-18 xl:w-20 xl:h-20
                                            rounded-full border-2 border-white shadow-2xl overflow-hidden
                                            transition-transform duration-200 ease-out
                                            hover:scale-125 hover:z-20 cursor-pointer
                                            ${
                                            selectedCar === null || member.teams.includes(selectedCar)
                                                ? "opacity-100 scale-100"
                                                : "opacity-30 scale-90"
                                            }`}
                                        title={member.name}
                                        >
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                        </div>

                                        {/* Popup card */}
                                        <div
                                            className={`
                                                absolute top-full mt-1
                                                left-1/2 -translate-x-1/2
                                                w-44 sm:w-48
                                                bg-white border-none rounded-lg shadow-xl
                                                px-3 py-1.5
                                                transition-all duration-200 ease-out
                                                pointer-events-none
                                                ${
                                                hoveredMember === member.name
                                                    ? "opacity-100 translate-y-0"
                                                    : "opacity-0 -translate-y-2"
                                                }
                                            `}
                                        >
                                            <div className="flex flex-col items-center">
                                                <p className="font-bold text-sm text-gray-900 text-center">
                                                {member.name}
                                                </p>
                                                <p className="text-xs text-gray-600 text-center mt-0.5">
                                                {member.role ? member.role.join(", ") : member.teams.join(", ")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* cars at the bottom */}
            <div className="w-full overflow-hidden mt-16 md:mt-20 lg:mt-24 relative">
            {/* Moving cars */}
                <div
                    className="flex items-center gap-8 md:gap-12 lg:gap-16 car-scroll"
                    style={{ width: "fit-content" }}
                >
                    {loopCars.map((car, index) => (
                    <button
                        key={`${car.name}-${index}`}
                        type="button"
                        onMouseEnter={() => handleCarHover(car.name)}
                        onMouseLeave={() => handleCarHover(null)}
                        className={`flex-shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer z-10 ${
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

                {/* Static road */}
                <img
                    src={track.src}
                    alt="Road"
                    className="w-full h-auto object-cover absolute bottom-0 left-0"
                />
            </div>
        </>
    );
}

