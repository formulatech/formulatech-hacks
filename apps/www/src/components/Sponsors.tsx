// THIS COMPONENT NEEDS TO HAVE A CLIENT DIRECTIVE WHEN USED IN ASTRO

import React from "react";

interface Sponsor {
  key: string;
  name: string;
  logoPath: string;
  website: string;
  description: string;
  tier: "GOLD" | "SILVER" | "BRONZE";
}

// Create a slug from a string (replace spaces with hyphens, lowercase)
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

// Create a function that generates sponsors with defaults
function createSponsor(sponsor: {
  name?: string;
  logoPath?: string;
  website?: string;
  description?: string;
  tier?: "GOLD" | "SILVER" | "BRONZE";
}): Sponsor {
  const name = sponsor.name || "Default Sponsor";
  const key = slugify(name);

  return {
    key,
    name,
    logoPath: sponsor.logoPath || "/sponsors/default_sponsor.svg",
    website: sponsor.website || "https://example.com",
    description: sponsor.description || "Default sponsor description",
    tier: sponsor.tier || "BRONZE",
  };
}

// ADD AND EDIT SPONSORS HERE
const sponsors: Sponsor[] = [
  createSponsor({
    name: "SLEF",
    tier: "BRONZE",
    logoPath: "/sponsors/slef/SLEF_Logo_Color_Logo_Name.png",
    website: "https://wusa.ca/about/your-money/funding/",
    description:
      "The Student Life Endowment Fund (SLEF) is an income-generating fund that supports student-led projects and initiatives aimed at enhancing campus life and fostering a vibrant, inclusive community for undergraduate students at the University of Waterloo.",
  }),
  createSponsor({
    name: "MEF",
    tier: "SILVER",
    logoPath: "/sponsors/mef/MEF_Logo.png",
    website: "https://uwaterloo.ca/math-endowment-fund/",
    description:
      "The Mathematics Endowment Fund (MEF) is an income-generating fund that exists to finance projects that are in the best interests of undergraduate math students at the University of Waterloo.",
  }),
];

const sponsor_package_dir = "/sponsors/FTH%20Sponsorship%20Package.pdf";

// Sponsor Card Component
interface SponsorCardProps {
  sponsor: Sponsor;
  size: "large" | "medium" | "small";
}

