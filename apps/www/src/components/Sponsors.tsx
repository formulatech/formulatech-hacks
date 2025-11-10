// THIS COMPONENT NEEDS TO HAVE A CLIENT DIRECTIVE WHEN USED IN ASTRO
// OR ELSE MOTION WILL NOT WORK

import { AnimatePresence, motion } from "motion/react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

function useViewport(minWidth: number) {
    // Custom hook to get the viewport width and check if it's > minWidth
    const [meetsMinWidth, setMeetsMinWidth] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setMeetsMinWidth(window.innerWidth >= minWidth);
        };
        handleResize(); // Check on initial load
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [minWidth]);

    return { meetsMinWidth }; // 768px is Tailwind's md breakpoint
}

interface Position {
    x: number;
    y: number;
    size?: number;
}

interface Sponsor {
    key: string;
    name: string;
    logoPath: string;
    secondaryLogoPath: string;
    website: string;
    description: string;
    // Max width (in px) of the expanded logo per viewport
    expandedSponsorLogoWidth: {
        desktop: number;
        tablet: number;
        mobile: number;
    };
    // Optional per-viewport description font size classes (Tailwind)
    // mobile: no prefix, tablet: will be applied with sm:, desktop: will be applied with lg:
    expandedDescriptionFontSize?: {
        mobile?: string;
        tablet?: string;
        desktop?: string;
    };
    positions: {
        desktop: Position;
        tablet: Position;
        mobile: Position;
    };
}

// Input type for createSponsor function
type SponsorInput = {
    key?: string;
    name?: string;
    logoPath?: string;
    secondaryLogoPath?: string;
    website?: string;
    description?: string;
    expandedSponsorLogoWidth?: {
        desktop?: number;
        tablet?: number;
        mobile?: number;
    };
    expandedDescriptionFontSize?: {
        mobile?: string;
        tablet?: string;
        desktop?: string;
    };
    positions?: {
        desktop?: Partial<Position>;
        tablet?: Partial<Position>;
        mobile?: Partial<Position>;
    };
};

