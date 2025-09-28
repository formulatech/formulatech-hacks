import { useCallback, useEffect, useRef, useState } from "react";

import codeofconduct from "../assets/faq-codeconduct.svg";
import flag from "../assets/faq-flag.svg";
import general from "../assets/faq-general.svg";
import logistics from "../assets/faq-logistics.svg";
import signup from "../assets/faq-signup.svg";

const questions = {
    General: [
        { q: "What is FormulaTech Hacks?", a: "It’s a hackathon for students to showcase projects." },
        { q: "Who can participate?", a: "Anyone in the student community can join." },
    ],
    "Sign-Up": [
        { q: "How do I register?", a: "You can register via our online form." },
        { q: "Is there a fee?", a: "No, participation is completely free." },
    ],
    Logistics: [
        { q: "Where is the event held?", a: "The event is held at Engineering 7 (E7) in the Design Bay" },
        { q: "When is the hackathon?", a: "FormulaTech Hacks will be taking place on January 17-18th, 2026" },
    ],
    "Code of Conduct": [
        { q: "What are the rules?", a: "Participants should follow the event’s code of conduct." },
        { q: "How do I report an issue?", a: "Reach out to the event organizers via email." },
    ],
} as const;

export default function FAQ() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});
    const [isOpen, setIsOpen] = useState(false);
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
        <div className="mt-[20dvh] pt-20 w-[80%] mx-auto flex flex-col gap-[30px]" id="faqs">
            <h1 className="font-black p-5 -ml-2.5 text-5xl capitalize text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-xl font-title">
                FREQUENTLY ASKED QUESTIONS
            </h1>
    
            {/* Cars + Road Grid */}
            <div className="relative w-full flex flex-col items-center">
                {/* Cars (give this a ref so clicks on the cars do NOT close popup) */}
                <div
                    ref={carsRef}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 w-full place-items-center z-10 relative"
                >
                    <button
                        type="button"
                        onClick={() => openPopup("General")}
                        className="flex flex-col items-center hover:scale-105 transition cursor-pointer"
                    >
                        <img src={general.src} alt="General" className="w-50 h-auto" />
                    </button>
    
                    <button
                        type="button"
                        onClick={() => openPopup("Sign-Up")}
                        className="flex flex-col items-center hover:scale-105 transition cursor-pointer"
                    >
                        <img src={signup.src} alt="Sign-Up" className="w-50 h-auto" />
                    </button>
    
                    <button
                        type="button"
                        onClick={() => openPopup("Logistics")}
                        className="flex flex-col items-center hover:scale-105 transition cursor-pointer"
                    >
                        <img src={logistics.src} alt="Logistics" className="w-50 h-auto" />
                    </button>

                    <button
                        type="button"
                        onClick={() => openPopup("Code of Conduct")}
                        className="flex flex-col items-center hover:scale-105 transition cursor-pointer"
                    >
                        <img src={codeofconduct.src} alt="Code of Conduct" className="w-50 h-auto" />
                    </button>
                </div>

                <div
                    className="w-[100vw] h-12"
                    style={{
                        backgroundColor: "#000000",
                        backgroundImage: "linear-gradient(to right, white 100%, transparent 0)",
                        backgroundSize: "16px 2px",
                        backgroundRepeat: "repeat-x",
                        backgroundPosition: "center",
                    }}
                />

                <div className="w-full flex justify-center -mt-2">
                    <div
                        ref={popupRef}
                        className={`bg-black rounded-b-2xl p-6 text-white shadow-lg relative
                            transition-all duration-300 ease-in-out overflow-hidden
                            w-[80vw] min-w-[300px] max-w-[75vw]
                            ${isOpen ? "opacity-100 translate-y-0 max-h-[600px] pointer-events-auto" : "opacity-0 -translate-y-4 max-h-0 pointer-events-none"}
                        `}
                        aria-hidden={!isOpen}
                    >
                        <button
                            type="button"
                            onClick={closePopup}
                            className="absolute top-3 right-3 text-xl font-bold hover:text-red-500"
                        >
                        ✖
                        </button>
    
                        {/* CONTENT: only this changes when clicking cars */}
                        {activeCategory ? (
                            <div className="flex flex-col gap-4">
                                {questions[activeCategory as keyof typeof questions].map(({ q, a }) => (
                                    <div key={q} className="flex flex-col">
                                        <button type="button" onClick={() => toggleQuestion(q)} className="flex items-center cursor-pointer group">
                                            <img src={flag.src} alt="flag"
                                                className="w-15 h-15 transform transition-transform duration-200 group-hover:scale-125"
                                            />
                                            <span className="font-bold">{q}</span>
                                        </button>
                                        <div
                                            className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                                openQuestions[q]
                                                ? "opacity-100 translate-y-0 max-h-40"
                                                : "opacity-0 -translate-y-2 max-h-0"
                                            }`}
                                        >
                                            <p className=" ml-15 mt-2 text-primary-2">{a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center text-gray-400">No category selected</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}