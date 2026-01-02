import { useCallback, useEffect, useRef, useState } from "react";

import codeofconduct from "../assets/faq-codeconduct.svg";
import flag from "../assets/faq-flag.svg";
import general from "../assets/faq-general.svg";
import logistics from "../assets/faq-logistics.svg";
import signup from "../assets/faq-signup.svg";
//import redstar from "../assets/red-star.svg";
//import tealstar from "../assets/teal-star.svg";
import track from "../assets/track.svg";

const questions = {
    General: [
        { q: "What is FormulaTech Hacks?", a: "FormulaTech Hacks is a student-led hackathon hosted at the University of Waterloo that combines innovation, technology, and motorsport culture. Participants compete in software, hardware, and CAD challenges that push technical creativity to the limit." },
        { q: "Who can participate?", a: "Any college or university student aged 18 or older is welcome to participate." },
        { q: "What kind of projects can I build?", a: "Anything that aligns with our innovation and technology theme! From software and hardware prototypes to data science and design projects, the sky’s the limit." },
        { q: "Do I need to be in an engineering or CS program to join?", a: "You don’t need to be in Engineering or Computer Science — the hackathon is open to all programs!" },
    ],
    "Sign-Up": [
        { q: "How do I register?", a: "You can register through our official website once applications open. Keep an eye on our social media for updates!" },
        { q: "Is there a fee?", a: "Nope! FormulaTech Hacks is completely free to attend, thanks to support from WUSA, MEF, and SLEF." },
        { q: "Can I sign up with a team?", a: "We dont accept whole teams, just individual apps, team forming can be done at the event or through Discord " },
        { q: "Do I need prior hackathon experience?", a: "Nope! You don’t need any prior hackathon experience — FormulaTech Hacks is designed to be beginner-friendly and welcoming to everyone, no matter your skill level." },
    ],
    Logistics: [
        { q: "Where is the event held?", a: "The hackathon will take place in Engineering 7 (E7) Design Bay at the University of Waterloo" },
        { q: "When is the hackathon?", a: "FormulaTech Hacks’ first hackathon will be held on January 17-18, 2026" },
    ],
    "Code of Conduct": [
        { q: "What are the rules?", a: "All participants must follow the FormulaTech Hacks Code of Conduct, which promotes respect, inclusion, and integrity. Harassment or discrimination of any kind will not be tolerated." },
        { q: "How do I report an issue?", a: "If you experience or witness a violation of the Code of Conduct, please contact an organizer immediately or email us at formulatech.hacks@gmail.com" },
    ],
} as const;