// Create a slug from a string (replace spaces with hyphens, lowercase)
function slugify(text: string): string {
    return text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-") // Replace whitespace with hyphens
        .replace(/[^\w-]+/g, "") // Remove non-word chars (except hyphens)
        .replace(/--+/g, "-"); // Replace multiple hyphens with single hyphen
}
// Create a function that generates sponsors with defaults
function createSponsor(sponsor: SponsorInput): Sponsor {
    const name = sponsor.name || "Default Sponsor";
    const key = slugify(name);

    // Base helmet widths for ratio calculations
    const DESKTOP_BASE_WIDTH = 578;
    const TABLET_BASE_WIDTH = 250;
    const MOBILE_BASE_WIDTH = 200;

    // Calculate ratios for automatic scaling
    const tabletRatio = TABLET_BASE_WIDTH / DESKTOP_BASE_WIDTH; // ~0.433
    const mobileRatio = MOBILE_BASE_WIDTH / DESKTOP_BASE_WIDTH; // ~0.346

    // Default expanded logo max widths (px)
    const DEFAULT_DESKTOP_LOGO_MAX = 288;
    const DEFAULT_TABLET_LOGO_MAX = 144;
    const DEFAULT_MOBILE_LOGO_MAX = 78;

    // Ratios used to scale from desktop when only desktop value is provided
    const TABLET_LOGO_FROM_DESKTOP_RATIO =
        DEFAULT_TABLET_LOGO_MAX / DEFAULT_DESKTOP_LOGO_MAX; // ~0.417
    const MOBILE_LOGO_FROM_DESKTOP_RATIO =
        DEFAULT_MOBILE_LOGO_MAX / DEFAULT_DESKTOP_LOGO_MAX; // ~0.194

    // Desktop defaults
    const desktopX = sponsor.positions?.desktop?.x || 100;
    const desktopY = sponsor.positions?.desktop?.y || 100;
    const desktopSize = sponsor.positions?.desktop?.size || 75;

    const primaryLogoPath = sponsor.logoPath || "/sponsors/default_sponsor.svg";

    // Determine expanded logo widths per viewport, scaling if needed
    const desktopLogoMax =
        sponsor.expandedSponsorLogoWidth?.desktop ?? DEFAULT_DESKTOP_LOGO_MAX;
    const tabletLogoMax =
        sponsor.expandedSponsorLogoWidth?.tablet ??
        (sponsor.expandedSponsorLogoWidth?.desktop != null
            ? Math.round(desktopLogoMax * TABLET_LOGO_FROM_DESKTOP_RATIO)
            : DEFAULT_TABLET_LOGO_MAX);
    const mobileLogoMax =
        sponsor.expandedSponsorLogoWidth?.mobile ??
        (sponsor.expandedSponsorLogoWidth?.desktop != null
            ? Math.round(desktopLogoMax * MOBILE_LOGO_FROM_DESKTOP_RATIO)
            : DEFAULT_MOBILE_LOGO_MAX);

    return {
        key: sponsor.key || key,
        name: name,
        logoPath: primaryLogoPath,
        secondaryLogoPath: sponsor.secondaryLogoPath || primaryLogoPath,
        website: sponsor.website || "https://example.com",
        description: sponsor.description || "Default sponsor description",
        expandedSponsorLogoWidth: {
            desktop: desktopLogoMax,
            tablet: tabletLogoMax,
            mobile: mobileLogoMax,
        },
        expandedDescriptionFontSize: sponsor.expandedDescriptionFontSize,
        positions: {
            desktop: {
                x: desktopX,
                y: desktopY,
                size: desktopSize,
            },
            tablet: {
                x:
                    sponsor.positions?.tablet?.x ||
                    Math.round(desktopX * tabletRatio),
                y:
                    sponsor.positions?.tablet?.y ||
                    Math.round(desktopY * tabletRatio),
                size:
                    sponsor.positions?.tablet?.size ||
                    Math.round(desktopSize * tabletRatio * 100) / 100,
            },
            mobile: {
                x:
                    sponsor.positions?.mobile?.x ||
                    Math.round(desktopX * mobileRatio),
                y:
                    sponsor.positions?.mobile?.y ||
                    Math.round(desktopY * mobileRatio),
                size:
                    sponsor.positions?.mobile?.size ||
                    Math.round(desktopSize * mobileRatio * 100) / 100,
            },
        },
    };
}

// ADD AND EDIT SPONSORS HERE
const sponsors: Sponsor[] = [
    createSponsor({
        name: "SLEF",
        logoPath: "/sponsors/slef/SLEF_Logo_Color_Lightbulb.png",
        secondaryLogoPath: "/sponsors/slef/SLEF_Logo_Color_Logo_Name.png",
        website: "https://wusa.ca/about/your-money/funding/",
        description:
            "The Student Life Endowment Fund (SLEF) is an income-generating fund that supports student-led projects and initiatives aimed at enhancing campus life and fostering a vibrant, inclusive community for undergraduate students at the University of Waterloo.",
        positions: {
            desktop: {
                x: 190,
                y: 83,
            },
        },
        expandedSponsorLogoWidth: {
            desktop: 288,
        },
        expandedDescriptionFontSize: {
            // desktop: "text-md",
            mobile: "text-[11px]",
        },
    }),
    createSponsor({
        name: "MEF",
        logoPath: "/sponsors/mef/MEF_Logo.png",
        website: "https://uwaterloo.ca/math-endowment-fund/",
        description:
            "The Mathematics Endowment Fund (MEF) is an income-generating fund that exists to finance projects that are in the best interests of undergraduate math students at the University of Waterloo.",
        positions: {
            desktop: {
                x: 320,
                y: 150,
                size: 150,
            },
        },
        expandedSponsorLogoWidth: {
            desktop: 144,
        },
        expandedDescriptionFontSize: {
            mobile: "text-[11px]",
        },
    }),
    // createSponsor({
    // 	name: "Sponsor 3",
    // 	logoPath: "/sponsors/sponsor_sticker.svg",
    // 	website: "https://www.sponsor3.com",
    // 	description:
    // 		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    // 	positions: {
    // 		desktop: {
    // 			x: 397,
    // 			y: 212,
    // 		},
    // 	},
    // }),
    // createSponsor({
    // 	name: "Sponsor 4",
    // 	logoPath: "/sponsors/sponsor_sticker.svg",
    // 	website: "https://www.sponsor4.com",
    // 	description:
    // 		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    // 	positions: {
    // 		desktop: {
    // 			x: 284,
    // 			y: 313,
    // 		},
    // 	},
    // }),
];

