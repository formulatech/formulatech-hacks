import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";


interface Position {
    x: number;
    y: number;
    size?: number;
}

interface Sponsor {
    key: string;
    name: string;
    logoPath: string;
    website: string;
    description: string;
    positions: {
        desktop: Position;
        mobile: Position;
    };
}

// Create a function that generates sponsors with defaults
function createSponsor(sponsor: Partial<Sponsor>): Sponsor {
    return {
        key: sponsor.key || crypto.randomUUID(),
        name: sponsor.name || "Default Sponsor",
        logoPath: sponsor.logoPath || "/sponsors/default_sponsor.svg",
        website: sponsor.website || "https://example.com",
        description: sponsor.description || "Default sponsor description",
        positions: {
            desktop: {
                x: sponsor.positions?.desktop?.x || 100,
                y: sponsor.positions?.desktop?.y || 100,
                size: sponsor.positions?.desktop?.size || 47
            },
            mobile: {
                x: sponsor.positions?.mobile?.x || 50,
                y: sponsor.positions?.mobile?.y || 50,
                size: sponsor.positions?.mobile?.size || 23.34
            }
        }
    };
}

const sponsors: Sponsor[] = [
    createSponsor({
        name: "Sponsor 1",
        logoPath: "/sponsors/sponsor_sticker.svg",
        website: "https://www.sponsor1.com",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        positions: {
            desktop: {
                x: 190,
                y: 83,
            },
            mobile: {
                x: 94.34,
                y: 41.05,
            }
        },
    }),
    createSponsor({
        name: "Sponsor 2",
        logoPath: "/sponsors/sponsor_sticker.svg",
        website: "https://www.sponsor2.com",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        positions: {
            desktop: {
                x: 331,
                y: 109,
            },
            mobile: {
                x: 164.35,
                y: 53.91,
            }
        },
    }),
    createSponsor({
        name: "Sponsor 3",
        logoPath: "/sponsors/sponsor_sticker.svg",
        website: "https://www.sponsor3.com",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        positions: {
            desktop: {
                x: 397,
                y: 212,
            },
            mobile: {
                x: 197.13,
                y: 104.85,
            }
        }
    }),
    createSponsor({
        name: "Sponsor 4",
        logoPath: "/sponsors/sponsor_sticker.svg",
        website: "https://www.sponsor4.com",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        positions: {
            desktop: {
                x: 284,
                y: 313,
            },
            mobile: {
                x: 141.02,
                y: 154.8,
            }
        }
    }),
]

