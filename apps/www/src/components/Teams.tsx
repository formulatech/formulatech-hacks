import { useEffect, useState } from "react";
import designCar from "../assets/designCar.png";
import developersCar from "../assets/developersCar.png";
import financeCar from "../assets/financeCar.png";
import marketingCar from "../assets/marketingCar.png";
import sponsorshipCar from "../assets/sponsorshipCar.svg";
import stands from "../assets/stands.svg";
import track from "../assets/track.svg";
import workshopsCar from "../assets/workshopsCar.svg";

// Team member headshots
import adrianMathew from "../assets/headshots/adrian_mathew.jpeg";
import francesZhao from "../assets/headshots/frances_zhao.jpeg";
import mairaKhawaja from "../assets/headshots/maira_khawaja.png";
import marwaZaryab from "../assets/headshots/marwa_zaryab.jpg";
import rayyanHuda from "../assets/headshots/rayyan_huda.png";
import sharveshV from "../assets/headshots/sharvesh_v.jpeg";
import victoriaGee from "../assets/headshots/victoria_gee.jpg";

import anaManiram from "../assets/headshots/ana_maniram.jpeg";
import deepikaAnbalagan from "../assets/headshots/deepika_anbalagan.png";

import sunnyHu from "../assets/headshots/blank_headshot.png";
import emileeChen from "../assets/headshots/blank_headshot.png";
import jovittaSeb from "../assets/headshots/jovitta_seb.jpeg";

import ammarAdam from "../assets/headshots/ammar_adam.jpg";
import arielLiu from "../assets/headshots/blank_headshot.png";
import akritiBatra from "../assets/headshots/blank_headshot.png";
import rodneyWu from "../assets/headshots/rodney_wu.jpeg";

import akkiSengupta from "../assets/headshots/blank_headshot.png";
import elinZhang from "../assets/headshots/elin_zhang.jpg";
import hyLacNguyen from "../assets/headshots/hy_lac_nguyen.jpg";
import lindaChen from "../assets/headshots/linda_chen.png";
import richardLi from "../assets/headshots/richard_li.png";

import annieSong from "../assets/headshots/blank_headshot.png";
import irisZhu from "../assets/headshots/blank_headshot.png";
import aidanChien from "../assets/headshots/blank_headshot.png";

import frankDing from "../assets/headshots/blank_headshot.png";
import muhammadAhmad from "../assets/headshots/muhammad_ahmad.jpg";

import advaitGore from "../assets/headshots/blank_headshot.png";
import dequanKong from "../assets/headshots/dequan_kong.jpg";

import finnGuo from "../assets/headshots/finn_guo.png";

