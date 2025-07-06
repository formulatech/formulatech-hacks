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
	website: string;
	description: string;
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
	website?: string;
	description?: string;
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

	// Desktop defaults
	const desktopX = sponsor.positions?.desktop?.x || 100;
	const desktopY = sponsor.positions?.desktop?.y || 100;
	const desktopSize = sponsor.positions?.desktop?.size || 47;

	return {
		key: sponsor.key || key,
		name: name,
		logoPath: sponsor.logoPath || "/sponsors/default_sponsor.svg",
		website: sponsor.website || "https://example.com",
		description: sponsor.description || "Default sponsor description",
		positions: {
			desktop: {
				x: desktopX,
				y: desktopY,
				size: desktopSize,
			},
			tablet: {
				x: sponsor.positions?.tablet?.x || Math.round(desktopX * tabletRatio),
				y: sponsor.positions?.tablet?.y || Math.round(desktopY * tabletRatio),
				size: sponsor.positions?.tablet?.size || Math.round(desktopSize * tabletRatio * 100) / 100,
			},
			mobile: {
				x: sponsor.positions?.mobile?.x || Math.round(desktopX * mobileRatio),
				y: sponsor.positions?.mobile?.y || Math.round(desktopY * mobileRatio),
				size: sponsor.positions?.mobile?.size || Math.round(desktopSize * mobileRatio * 100) / 100,
			},
		},
	};
}

// ADD AND EDIT SPONSORS HERE
const sponsors: Sponsor[] = [
	createSponsor({
		name: "Sponsor 1",
		logoPath: "/sponsors/sponsor_sticker.svg",
		website: "https://www.sponsor1.com",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
		positions: {
			desktop: {
				x: 190,
				y: 83,
			},
		},
	}),
	createSponsor({
		name: "Sponsor 2",
		logoPath: "/sponsors/sponsor_sticker.svg",
		website: "https://www.sponsor2.com",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
		positions: {
			desktop: {
				x: 331,
				y: 109,
			},
		},
	}),
	createSponsor({
		name: "Sponsor 3",
		logoPath: "/sponsors/sponsor_sticker.svg",
		website: "https://www.sponsor3.com",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
		positions: {
			desktop: {
				x: 397,
				y: 212,
			},
		},
	}),
	createSponsor({
		name: "Sponsor 4",
		logoPath: "/sponsors/sponsor_sticker.svg",
		website: "https://www.sponsor4.com",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
		positions: {
			desktop: {
				x: 284,
				y: 313,
			},
		},
	}),
];

// Define the props for the expanded content (the area that expands when a sponsor is selected)
interface ExpandedContentProps {
	marginTop: number;
	ref: React.Ref<HTMLDivElement>;
	roadImgPath: string;
	roadMinHeight: string;
	roadMaxWidth: string;
	roadOffsetMargin: string;
	helmetWidthState: number;
	expandedSponsorLogoWidth: string;
	sponsorNameTextSize: string;
	className?: string;
    isDesktop: boolean;
}