export default function FAQ() {
    const [activeCategory, setActiveCategory] = useState<string | null>("General");
    const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});
    const [isOpen, setIsOpen] = useState(true);
    const popupRef = useRef<HTMLDivElement | null>(null);
    const carsRef = useRef<HTMLDivElement | null>(null);
    const hideTimeoutRef = useRef<number | null>(null);
  
    const ANIM_MS = 320;

    const openPopup = (category: string) => {
        if (isOpen) {
            if (activeCategory === category) {
                // Clicked same car → close popup
                closePopup();
                return;
            }
            // Clicked a different car → swap content without closing animation
            setActiveCategory(category);
            setOpenQuestions({});
            return;
        }
        // Popup is closed → open it
        setActiveCategory(category);
        setIsOpen(true);
        setOpenQuestions({});
    };
    
      // Close popup (start closing animation, then clear content after animation)
    const closePopup = useCallback(() => {
        setIsOpen(false);
        // clear any previous timeout
        if (hideTimeoutRef.current) {
            window.clearTimeout(hideTimeoutRef.current);
        }
        hideTimeoutRef.current = window.setTimeout(() => {
            setActiveCategory(null);
            setOpenQuestions({});
            hideTimeoutRef.current = null;
        }, ANIM_MS);
    }, []);
    
      // Click-outside handler — ignores clicks inside popup AND clicks on the cars grid
    useEffect(() => {
        if (!isOpen) return;
    
        const handleDocMouseDown = (e: MouseEvent) => {
            const target = e.target as Node;
            const clickedInsidePopup = popupRef.current?.contains(target);
            const clickedOnCars = carsRef.current?.contains(target);
    
          // If click is neither inside popup nor on the cars area -> close
            if (!clickedInsidePopup && !clickedOnCars) {
                closePopup();
            }
        };
    
        document.addEventListener("mousedown", handleDocMouseDown);
        return () => document.removeEventListener("mousedown", handleDocMouseDown);
    }, [isOpen, closePopup]);
    
      // Cleanup timer on unmount
    useEffect(() => {
        return () => {
            if (hideTimeoutRef.current) window.clearTimeout(hideTimeoutRef.current);
        };
    }, []);

    const toggleQuestion = (q: string) => {
        setOpenQuestions(prev => ({
            ...prev,
            [q]: !prev[q],
        }));
    };

    return (
        <div className="mt-[20dvh] pt-20 w-full flex flex-col gap-[30px] relative pb-20 min-h-[50vw] bg-[#fafbee]"
            id="faqs"
        >
            <h1
                className="flex flex-col md:flex-row items-center font-black px-3 py-4 md:p-5 sm:ml-0 lg:ml-15 font-title capitalize text-center leading-tight"
                style={{ fontSize: "clamp(1.4rem, 4vw, 2.75rem)" }}>
                <span className="mr-6 bg-clip-text text-transparent bg-gradient-to-t from-primary to-secondary hidden md:block">/</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    FREQUENTLY ASKED QUESTIONS
                </span>
                <span className="ml-6 bg-clip-text text-transparent bg-gradient-to-t from-primary to-secondary hidden md:block">/</span>
            </h1>
    
            {/* Cars + Road Grid */}
            <div className="relative w-full flex flex-col items-center">
                {/* Cars (give this a ref so clicks on the cars do NOT close popup) */}
                <div
                    ref={carsRef}
                    className="flex justify-between items-center w-full z-10 relative"
                    style={{ gap: "clamp(0.25rem, 0.5vw, 0.5rem)" }}
                >
                    <button
                        type="button"
                        onClick={() => openPopup("General")}
                        className="flex flex-col items-center hover:scale-105 transition cursor-pointer"
                    >
                        <img src={general.src} alt="General" className="w-100 h-auto" />
                    </button>
    
                    <button
                        type="button"
                        onClick={() => openPopup("Sign-Up")}
                        className="flex flex-col items-center hover:scale-105 transition cursor-pointer"
                    >
                        <img src={signup.src} alt="Sign-Up" className="w-100 h-auto" />
                    </button>
    
                    <button
                        type="button"
                        onClick={() => openPopup("Logistics")}
                        className="flex flex-col items-center hover:scale-105 transition cursor-pointer"
                    >
                        <img src={logistics.src} alt="Logistics" className="w-100 h-auto" />
                    </button>

                    <button
                        type="button"
                        onClick={() => openPopup("Code of Conduct")}
                        className="flex flex-col items-center hover:scale-105 transition cursor-pointer"
                    >
                        <img src={codeofconduct.src} alt="Code of Conduct" className="w-100 h-auto" />
                    </button>
                </div>

                <img
                    src={track.src}
                    alt="Track"
                    className="w-screen h-auto object-cover"
                    style={{ maxWidth: "100vw" }}
                />                
                <div className="w-full flex justify-center -mt-2">
                    <div
                        ref={popupRef}
                        className={`bg-black rounded-b-2xl pt-10 pl-10 pr-15 text-white shadow-lg relative transition-all duration-300 ease-in-out overflow-hidden
                            w-[85vw]
                            ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 max-h-0 pointer-events-none"}
                        `}
                        aria-hidden={!isOpen}
                    >
                        <button
                            type="button"
                            onClick={closePopup}
                            className="absolute top-6 right-5 text-6xl text-red-500 cursor-pointer rotate-45 text-[clamp(2rem,6vw,4rem)]"
                        >
                        +
                        </button>
    
                        {/* CONTENT: only this changes when clicking cars */}
                        {activeCategory ? (
                            <div className="mt-10 mb-10">
                                <div className="flex flex-col gap-4">
                                    {questions[activeCategory as keyof typeof questions].map(({ q, a }) => (
                                        <div key={q} className="flex flex-col mb-6">
                                            <button type="button" onClick={() => toggleQuestion(q)} className="flex items-center text-left cursor-pointer group uppercase font-title">
                                                <img src={flag.src} alt="flag"
                                                    className="w-[clamp(2rem,3vw,3rem)] h-[clamp(2rem,3vw,3rem)] transform transition-transform duration-200 group-hover:scale-125"
                                                />
                                                <span className="mx-5 font-bold text-[clamp(0.875rem,2vw,1.25rem)]">{q}</span>
                                            </button>
                                            <div
                                                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                                    openQuestions[q]
                                                    ? "opacity-100 translate-y-0 max-h-400"
                                                    : "opacity-0 -translate-y-2 max-h-0"
                                                }`}
                                            >
                                                <p className="mt-2 text-primary-2 font-primary text-left text-[clamp(0.75rem,1.8vw,1rem)]">{a}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center text-gray-400">No category selected</div>
                        )}
                    </div>
                </div>
            </div>
            {/* TODO: Fix the positioning of these, for now
            <img
                src={redstar.src}
                alt="Decorative star"
                className="hidden md:block absolute -right-30 -bottom-[-12rem] w-80 h-80 red-star-spin z-50 pointer-events-none"
                style={{ width: "clamp(10rem, 22vw, 20rem)", height: "clamp(10rem, 22vw, 20rem)" }}
            />
            <img
                src={tealstar.src}
                alt="Decorative star"
                className="hidden md:block absolute -left-40 -bottom-[-1rem] w-80 h-80 teal-star-spin z-50 pointer-events-none"
                style={{ width: "clamp(10rem, 22vw, 20rem)", height: "clamp(10rem, 22vw, 20rem)" }}
            />
            */}
        </div>
    );
}