const sponsor_package_dir = "/sponsors/FTH%20Sponsorship%20Package.pdf";

// Define the props for the expanded content (the area that expands when a sponsor is selected)
interface ExpandedContentProps {
    marginTop: number;
    ref: React.Ref<HTMLDivElement>;
    roadImgPath: string;
    roadMinHeight: string;
    roadMaxWidth: string;
    roadOffsetMargin: string;
    helmetWidthState: number;
    sponsorNameTextSize: string;
    className?: string;
    isDesktop: boolean;
    viewport: "mobile" | "tablet" | "desktop";
}

// This function is used to render and animate the expanded content
// This function must be outside of the component to avoid re-creating it on every render (breaks animation)
function ExpandedContent(
    props: ExpandedContentProps & {
        selectedSponsor: Sponsor | null;
        onClose: () => void;
    },
) {
    const { selectedSponsor, onClose } = props;
    const [containerWidth, setContainerWidth] = useState(0);

    const WIDTH_SCALE: Record<"mobile" | "tablet" | "desktop", number> = {
        mobile: 0.6,
        tablet: 0.75,
        desktop: 0.75,
    };

    // Separate ref for ResizeObserver - doesn't interfere with click-outside functionality
    const resizeObserverRef = useCallback((node: HTMLDivElement | null) => {
        if (node) {
            // Set initial width
            setContainerWidth(node.offsetWidth);

            // Set up ResizeObserver for real-time updates
            const observer = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    setContainerWidth(entry.contentRect.width);
                }
            });

            observer.observe(node);

            // Cleanup function
            return () => observer.disconnect();
        }
    }, []);

    return (
        <motion.div
            initial={false} // Prevents animation on first render
            animate={{
                height: selectedSponsor ? "auto" : 0,
                opacity: selectedSponsor ? 1 : 0,
                marginTop: selectedSponsor ? props.marginTop : 0,
            }}
            transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: selectedSponsor ? 0.1 : 0, // Slight delay to start after helmet begins animating
            }}
            className={`w-screen flex justify-center ${props.className}`}
            style={{
                maxWidth: props.isDesktop ? props.roadMaxWidth : "100%",
                margin: "0 auto", // Center the container itself
            }}
            ref={props.ref} // Keep original ref for click-outside functionality
        >
            {/* Content to reveal */}
            <div
                className="p-4 text-white w-full flex items-center justify-center relative"
                style={{
                    background: `url('${props.roadImgPath}') no-repeat center center / cover`,
                    minHeight: props.roadMinHeight,
                    minWidth: props.isDesktop ? "100%" : "400px", // Add minimum width
                    aspectRatio: props.isDesktop ? "auto" : "400 / 251",
                    width: "100%",
                    marginTop: props.roadOffsetMargin,
                }}
                ref={resizeObserverRef} // Separate ref for ResizeObserver
            >
                <AnimatePresence mode="wait">
                    {selectedSponsor && (
                        <motion.div
                            key={selectedSponsor.key} // Important: unique key for each sponsor
                            className={"flex flex-col items-center justify-end"}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                        >
                            <div
                                style={{
                                    width: `${containerWidth * WIDTH_SCALE[props.viewport]}px`, // Use the state value
                                }}
                            >
                                <div className="flex flex-col lg:flex-row items-center justify-around">
                                    <img
                                        src={selectedSponsor.secondaryLogoPath}
                                        alt={selectedSponsor.name}
                                        className={"object-contain w-full"}
                                        style={{
                                            maxWidth: `${selectedSponsor.expandedSponsorLogoWidth[props.viewport]}px`,
                                        }}
                                    />
                                    <h3
                                        className={`font-body ${props.sponsorNameTextSize}`}
                                    >
                                        <a
                                            href={selectedSponsor.website}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-400 underline underline-offset-2 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-sm"
                                        >
                                            {selectedSponsor.name}
                                        </a>
                                    </h3>
                                </div>
                                <p
                                    className={`mt-2 text-center font-body ${
                                        selectedSponsor
                                            .expandedDescriptionFontSize
                                            ?.mobile ?? "text-base"
                                    } ${
                                        selectedSponsor
                                            .expandedDescriptionFontSize?.tablet
                                            ? `sm:${selectedSponsor.expandedDescriptionFontSize.tablet}`
                                            : "sm:text-xl"
                                    } ${
                                        selectedSponsor
                                            .expandedDescriptionFontSize
                                            ?.desktop
                                            ? `lg:${selectedSponsor.expandedDescriptionFontSize.desktop}`
                                            : "lg:text-3xl"
                                    }`}
                                >
                                    {selectedSponsor.description}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Close button absolutely positioned at top center */}
                {selectedSponsor && (
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute top-[10%] left-[30%] min-[500px]:left-1/2 transform -translate-x-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110"
                        aria-label="Close sponsor details"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-3 h-3 md:w-6 md:h-6 text-white"
                        >
                            <title>Close</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                )}
            </div>
        </motion.div>
    );
}

