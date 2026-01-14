import { useState } from "react";

import email from "../assets/email.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import logo from "../assets/logo.svg";

export default function Navigate() {
	const [menuOpen, setMenuOpen] = useState(false);

	const scrollToWithOffset = (id: string) => {
		const headerHeight = document.querySelector("nav")?.getBoundingClientRect().height || 0;
		const el = document.getElementById(id);
		if (!el) return;
		const extra = 50;
		const y = el.getBoundingClientRect().top + window.scrollY - headerHeight - extra;
		history.pushState(null, "", `#${id}`);
		window.scrollTo({ top: y, behavior: "smooth" });
	};

return (
		<>
			<nav className="bg-background text-black w-[80%] mx-auto py-1 px-8 mt-10 rounded-full flex items-center justify-between fixed top-0 left-1/2 -translate-x-1/2 z-[100] backdrop-blur shadow-md">
				{/* Left: Logo */}
				<div className="flex items-center gap-8 min-w-0 flex-nowrap overflow-hidden">
				<button
					type="button"
  					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  					className="focus:outline-none"
				>
  				<img src={logo.src} alt="Logo" className="h-8 w-auto cursor-pointer" />
				</button>

					{/* Center: Desktop Nav Links */}
					<ul className="hidden md:flex gap-[clamp(1rem,3vw,4rem)] items-center flex-nowrap min-w-0 overflow-hidden text-nowrap font-title font-bold">
						<li>
							<button
								type="button"
								onClick={() => scrollToWithOffset("about")}
								className="hover:text-primary transition cursor-pointer"
							>
								ABOUT
							</button>
						</li>
						<li>
							<button
								type="button"
								onClick={() => scrollToWithOffset("sponsors")}
								className="hover:text-primary transition cursor-pointer"
							>
								SPONSORS
							</button>
						</li>
						<li>
							<button
								type="button"
								onClick={() => scrollToWithOffset("faqs")}
								className="hover:text-primary transition cursor-pointer"
							>
								FAQs
							</button>
						</li>
						<li>
							<button
								type="button"
								onClick={() => scrollToWithOffset("teams")}
								className="hover:text-primary transition cursor-pointer"
							>
								TEAM
							</button>
						</li>
					</ul>
				</div>

				{/* Right: Socials / Auth / Hamburger */}
				<div className="flex items-center gap-[clamp(0.5rem,1vw,1.5rem)] flex-nowrap min-w-0 overflow-hidden">
					{/* Desktop Only */}
					<div className="hidden md:flex items-center gap-[clamp(1rem,1.5vw,2rem)] min-w-0">
						<a href="https://www.instagram.com/formulatech.hacks/" target="_blank" rel="noopener noreferrer">
							<img src={instagram.src} alt="Instagram" className="h-7 w-7 object-cover" />
						</a>
						<a href="https://www.linkedin.com/company/formulatech-hacks" target="_blank" rel="noopener noreferrer">
							<img src={linkedin.src} alt="LinkedIn" className="h-7 w-7 object-cover" />
						</a>
						<button
							type="button"
							onClick={() =>
								window.open(
									"https://mail.google.com/mail/?view=cm&fs=1&to=formulatech.hacks@gmail.com",
									"_blank",
									"noopener,noreferrer"
								)
							}
							className="hover:text-primary cursor-pointer"
							aria-label="Email us"
						>
							<img
								src={email.src}
								alt="Email"
								className="h-6 w-auto object-cover"
							/>
						</button>
						<a href="https://forms.gle/oLzGwE5MKuPRKab89" className="flex items-center bg-primary text-white font-bold px-3 py-2 rounded-4xl hover:opacity-90 transition text-center font-title">
							APPLY NOW
						</a>
					</div>

					{/* Mobile Toggle Button */}
					<div className="flex items-center space-x-4">
						<button
							type="button"
							onClick={() => {
								setMenuOpen(!menuOpen);
							}}
							className="md:hidden text-2xl z-[1000] relative pointer-events-auto"
						>
							{menuOpen ? "×" : "☰"}
						</button>
					</div>
				</div>
			</nav>
			{menuOpen && (
				<div className="fixed inset-0 z-40 bg-foreground text-white md:hidden flex flex-col items-center justify-center space-y-6 pt-30 gap-10">
					<button 
						type = "button"
						onClick={() => {
							setMenuOpen(false);
							setTimeout(() => scrollToWithOffset("about"), 250);
							//window.location.hash = "#about";
						}}
						className="hover:text-red-500 text-xl"
					>
						About
					</button>
					<button 
						type = "button"
						onClick={() => {
							setMenuOpen(false);
							setTimeout(() => scrollToWithOffset("sponsors"), 250);
							//window.location.hash = "#sponsors";
						}}
						className="hover:text-red-500 text-xl"
					>
						Sponsors
					</button>
					<button 
						type = "button"
						onClick={() => {
							setMenuOpen(false);
							setTimeout(() => scrollToWithOffset("faqs"), 250);
							//window.location.hash = "#faqs";
						}}
						className="hover:text-red-500 text-xl"
					>
						FAQs
					</button>
					<button 
						type = "button"
						onClick={() => {
							setMenuOpen(false);
							setTimeout(() => scrollToWithOffset("team"), 250);
							//window.location.hash = "#team";
						}}
						className="hover:text-red-500 text-xl"
					>
						Team
					</button>
					<a href="https://forms.gle/oLzGwE5MKuPRKab89" className="flex flex-col items-center space-y-4 bg-primary text-white font-bold px-6 py-3 w-40 rounded-2xl hover:opacity-90 transition text-center">
						APPLY NOW
					</a>
					<div className="flex space-x-6 items-center">
						<a href="https://www.instagram.com/formulatech.hacks/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
							<img src={instagram.src} alt="Instagram" className="h-12 w-12 object-contain filter brightness-0 invert" />
						</a>
						<a href="https://www.linkedin.com/company/formulatech-hacks" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
							<img src={linkedin.src} alt="LinkedIn" className="h-12 w-12 object-contain filter brightness-0 invert" />
						</a>
						<button
							type="button"
							onClick={() =>
								window.open(
									"https://mail.google.com/mail/?view=cm&fs=1&to=formulatech.hacks@gmail.com",
									"_blank",
									"noopener,noreferrer"
								)
							}
							className="hover:text-primary cursor-pointer"
							aria-label="Email us"
						>
							<img
								src={email.src}
								alt="Email"
								className="h-10 w-auto object-contain filter brightness-0 invert"
							/>
						</button>
					</div>
				</div>
			)}
		</>
	);
}