import { useState } from "react";

import email from "../assets/email.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";

import logo from "../assets/logo.png";

export default function Navigate() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<nav className="bg-background text-black w-[80%] mx-auto py-1 px-8 mt-10 rounded-full flex items-center justify-between fixed top-0 left-1/2 -translate-x-1/2 z-[100] backdrop-blur shadow-md">
				{/* Left: Logo */}
				<div className="flex items-center gap-8 min-w-0 flex-nowrap overflow-hidden">
					<a href="/">
						<img src={logo.src} alt="Logo" className="h-14 w-auto" />
					</a>

					{/* Center: Desktop Nav Links */}
					<ul className="hidden md:flex gap-[clamp(1rem,2vw,4rem)] items-center flex-nowrap min-w-0 overflow-hidden text-nowrap">
						<li>
							<a href="#about" className="hover:text-primary transition">
								About
							</a>
						</li>
						<li>
							<a href="#sponsors" className="hover:text-primary transition">
								Sponsors
							</a>
						</li>
						<li>
							<a href="/faqs" className="hover:text-primary transition">
								FAQs
							</a>
						</li>
						<li>
							<a href="/team" className="hover:text-primary transition">
								Team
							</a>
						</li>
					</ul>
				</div>

				{/* Right: Socials / Auth / Hamburger */}
				<div className="flex items-center gap-[clamp(0.5rem,1vw,1.5rem)] flex-nowrap min-w-0 overflow-hidden">
					{/* Desktop Only */}
					<div className="hidden md:flex items-center gap-[clamp(0.5rem,1vw,1.5rem)] min-w-0">
						<a href="https://www.instagram.com/formulatech.hacks/" className="hover:text-primary fill-primary">
							<img src={instagram.src} alt="Instagram" className="h-15 w-15 object-cover fill-current"/>
						</a>
						<a href="https://www.linkedin.com/company/formulatech-hacks" className="hover:text-primary">
							<img src={linkedin.src} alt="LinkedIn" className="h-7 w-7 object-cover fill-current"/>
						</a>
						<a href="mailto:someone@example.com" className="hover:text-primary">
							<img src={email.src} alt="Email" className="h-15 w-15 object-cover fill-current"/>
						</a>

						<div className="ml-4 flex items-center space-x-4">
							<a href="/register" className="bg-primary text-white font-bold px-4 py-2 rounded-2xl hover:opacity-90 transition">
								REGISTER
							</a>
							<a href="/login" className="border-2 border-primary text-primary font-bold px-4 py-2 rounded-2xl hover:bg-white transition">
								LOGIN
							</a>
						</div>
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
							window.location.hash = "#about";
						}}
						className="hover:text-red-500 text-xl"
					>
						About
					</button>
					<button 
						type = "button"
						onClick={() => {
							setMenuOpen(false);
							window.location.hash = "#sponsors";
						}}
						className="hover:text-red-500 text-xl"
					>
						Sponsors
					</button>
					<button 
						type = "button"
						onClick={() => {
							setMenuOpen(false);
							window.location.hash = "#faqs";
						}}
						className="hover:text-red-500 text-xl"
					>
						FAQs
					</button>
					<button 
						type = "button"
						onClick={() => {
							setMenuOpen(false);
							window.location.hash = "#team";
						}}
						className="hover:text-red-500 text-xl"
					>
						Team
					</button>
					<div className="flex flex-col items-center space-y-4">
						<a href="/register" className="bg-primary text-white font-bold px-6 py-3 w-40 rounded-2xl hover:opacity-90 transition text-center">
							REGISTER
						</a>
						<a href="/login" className="border-2 border-primary text-primary font-bold px-6 py-3 w-40 rounded-2xl hover:bg-[#fff] transition text-center">
							LOGIN
						</a>
					</div>
					<div className="flex space-x-6 items-center">
						<a href="https://www.instagram.com/formulatech.hacks/" className="hover:text-primary fill-primary">
							<img src={instagram.src} alt="Instagram" className="h-20 w-20 object-contain filter brightness-0 invert"/>
						</a>
						<a href="https://www.linkedin.com/company/formulatech-hacks" className="hover:text-primary">
							<img
								src={linkedin.src}
								alt="LinkedIn"
								className="h-10 w-10 object-contain filter brightness-0 invert"
							/>
						</a>
						<a href="mailto:someone@example.com" className="hover:text-primary">
							<img
								src={email.src}
								alt="Email"
								className="h-20 w-20 object-contain filter brightness-0 invert"
							/>
						</a>
					</div>
				</div>
			)}
		</>
	);
}