function SponsorCard({ sponsor, size }: SponsorCardProps) {
  // Define width classes based on tier
  // Mobile: Gold=1/2, Silver=1/3, Bronze=1/3
  // Desktop: Gold=1/2, Silver=1/3, Bronze=1/4
  const widthClasses =
    size === "large"
      ? "w-[calc(50%-10px)] md:w-[calc(50%-15px)]" // Gold: 1/2 on both
      : size === "medium"
        ? "w-[calc(33.333%-13.333px)] md:w-[calc(33.333%-20px)]" // Silver: 1/3 on both
        : "w-[calc(33.333%-13.333px)] md:w-[calc(25%-22.5px)]"; // Bronze: 1/3 mobile, 1/4 desktop

  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noreferrer"
      className={`${widthClasses} flex-shrink-0 rounded-[20px] p-[12px] md:p-[30px] transition-all duration-300 backdrop-blur-md hover:backdrop-blur-lg`}
      style={{
        background: "linear-gradient(180deg, rgba(251, 44, 70, 0.3) 0%, rgba(0, 174, 185, 0.3) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex flex-col gap-4 items-center justify-center h-full">
        <div className="w-full flex items-center justify-center">
          <img
            src={sponsor.logoPath}
            alt={sponsor.name}
            className="max-h-[100px] md:max-h-[140px] w-auto object-contain"
          />
        </div>
        <h3 className="font-title font-bold text-white text-center text-xs md:text-lg md:text-xl">
          {sponsor.name}
        </h3>
        {size === "large" && (
          <p className="font-body text-white/90 text-center text-sm md:text-base">
            {sponsor.description}
          </p>
        )}
      </div>
    </a>
  );
}

// Exported component
export default function Sponsors() {
  // Organize sponsors by tier
  const goldSponsors = sponsors.filter((s) => s.tier === "GOLD");
  const silverSponsors = sponsors.filter((s) => s.tier === "SILVER");
  const bronzeSponsors = sponsors.filter((s) => s.tier === "BRONZE");

  // Track mouse position for flashlight effect (desktop only)
  const [mousePos, setMousePos] = React.useState({ x: 50, y: 50 });
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only apply flashlight effect on desktop (768px and above)
    if (!isDesktop) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  // Use subtle centered gradient for mobile, flashlight gradient for desktop
  const backgroundGradient = isDesktop
    ? `radial-gradient(circle 600px at ${mousePos.x}% ${mousePos.y}%, rgba(49, 49, 49, 1) 0%, rgba(25, 25, 25, 1) 50%, rgba(0, 0, 0, 1) 100%)`
    : "radial-gradient(circle 400px at 50% 50%, rgba(49, 49, 49, 1) 0%, rgba(25, 25, 25, 1) 50%, rgba(0, 0, 0, 1) 100%)";

  return (
    <div
      id="sponsors"
      className="w-full my-12 md:my-20 rounded-[30px] md:rounded-[60px]"
      onMouseMove={handleMouseMove}
      style={{
        background: backgroundGradient,
      }}
    >

      <div className="pt-[30px] md:pt-[80px] pb-4">
        <div className="flex flex-col items-center gap-5 w-full">
          {/* Title - Single on mobile, repeating on desktop */}
          <div className="w-full">
            {/* Mobile: show single title */}
            <h1
              className="md:hidden font-title font-black text-2xl text-center bg-clip-text text-transparent whitespace-nowrap"
              style={{
                backgroundImage: "linear-gradient(90deg, rgba(210, 39, 61, 1) 41%, rgba(0, 174, 185, 1) 85%)"
              }}
            >
              OUR SPONSORS
            </h1>
            {/* Desktop: show repeating pattern with infinite scroll */}
            <div className="hidden md:block w-full overflow-hidden">
              <style>{`
                @keyframes scroll-left {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .animate-scroll {
                  animation: scroll-left 20s linear infinite;
                }
              `}</style>
              <div className="flex flex-row items-center gap-[30px] animate-scroll">
                {/* First set */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <React.Fragment key={`set1-${i}`}>
                    <h1 className="font-title font-black text-5xl bg-gradient-to-r from-[#D2273D] via-[#D2273D] to-[#00AEB9] bg-clip-text text-transparent whitespace-nowrap">
                      OUR SPONSORS
                    </h1>
                    <span className="font-title font-black text-5xl bg-gradient-to-r from-[#D2273D] via-[#D2273D] to-[#00AEB9] bg-clip-text text-transparent">
                      /
                    </span>
                  </React.Fragment>
                ))}
                {/* Second set (duplicate for seamless loop) */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <React.Fragment key={`set2-${i}`}>
                    <h1 className="font-title font-black text-5xl bg-gradient-to-r from-[#D2273D] via-[#D2273D] to-[#00AEB9] bg-clip-text text-transparent whitespace-nowrap">
                      OUR SPONSORS
                    </h1>
                    <span className="font-title font-black text-5xl bg-gradient-to-r from-[#D2273D] via-[#D2273D] to-[#00AEB9] bg-clip-text text-transparent">
                      /
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6">
        <div
          className="w-full mx-auto p-[0px_30px_50px] md:p-[0px_150px_80px] flex flex-col items-center gap-5 md:gap-0"
        >
          <div className="flex flex-col items-center gap-5 w-full">
            {/* Description */}
            <p
              className="text-sm md:text-xl text-center leading-relaxed md:leading-[1.8] w-full"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                color: "#FFFAEB",
                letterSpacing: "-0.05em",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation
            </p>

            {/* Contact Section */}
            {/* Mobile Layout - Simple Column */}
            <div className="md:hidden flex flex-col items-center gap-5 w-full">
              {/* Email Text */}
              <p
                className="text-sm text-center"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  color: "#FFFAEB",
                  letterSpacing: "-0.05em",
                  lineHeight: "1.8em",
                }}
              >
                Email us at address@gmail.com
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-5 items-center justify-center">
                {/* Filled Button */}
                <a
                  href={sponsor_package_dir}
                  rel="noreferrer"
                  target="_blank"
                  className="rounded-full hover:opacity-90 transition-opacity px-[15px] py-[10px]"
                  style={{
                    backgroundColor: "#00AEB9",
                  }}
                >
                  <span
                    className="font-title font-black text-sm whitespace-nowrap"
                    style={{
                      color: "#FFFFFF",
                      lineHeight: "1.254em",
                    }}
                  >
                    BECOME A SPONSOR
                  </span>
                </a>

                {/* Outlined Button */}
                <a
                  href={sponsor_package_dir}
                  rel="noreferrer"
                  target="_blank"
                  className="rounded-full hover:opacity-90 transition-opacity px-[15px] py-[10px]"
                  style={{
                    border: "3px solid #00AEB9",
                  }}
                >
                  <span
                    className="font-title font-black text-sm whitespace-nowrap"
                    style={{
                      color: "#00AEB9",
                      lineHeight: "1.254em",
                    }}
                  >
                    SPONSORSHIP PACKAGE
                  </span>
                </a>
              </div>
            </div>

            {/* Desktop Layout - With Flags */}
            <div className="hidden md:flex flex-row items-start justify-center gap-5 w-full">
              {/* Left Flag */}
              <img
                src="/sponsors/group_6.svg"
                alt="Decorative flag"
                className="w-[197.58px] h-[211px] object-contain"
              />

              {/* Center Content */}
              <div className="flex flex-col items-center gap-5">
                {/* Email Text */}
                <p
                  className="text-xl text-center"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    color: "#FFFAEB",
                    letterSpacing: "-0.05em",
                    lineHeight: "1.8em",
                  }}
                >
                  Email us at address@gmail.com
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-row gap-5 items-center justify-center">
                  {/* Filled Button */}
                  <a
                    href={sponsor_package_dir}
                    rel="noreferrer"
                    target="_blank"
                    className="rounded-full hover:opacity-90 transition-opacity px-5 py-5"
                    style={{
                      backgroundColor: "#00AEB9",
                    }}
                  >
                    <span
                      className="font-title font-black text-xl whitespace-nowrap"
                      style={{
                        color: "#020202",
                        lineHeight: "1.254em",
                      }}
                    >
                      BECOME A SPONSOR
                    </span>
                  </a>

                  {/* Outlined Button */}
                  <a
                    href={sponsor_package_dir}
                    rel="noreferrer"
                    target="_blank"
                    className="rounded-full hover:opacity-90 transition-opacity px-5 py-5"
                    style={{
                      border: "3px solid #00AEB9",
                    }}
                  >
                    <span
                      className="font-title font-black text-xl whitespace-nowrap"
                      style={{
                        color: "#00AEB9",
                        lineHeight: "1.254em",
                      }}
                    >
                      SPONSORSHIP PACKAGE
                    </span>
                  </a>
                </div>
              </div>

              {/* Right Flag */}
              <img
                src="/sponsors/flag.svg"
                alt="Decorative flag"
                className="w-[197.58px] h-[211px] object-contain"
              />
            </div>
          </div>

          {/* Sponsors Grid */}
          <div className="flex flex-col gap-5 md:gap-[30px] w-full mt-5">
            {/* Gold tier sponsors - 2 per row */}
            {goldSponsors.length > 0 && (
              <div className="flex flex-wrap justify-center gap-5 md:gap-[30px] w-full">
                {goldSponsors.map((sponsor) => (
                  <SponsorCard
                    key={sponsor.key}
                    sponsor={sponsor}
                    size="large"
                  />
                ))}
              </div>
            )}

            {/* Silver tier - 3 per row */}
            {silverSponsors.length > 0 && (
              <div className="flex flex-wrap justify-center gap-5 md:gap-[30px] w-full">
                {silverSponsors.map((sponsor) => (
                  <SponsorCard
                    key={sponsor.key}
                    sponsor={sponsor}
                    size="medium"
                  />
                ))}
              </div>
            )}

            {/* Bronze tier - 3 per row on mobile, 4 per row on desktop */}
            {bronzeSponsors.length > 0 && (
              <div className="flex flex-wrap justify-center gap-5 md:gap-[30px] w-full">
                {bronzeSponsors.map((sponsor) => (
                  <SponsorCard
                    key={sponsor.key}
                    sponsor={sponsor}
                    size="small"
                  />
                ))}
              </div>
            )}

            {/* Placeholder message when no sponsors */}
            {sponsors.length === 0 && (
              <div className="text-center py-12">
                <p
                  className="text-lg"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#FFFAEB",
                    opacity: 0.6,
                  }}
                >
                  Sponsor information coming soon
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