interface HelmetProps {
    selectedSponsor: Sponsor | null;
    viewport: "mobile" | "tablet" | "desktop";
    baseHelmetWidth: number;
    expandedHelmetWidthFactor: number;
    helmetRef: React.RefObject<HTMLImageElement | null>;
    HelmetStickers: (
        viewport: "mobile" | "tablet" | "desktop",
    ) => React.JSX.Element[];
}
function Helmet(props: HelmetProps & { className?: string }) {
    const {
        selectedSponsor,
        viewport,
        baseHelmetWidth,
        expandedHelmetWidthFactor,
        helmetRef,
        HelmetStickers,
    } = props;
    return (
        <motion.div
            animate={{
                width: selectedSponsor
                    ? `${baseHelmetWidth * expandedHelmetWidthFactor}px`
                    : `${baseHelmetWidth}px`,
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
            className={`${props.className}`}
            style={{
                zIndex: 1,
            }}
        >
            <img
                ref={helmetRef}
                src="/helmet.svg"
                alt="Sponsors section decoration"
                className="block w-full object-contain pointer-events-none"
            />
            {HelmetStickers(viewport)}
        </motion.div>
    );
}

// Exported component
export default function Sponsors() {
    // State to keep track of the selected sponsor
    const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(
        null,
    );
    const { meetsMinWidth: isDesktop } = useViewport(768); // Check if the viewport is desktop
    const [desktopGap, setDesktopGap] = useState<number>(160);

    // Refs to the helmet images to get their widths
    // Used to ensure that the positions of the stickers relative to the helmet stay the same
    // when the helmet shrinks after a user clicks on a sponsor sticker
    const mobileHelmet = useRef<HTMLImageElement>(null);
    const [mobileHelmetWidth, setMobileHelmetWidth] = useState<number>(200);
    const tabletHelmet = useRef<HTMLImageElement>(null);
    const [tabletHelmetWidth, setTabletHelmetWidth] = useState<number>(250);
    const desktopHelmet = useRef<HTMLImageElement>(null);
    const [desktopHelmetWidth, setDesktopHelmetWidth] = useState<number>(578);

    // Run once when element mounts to get initial width
    useEffect(() => {
        if (mobileHelmet.current) {
            setMobileHelmetWidth(mobileHelmet.current.width);
        }
        if (tabletHelmet.current) {
            setTabletHelmetWidth(tabletHelmet.current.width);
        }
        if (desktopHelmet.current) {
            setDesktopHelmetWidth(desktopHelmet.current.width);
        }

        // Use ResizeObserver to detect actual size changes
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.target === mobileHelmet.current) {
                    setMobileHelmetWidth(entry.contentRect.width);
                } else if (entry.target === tabletHelmet.current) {
                    setTabletHelmetWidth(entry.contentRect.width);
                } else if (entry.target === desktopHelmet.current) {
                    setDesktopHelmetWidth(entry.contentRect.width);
                }
            }
        });

        if (mobileHelmet.current) {
            observer.observe(mobileHelmet.current);
        }
        if (tabletHelmet.current) {
            observer.observe(tabletHelmet.current);
        }
        if (desktopHelmet.current) {
            observer.observe(desktopHelmet.current);
        }

        return () => {
            if (mobileHelmet.current) observer.unobserve(mobileHelmet.current);
            if (tabletHelmet.current) observer.unobserve(tabletHelmet.current);
            if (desktopHelmet.current)
                observer.unobserve(desktopHelmet.current);
        };
    }, []);

    const headingRef = useRef<HTMLHeadingElement>(null);
    const [headingWidth, setHeadingWidth] = useState(0);

    useEffect(() => {
        const updateHeadingWidth = () => {
            if (headingRef.current) {
                const width = headingRef.current.offsetWidth;
                if (width > 0) {
                    // Defensive check
                    setHeadingWidth(width);
                }
            }
        };

        // Initial measurement
        updateHeadingWidth();

        // Set up ResizeObserver for real-time updates
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.target === headingRef.current) {
                    const width = entry.contentRect.width;
                    if (width > 0) {
                        // Defensive check
                        setHeadingWidth(width);
                    }
                }
            }
        });

        if (headingRef.current) {
            observer.observe(headingRef.current);
        }

        // Also listen for viewport changes
        const handleResize = () => {
            updateHeadingWidth();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Remove selectedSponsor dependency as it's not necessary for heading width measurement

    // Refs to the expanded content divs
    // Used to close the expanded content when clicking outside of it
    const expandedSponsorRefMobile = useRef<HTMLDivElement>(null);
    const expandedSponsorRefTablet = useRef<HTMLDivElement>(null);
    const expandedSponsorRefDesktop = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Add click listener to close sponsor details when clicking outside
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as HTMLElement;

            // Check if click is on a sponsor sticker (ignore these clicks)
            const isClickOnSponsorSticker = target.closest(
                "[data-sponsor-sticker]",
            );

            // If we have a selected sponsor and clicked outside the expanded element (but not on a sticker)
            if (
                selectedSponsor &&
                !isClickOnSponsorSticker &&
                expandedSponsorRefMobile.current &&
                !expandedSponsorRefMobile.current.contains(
                    event.target as Node,
                ) &&
                expandedSponsorRefTablet.current &&
                !expandedSponsorRefTablet.current.contains(
                    event.target as Node,
                ) &&
                expandedSponsorRefDesktop.current &&
                !expandedSponsorRefDesktop.current.contains(
                    event.target as Node,
                )
            ) {
                // Close the expanded sponsor
                setSelectedSponsor(null);
            }
        }
        // Add event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Resize the desktop vertical gap between the helmet and the cta/header based on if a sponsor is selected
        if (selectedSponsor) {
            setDesktopGap(45);
        } else {
            setDesktopGap(160);
        }

        // Cleanup
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedSponsor]); // Re-run effect when selectedSponsor changes

    // Function to toggle the selected sponsor
    // If the same sponsor is clicked again, it will close the expanded content
    function toggleSponsor(sponsor: Sponsor) {
        setSelectedSponsor((prev) =>
            prev?.key === sponsor.key ? null : sponsor,
        );
    }

    // Function to close the expanded content
    function closeSponsor() {
        setSelectedSponsor(null);
    }

    // Props for the expanded content for mobile, tablet, and desktop
    const expandedContentMobileProps: ExpandedContentProps = {
        marginTop: 16,
        ref: expandedSponsorRefMobile,
        roadImgPath: "/sponsor_info_frame_mobile.svg",
        roadMinHeight: "251px",
        roadMaxWidth: "400px",
        roadOffsetMargin: "-36px",
        helmetWidthState: mobileHelmetWidth,
        sponsorNameTextSize: "text-[17px]",
        isDesktop: false,
        viewport: "mobile",
    };
    const expandedContentTabletProps: ExpandedContentProps = {
        marginTop: 16,
        ref: expandedSponsorRefTablet,
        roadImgPath: "/sponsor_info_frame_mobile.svg",
        roadMinHeight: "350px",
        roadMaxWidth: "500px",
        roadOffsetMargin: "-45px",
        helmetWidthState: tabletHelmetWidth,
        sponsorNameTextSize: "text-[24px]",
        isDesktop: false,
        viewport: "tablet",
    };
    const expandedContentDesktopProps: ExpandedContentProps = {
        marginTop: 16,
        ref: expandedSponsorRefDesktop,
        roadImgPath: "/sponsor_info_frame.svg",
        roadMinHeight: "672px",
        roadMaxWidth: "1200px",
        roadOffsetMargin: "-72px",
        helmetWidthState: desktopHelmetWidth,
        sponsorNameTextSize: "text-[48px]",
        isDesktop: true,
        viewport: "desktop",
    };

    // Use helmet width for scaling to help with the positioning of the stickers when the helmet shrinks
    function getScaleFactor(viewport: "mobile" | "tablet" | "desktop") {
        if (viewport === "mobile") {
            const baseWidth = 200;
            return {
                mobile:
                    (mobileHelmetWidth !== 0 ? mobileHelmetWidth : 200) /
                    baseWidth,
                tablet: 1,
                desktop: 1,
            };
        }
        if (viewport === "tablet") {
            const baseWidth = 250;
            return {
                mobile: 1,
                tablet:
                    (tabletHelmetWidth !== 0 ? tabletHelmetWidth : 250) /
                    baseWidth,
                desktop: 1,
            };
        }
        // desktop case
        const baseWidth = 578;
        return {
            mobile: 1,
            tablet: 1,
            desktop:
                (desktopHelmetWidth !== 0 ? desktopHelmetWidth : 578) /
                baseWidth,
        };
    }

    // Function to render helmet stickers
    function HelmetStickers(viewport: "mobile" | "tablet" | "desktop") {
        return sponsors.map((sponsor) => (
            <button
                type="button"
                key={sponsor.key}
                data-sponsor-sticker="true"
                className={`absolute z-1 cursor-pointer transition-transform drop-shadow-lg ${selectedSponsor ? "" : "hover:scale-110"}`}
                style={{
                    left: `${sponsor.positions[viewport].x * getScaleFactor(viewport)[viewport]}px`, // Apply scaling factor to maintain position relative to helmet
                    top: `${sponsor.positions[viewport].y * getScaleFactor(viewport)[viewport]}px`,
                    width: `${sponsor.positions[viewport].size}px`,
                    height: `${sponsor.positions[viewport].size}px`,
                }}
                onClick={(e) => {
                    e.stopPropagation(); // Prevent click from bubbling to document
                    toggleSponsor(sponsor);
                }}
                onKeyDown={(e) => {
                    if ((e.key === "Enter" || e.key === " ") && !e.repeat) {
                        toggleSponsor(sponsor);
                    }
                }}
                tabIndex={0} // Make it focusableenergizing space where motorsport enthusiasts can thrive, fostering an environment that accelerates learning and ignites passion for the sport. Our hackathon runs on Waterloo University’s campus and is organized by a student-led team with you in mind. We aim to be the catalyst that transforms curious fans into experts. This year, students can compete in one of our three tracks: Software, Hardware, or CAD to gain technical experience and drive innovation forwar
                aria-expanded={selectedSponsor?.key === sponsor.key}
                aria-controls={`sponsor-details-${sponsor.key}`}
                aria-label={`Checkout ${sponsor.name}`}
            >
                <img
                    src={sponsor.logoPath}
                    alt={sponsor.name}
                    className="w-full h-full"
                />
            </button>
        ));
    }

    return (
        <div
            id="sponsors"
            className="overflow-x-clip mt-36 w-[80%] mx-auto py-6 md:py-[77px]"
        >
            {/* MOBILE VIEW */}
            <div className="lg:hidden">
                <div className="flex flex-col items-center justify-center gap-[40px]">
                    {/* Mobile Header Section */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="font-black p-5 -ml-2.5 text-xl sm:text-3xl capitalize text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-xl font-title">
                            OUR SPONSORS
                        </h1>
                    </div>

                    {/* Mobile Helmet and Expanded Content */}
                    <div className="sm:hidden relative flex flex-col items-center justify-center">
                        <Helmet
                            selectedSponsor={selectedSponsor}
                            viewport="mobile"
                            baseHelmetWidth={200}
                            expandedHelmetWidthFactor={0.75}
                            helmetRef={mobileHelmet}
                            HelmetStickers={HelmetStickers}
                            className="relative"
                        />
                        <ExpandedContent
                            selectedSponsor={selectedSponsor}
                            onClose={closeSponsor}
                            {...expandedContentMobileProps}
                        />
                    </div>

                    <div className="hidden relative sm:flex lg:hidden flex-col items-center justify-center">
                        <Helmet
                            selectedSponsor={selectedSponsor}
                            viewport="tablet"
                            baseHelmetWidth={250}
                            expandedHelmetWidthFactor={0.75}
                            helmetRef={tabletHelmet}
                            HelmetStickers={HelmetStickers}
                            className="relative"
                        />
                        <ExpandedContent
                            selectedSponsor={selectedSponsor}
                            onClose={closeSponsor}
                            {...expandedContentTabletProps}
                        />
                    </div>

                    <a
                        href={sponsor_package_dir}
                        rel="noreferrer"
                        target="_blank"
                        className="flex items-center justify-center"
                        style={{ zIndex: 10 }} // Ensure CTA is clickable over "ExpandedContent" component even when invisible
                    >
                        <img
                            src="/become_a_sponsor_CTA.svg"
                            alt="Become a Sponsor"
                            className="w-[120px] sm:w-[140px] object-contain"
                        />
                    </a>
                </div>
            </div>

            {/* DESKTOP VIEW */}
            <div className="hidden lg:block">
                <div
                    className="flex flex-col items-center justify-center min-h-screen"
                    style={{ gap: `${desktopGap}px` }}
                >
                    {/* Desktop Header Section */}
                    <div className="flex flex-row items-start justify-between w-full gap-10">
                        <div className="max-w-[50vw] flex flex-col gap-5 items-start text-left">
                            <h1
                                ref={headingRef}
                                className="font-black p-5 -ml-2.5 text-5xl capitalize text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-xl font-title"
                            >
                                OUR SPONSORS
                            </h1>
                        </div>

                        <a
                            href={sponsor_package_dir}
                            rel="noreferrer"
                            target="_blank"
                            className="flex items-center justify-center"
                        >
                            <img
                                src="/become_a_sponsor_CTA.svg"
                                alt="Become a Sponsor"
                                className="w-[194px] object-contain"
                            />
                        </a>
                    </div>

                    {/* Desktop Helmet and Expanded Content */}
                    <div className="relative flex flex-col items-center justify-center">
                        <Helmet
                            selectedSponsor={selectedSponsor}
                            viewport="desktop"
                            baseHelmetWidth={578}
                            expandedHelmetWidthFactor={0.7}
                            helmetRef={desktopHelmet}
                            HelmetStickers={HelmetStickers}
                            className="relative"
                        />
                        <ExpandedContent
                            selectedSponsor={selectedSponsor}
                            onClose={closeSponsor}
                            {...expandedContentDesktopProps}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