export default function Teams() {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

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
        { name: "Sponsorship", src: sponsorshipCar.src, alt: "Sponsorship Car" },
    ];

    const [offsetPx, setOffsetPx] = useState(0);
    const CAR_WIDTH_WITH_GAP = 320;
    const loopCars = [...cars, ...cars];

    useEffect(() => {
        let offset = 0;
        const totalWidth = cars.length * CAR_WIDTH_WITH_GAP;

        const step = () => {
            offset += 2;
            if (offset >= totalWidth) offset = 0;
            setOffsetPx(offset);
            requestAnimationFrame(step);
        };

        const frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, [cars.length]);

    const teamMembers = [
        // Chair and Team Leads
        { name: "Adrian Mathew", teams: ["Finance"], role: ["Treasurer", "Finance Team Lead"], image: adrianMathew, level: 5 },
        { name: "Frances Zhao", teams: ["Design"], role: ["Design Team Lead"], image: francesZhao, level: 5 },
        { name: "Marwa Zaryab", teams: ["Development", "Design", "Marketing", "Finance", "Workshops", "Logistics", "Sponsorship"], role: ["Deputy Chair", "Secretary", "Developer Team Lead"], image: marwaZaryab, level: 5 },
        { name: "Maira Khawaja", teams: ["Development", "Design", "Marketing", "Finance", "Workshops", "Logistics", "Sponsorship"], role: ["President"], image: mairaKhawaja, level: 5 },
        { name: "Rayyan Huda", teams: ["Marketing"], role: ["Marketing Team Lead"], image: rayyanHuda, level: 5 },
        { name: "Sharvesh Vivekanandhan", teams: ["Finance", "Sponsorship Team Lead"], role: ["Sponsorship Team Lead"], image: sharveshV, level: 5 },
        { name: "Victoria Gee", teams: ["Logistics"], role: ["Logistics Team Lead"], image: victoriaGee, level: 5 },

        // Marketing Team
        { name: "Ana Maniram Rodriguez", teams: ["Marketing"], role: ["Media Manager"], image: anaManiram, level: 4 },
        { name: "Deepika Anbalagan", teams: ["Marketing"], role: ["Marketing Coordinator"], image: deepikaAnbalagan, level: 4 },

        // Logistics Team
        { name: "Jovitta Sebastiampillai", teams: ["Logistics"], role: ["Logistics Coordinator"], image: jovittaSeb, level: 4 },
        { name: "Sunny Hu", teams: ["Logistics"], role: ["Logistics Coordinator"], image: sunnyHu, level: 4 },
        { name: "Emilee Chen", teams: ["Logistics"], role: ["Logistics Coordinator"], image: emileeChen, level: 4 },

        // Finance Team
        { name: "Ariel Liu", teams: ["Finance", "Sponsorship"], role: ["Sponsorship General Member", "Finance Coordinator"], image: arielLiu, level: 4 },
        { name: "Ammar Adam", teams: ["Finance"], role: ["Finance Coordinator"], image: ammarAdam, level: 4 },
        { name: "Rodney Wu", teams: ["Finance"], role: ["Finance Coordinator"], image: rodneyWu, level: 3 },
        { name: "Akriti Batra", teams: ["Finance"], role: ["Finance Coordinator"], image: akritiBatra, level: 2 },

        // Development Team
        { name: "Richard Li", teams: ["Development", "Sponsorship"], role: ["Front-End Developer", "Back-End Developer"], image: richardLi, level: 3 },
        { name: "Linda Chen", teams: ["Marketing", "Development"], role: ["Front-End Devloper", "Outreach Manager"], image: lindaChen, level: 3 },
        { name: "Elin Zhang", teams: ["Marketing", "Development"], role: ["Front-End Developer", "Marketing Coordinator"], image: elinZhang, level: 3 },
        { name: "Hy Lac Nguyen", teams: ["Development"], role: ["Front-End Developer"], image: hyLacNguyen, level: 3 },
        { name: "Akki Sengupta", teams: ["Development"], role: ["Back-End Developer"], image: akkiSengupta, level: 3 },

        { name: "Finn (Zheng han) Guo", teams: ["Developer"], role: ["CAD Developer"], image: finnGuo, level: 2 },

        // Design Team
        { name: "Annie Song", teams: ["Design"], role: ["Designer"], image: annieSong, level: 2 },
        { name: "Iris Zhu", teams: ["Design"], role: ["Designer"], image: irisZhu, level: 2 },
        { name: "Aidan Chien", teams: ["Design"], role: ["Designer"], image: aidanChien, level: 2 },

        // Sponsorship Team
        { name: "Frank Ding", teams: ["Finance"], role: ["Sponsorship General Member"], image: frankDing, level: 1 },
        { name: "Muhammad Ahmad", teams: ["Finance"], role: ["Sponsorship General Member"], image: muhammadAhmad, level: 1 },

        // Workshops Team
        { name: "Dequan Kong", teams: ["Workshops", "Logistics"], role: ["Logistics Coordinator", "Workshops Coordinator"], image: dequanKong, level: 1 },
        { name: "Advait Gore", teams: ["Workshops"], role: ["Workshops Coordinator"], image: advaitGore, level: 1 },
    ];

    const levels = [5, 4, 3, 2, 1];

    const membersByLevel = levels.map(level => ({
    level,
    members: teamMembers.filter(m => m.level === level),
    }));

    return (
        <>
            <div className="mt-[5dvh] pt-5 w-[80%] mx-auto flex flex-col gap-[30px] bg-[#fafbee]" id="teams">
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

            {/* Stands container */}
            <div className="relative w-full flex flex-col items-center justify-center mt-20">
                <div className="relative w-full max-w-7xl flex justify-center">
                    <img
                        src={stands.src}
                    alt="Team Stands"
                        className="w-full h-auto object-contain scale-90 md:scale-100 mx-auto"
                    />

                    {/* Team member circles on stands */}
                    {membersByLevel.map(({ level, members }) => {
                        const levelConfigs = isMobile
                        ? {
                            1: { top: "6%",  width: "60%" },
                            2: { top: "24%", width: "68%" },
                            3: { top: "42%", width: "74%" },
                            4: { top: "60%", width: "83%" },
                            5: { top: "79%", width: "90%" },
                        }
                        : {
                            1: { top: "3%",  width: "66%" },
                            2: { top: "23%", width: "75%" },
                            3: { top: "43%", width: "82%" },
                            4: { top: "63%", width: "92%" },
                            5: { top: "83%", width: "100%" },
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
                                        className={`w-[clamp(1.5rem,5vw,6rem)] h-[clamp(1.5rem,5vw,6rem)]
                                            rounded-full border-2 border-white shadow-2xl overflow-hidden transition-transform duration-200 ease-out hover:scale-125 hover:z-20 cursor-pointer
                                            ${
                                              selectedCar === null || member.teams.includes(selectedCar)
                                                ? 'opacity-100 scale-100'
                                                : 'opacity-30 scale-90'
                                            }
                                        `}
                                        title={member.name}
                                        >
                                        <img
                                            src={member.image.src}
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

            {/* Cars at the bottom */}
            <div className="w-full overflow-hidden relative">
                <div
                    className="inline-flex items-end gap-8 md:gap-12 lg:gap-16 car-scroll"
                    style={{
                        transform: `translateX(-${offsetPx}px)`,
                        marginTop: "clamp(4rem, 8vw, 10rem)",
                    }}
                >
                    {loopCars.map((car, index) => (
                        <button
                            key={`${car.name}-${index}`}
                            type="button"
                            onMouseEnter={() => handleCarHover(car.name)}
                            onMouseLeave={() => handleCarHover(null)}
                            className={`flex-shrink-0 w-[clamp(12rem,25vw,50rem)] transition-transform duration-200 hover:scale-110 cursor-pointer z-10  ${
                                selectedCar === car.name ? "scale-110" : ""
                            }`}                            
                            aria-label={`${car.name} Team`}
                        >
                            <img
                                src={car.src}
                                alt={car.alt}
                                className="w-full h-auto object-contain"
                            />
                        </button>
                    ))}
                </div>

                {/* Static road */}
                <img
                    src={track.src}
                    alt="Road"
                    className="w-full h-auto object-cover z-0"
                />
            </div>
        </>
    );
}