// This function is used to render and animate the expanded content
// This function must be outside of the component to avoid re-creating it on every render (breaks animation)
function ExpandedContent(
	props: ExpandedContentProps & { selectedSponsor: Sponsor | null; onClose: () => void },
) {
	const { selectedSponsor, onClose } = props;
	const [containerWidth, setContainerWidth] = useState(0);
	
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
							className={'flex flex-col items-center justify-end'}
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
									width: `${containerWidth * 0.75}px`, // Use the state value
								}}
							>
								<div className="flex flex-col md:flex-row items-center justify-around">
									<img
										src={selectedSponsor.logoPath}
										alt={selectedSponsor.name}
										className={`object-contain w-full ${props.expandedSponsorLogoWidth}`}
									/>
									<h3
										className={`font-body ${props.sponsorNameTextSize}`}
									>
										{selectedSponsor.name}
									</h3>
								</div>
								<p className="mt-2 text-center font-body sm:text-xl md:text-3xl">
									{selectedSponsor.description}
								</p>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
				
				{/* Close button absolutely positioned at bottom */}
				{selectedSponsor && (
					<button
						type="button"
						onClick={onClose}
						className="absolute bottom-4 right-[10%] transform -translate-x-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110"
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
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
	HelmetStickers: (viewport: "mobile" | "tablet" | "desktop") => React.JSX.Element[];
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
	const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);
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
			if (desktopHelmet.current) observer.unobserve(desktopHelmet.current);
		};
	}, []);

	const headingRef = useRef<HTMLHeadingElement>(null);
	const [headingWidth, setHeadingWidth] = useState(0);

	useEffect(() => {
		const updateHeadingWidth = () => {
			if (headingRef.current) {
				const width = headingRef.current.offsetWidth;
				if (width > 0) { // Defensive check
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
					if (width > 0) { // Defensive check
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
		
		window.addEventListener('resize', handleResize);

		return () => {
			observer.disconnect();
			window.removeEventListener('resize', handleResize);
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
			const isClickOnSponsorSticker = target.closest('[data-sponsor-sticker]');
			
			// If we have a selected sponsor and clicked outside the expanded element (but not on a sticker)
			if (
				selectedSponsor &&
				!isClickOnSponsorSticker &&
				expandedSponsorRefMobile.current &&
				!expandedSponsorRefMobile.current.contains(event.target as Node) &&
				expandedSponsorRefTablet.current &&
				!expandedSponsorRefTablet.current.contains(event.target as Node) &&
				expandedSponsorRefDesktop.current &&
				!expandedSponsorRefDesktop.current.contains(event.target as Node)
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
		setSelectedSponsor((prev) => (prev?.key === sponsor.key ? null : sponsor));
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
		expandedSponsorLogoWidth: "max-w-[56px]",
		sponsorNameTextSize: "text-[17px]",
        isDesktop: false,
	};
	const expandedContentTabletProps: ExpandedContentProps = {
		marginTop: 16,
		ref: expandedSponsorRefTablet,
		roadImgPath: "/sponsor_info_frame_mobile.svg",
		roadMinHeight: "350px",
		roadMaxWidth: "500px",
		roadOffsetMargin: "-45px",
		helmetWidthState: tabletHelmetWidth,
		expandedSponsorLogoWidth: "max-w-[120px]",
		sponsorNameTextSize: "text-[24px]",
        isDesktop: false,
	};
	const expandedContentDesktopProps: ExpandedContentProps = {
		marginTop: 16,
		ref: expandedSponsorRefDesktop,
		roadImgPath: "/sponsor_info_frame.svg",
		roadMinHeight: "672px",
		roadMaxWidth: "1200px",
		roadOffsetMargin: "-72px",
		helmetWidthState: desktopHelmetWidth,
		expandedSponsorLogoWidth: "max-w-[144px]",
		sponsorNameTextSize: "text-[48px]",
        isDesktop: true,
	};

	// Use helmet width for scaling to help with the positioning of the stickers when the helmet shrinks
	function getScaleFactor(viewport: "mobile" | "tablet" | "desktop") {
		if (viewport === "mobile") {
			const baseWidth = 200;
			return {
				mobile: (mobileHelmetWidth !== 0 ? mobileHelmetWidth : 200) / baseWidth,
				tablet: 1,
				desktop: 1,
			};
		}
		if (viewport === "tablet") {
			const baseWidth = 250;
			return {
				mobile: 1,
				tablet: (tabletHelmetWidth !== 0 ? tabletHelmetWidth : 250) / baseWidth,
				desktop: 1,
			};
		}
		// desktop case
		const baseWidth = 578;
		return {
			mobile: 1,
			tablet: 1,
			desktop: (desktopHelmetWidth !== 0 ? desktopHelmetWidth : 578) / baseWidth,
		};
	}

	// Function to render helmet stickers
	function HelmetStickers(viewport: "mobile" | "tablet" | "desktop") {
		return sponsors.map((sponsor) => (
			<button
				type="button"
				key={sponsor.key}
				data-sponsor-sticker="true"
				className={`absolute z-1 cursor-pointer transition-transform ${selectedSponsor?.key === sponsor.key ? "scale-125" : "hover:scale-110"}`}
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
					src="/sponsors/sponsor_sticker.svg"
					alt={sponsor.name}
					className="w-full h-full"
				/>
			</button>
		));
	}

	return (
		<div className="overflow-x-clip mt-156 px-8 md:px-[92px] py-6 md:py-[77px] w-full">
			{/* MOBILE VIEW */}
			<div className="md:hidden">
				<div className="flex flex-col items-center justify-center gap-[40px] min-h-screen">
					{/* Mobile Header Section */}
					<div className="flex flex-col items-center justify-center text-center">
						<h1
							className="font-black p-5 -ml-2.5 text-xl sm:text-3xl capitalize text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-xl font-title"
						>
							OUR SPONSORS
						</h1>
						<p className="font-body font-regular text-base sm:text-xl">
							Support the next <br />
							Generation of hackathons
						</p>
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
						<ExpandedContent selectedSponsor={selectedSponsor} onClose={closeSponsor} {...expandedContentMobileProps} />
					</div>

					<div className="hidden relative sm:flex md:hidden flex-col items-center justify-center">
						<Helmet 
							selectedSponsor={selectedSponsor} 
							viewport="tablet" 
							baseHelmetWidth={250} 
							expandedHelmetWidthFactor={0.75}
							helmetRef={tabletHelmet} 
							HelmetStickers={HelmetStickers}
							className="relative"
						/>
						<ExpandedContent selectedSponsor={selectedSponsor} onClose={closeSponsor} {...expandedContentTabletProps} />
					</div>

					<a
						href="/become-a-sponsor"
						className="flex items-center justify-center"
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
			<div className="hidden md:block">
				<div 
					className="flex flex-col items-center justify-center min-h-screen"
					style={{ gap: `${desktopGap}px` }}
				>
					{/* Desktop Header Section */}
					<div className="flex flex-row items-center justify-between w-full gap-10">
						<div className="max-w-[50vw] flex flex-col gap-5 items-start text-left">
							<h1
								ref={headingRef}
								className="font-black p-5 -ml-2.5 text-5xl capitalize text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-xl font-title"
							>
								OUR SPONSORS
							</h1>
							<p
								style={{ 
									maxWidth: headingWidth > 0 ? `${headingWidth}px` : 'auto' // Fallback when width is 0
								}}
								className="font-body font-regular text-3xl"
							>
								Support the next
								Generation of hackathons
							</p>
						</div>

						<a
							href="/become-a-sponsor"
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
							expandedHelmetWidthFactor={0.5}
							helmetRef={desktopHelmet} 
							HelmetStickers={HelmetStickers}
							className="relative"
						/>
						<ExpandedContent selectedSponsor={selectedSponsor} onClose={closeSponsor} {...expandedContentDesktopProps} />
					</div>
				</div>
			</div>
		</div>
	);
}