export default function Sponsors() {
    const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);
    const mobileHelmet = useRef<HTMLImageElement>(null);
    const [mobileHelmetWidth, setMobileHelmetWidth] = useState<number>(287);
    const desktopHelmet = useRef<HTMLImageElement>(null);

    // Run once when element mounts to get initial width
    useEffect(() => {
        if (mobileHelmet.current) {
            setMobileHelmetWidth(mobileHelmet.current.width);
        }

        // Use ResizeObserver to detect actual size changes
        const observer = new ResizeObserver(entries => {
            for (const entry of entries) {
                setMobileHelmetWidth(entry.contentRect.width);
            }
        });

        if (mobileHelmet.current) {
            observer.observe(mobileHelmet.current);
        }

        return () => {
            if (mobileHelmet.current) observer.unobserve(mobileHelmet.current);
        };
    }, []);

    const expandedSponsorRef = useRef<HTMLDivElement>(null);

    // Add click listener to close sponsor details when clicking outside
    useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
        // If we have a selected sponsor and clicked outside the expanded element
        if (selectedSponsor && 
            expandedSponsorRef.current && 
            !expandedSponsorRef.current.contains(event.target as Node)) {
        setSelectedSponsor(null);
        }
    }
    
    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    }, [selectedSponsor]); // Re-run effect when selectedSponsor changes

    function toggleSponsor(sponsor: Sponsor) {
        setSelectedSponsor(prev => prev?.key === sponsor.key ? null : sponsor);
    }

    // Use helmet width for scaling
    function getScaleFactor(viewport: "mobile" | "desktop") {
        const baseWidth = viewport === "mobile" ? 287 : 578;
        return viewport === "mobile" ? mobileHelmetWidth / baseWidth : 1;
    }

    // Function to render helmet stickers
    function HelmetStickers(viewport: "mobile" | "desktop") {
        return sponsors.map((sponsor) => (
            <button 
                type="button"
                key={sponsor.key}
                className={`absolute z-1 cursor-pointer transition-transform ${selectedSponsor?.key === sponsor.key ? 'scale-125' : 'hover:scale-110'}`}
                style={{
                    left: `${sponsor.positions[viewport].x * getScaleFactor(viewport)}px`,
                    top: `${sponsor.positions[viewport].y * getScaleFactor(viewport)}px`,
                    width: `${sponsor.positions[viewport].size}px`,
                    height: `${sponsor.positions[viewport].size}px`,
                }}
                onClick={() => toggleSponsor(sponsor)}
                onKeyDown={() => toggleSponsor(sponsor)}
                tabIndex={0} // Make it focusable
                aria-expanded={selectedSponsor?.key === sponsor.key}
                aria-controls={`sponsor-details-${sponsor.key}`}
                aria-label={`Checkout ${sponsor.name}`}
            >
                <img src="/sponsors/sponsor_sticker.svg" alt={sponsor.name} className="w-full h-full" />
            </button>
        ));
    }

    return (
        <div>
            {/* Mobile View */}
            <div className="flex flex-col items-center justify-center px-8 py-6 gap-10 bg-background">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-black p-5 text-xl capitalize text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-xl font-title">OUR SPONSORS</h1>
                    <p className="font-body font-regular text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>

                <a href="/" className="flex items-center justify-center">
                    <img src="/become_a_sponsor_CTA.svg" alt="Become a Sponsor" className="w-[77.27px] object-contain" />
                </a>

                <div className="relative flex flex-col items-center justify-center">
                    <motion.div 
                        animate={{ 
                            width: selectedSponsor ? `${287 * (151/329)}px` : "287px" 
                        }}
                        transition={{ 
                            duration: 0.3,
                            ease: "easeInOut" 
                        }}
                        className="relative"
                        style={{
                            zIndex: 1
                        }}
                    >
                        <img 
                            ref={mobileHelmet} 
                            src="/smaller_svg_helmet.svg" 
                            alt="Sponsors section mobile decoration" 
                            className="block w-full object-contain pointer-events-none" 
                        />
                        {HelmetStickers("mobile")}
                    </motion.div>

                    {/* Expanding content below */}
                    <motion.div
                        initial={false} // Prevents animation on first render
                        animate={{
                            height: selectedSponsor ? "auto" : 0,
                            opacity: selectedSponsor ? 1 : 0,
                            marginTop: selectedSponsor ? 16 : 0,
                        }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            delay: selectedSponsor ? 0.1 : 0 // Slight delay to start after helmet begins animating
                        }}
                        className="w-screen flex justify-center"
                        style={{
                            zIndex: 0,
                        }}
                        ref={expandedSponsorRef} // Reference to the expanding div
                    >
                        {/* Content to reveal */}
                        <div
                            className="p-4 text-white"
                            style={{
                                background: "url('/sponsor_info_frame_mobile.svg') no-repeat center center / cover",
                                minHeight: "251px",
                                width: "100%",
                                height: "100%",
                                maxWidth: "400px",
                                marginTop: "-36px"
                            }}
                        >
                        {selectedSponsor && (
                            <div
                                className="flex flex-col items-center justify-end mt-24"
                            >
                                <div
                                    style={{
                                        width: `${mobileHelmetWidth * 1.5}px`
                                    }}
                                >
                                    <div className="flex flex-row justify-between gap-[18px]">
                                        <img 
                                            src={selectedSponsor.logoPath} 
                                            alt={selectedSponsor.name} 
                                            className="max-w-[33px] object-contain" 
                                        />
                                        <h3 className="text-[17px] font-body">{selectedSponsor.name}</h3>
                                    </div>
                                    <p className="mt-2">{selectedSponsor.description}</p>
                                </div>
                            </div>
                        )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
