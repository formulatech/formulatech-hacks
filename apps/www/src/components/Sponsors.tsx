// THIS COMPONENT NEEDS TO HAVE A CLIENT DIRECTIVE WHEN USED IN ASTRO

import type React from "react";

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
    // Set width based on tier to maintain consistent sizing
    const widthClasses = {
        large: "w-full", // 1 column - full width
        medium: "w-full md:w-[calc((100%-30px)/2)]", // 2 columns on desktop
        small: "w-full md:w-[calc((100%-60px)/3)]", // 3 columns on desktop
    };

    return (
        <a
            href={sponsor.website}
            target="_blank"
            rel="noreferrer"
            className={`${widthClasses[size]} bg-[rgba(254,251,241,0.3)] rounded-[10px] p-6 md:p-8 hover:bg-[rgba(254,251,241,0.4)] transition-all duration-300 group`}
        >
            <div className="flex flex-col gap-4 items-center justify-center h-full">
                <div className="w-full flex items-center justify-center p-4">
                    <img
                        src={sponsor.logoPath}
                        alt={sponsor.name}
                        className="max-h-[100px] md:max-h-[140px] w-auto object-contain"
                    />
                </div>
                <h3 className="font-title font-bold text-white text-center text-lg md:text-xl">
                    {sponsor.name}
                </h3>
                {size === "large" && (
                    <p className="font-body text-white/80 text-center text-sm md:text-base">
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

    return (
        <div
            id="sponsors"
            className="mt-24 md:mt-36 w-full mx-auto px-6 py-12 md:py-20"
        >
            <div className="flex flex-col items-center gap-[71px]">
                {/* Header Section */}
                <div className="flex flex-col items-center gap-6 md:gap-[35px] w-full">
                    <h1 className="font-black p-5 -ml-2.5 text-5xl capitalize text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-xl font-title">
                        OUR SPONSORS
                    </h1>
                    <p className="font-body text-base md:text-2xl text-white text-center max-w-[800px] leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                    </p>
                    <a
                        href={sponsor_package_dir}
                        rel="noreferrer"
                        target="_blank"
                        className="flex items-center justify-center hover:scale-105 transition-transform duration-200"
                        style={{
                            filter: "drop-shadow(0px 4px 10.9px rgba(0, 0, 0, 0.25))",
                        }}
                    >
                        <img
                            src="/become_a_sponsor_CTA.svg"
                            alt="Become a Sponsor"
                            className="w-[150px] md:w-[194px] object-contain"
                        />
                    </a>
                </div>

                {/* Sponsors Grid */}
                <div className="flex flex-col gap-6 md:gap-[30px] w-full">
                    {/* Gold tier sponsors - 1 column */}
                    {goldSponsors.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-6 md:gap-[30px] w-full">
                            {goldSponsors.map((sponsor) => (
                                <SponsorCard
                                    key={sponsor.key}
                                    sponsor={sponsor}
                                    size="large"
                                />
                            ))}
                        </div>
                    )}

                    {/* Silver tier - 2 columns on desktop */}
                    {silverSponsors.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-6 md:gap-[30px] w-full">
                            {silverSponsors.map((sponsor) => (
                                <SponsorCard
                                    key={sponsor.key}
                                    sponsor={sponsor}
                                    size="medium"
                                />
                            ))}
                        </div>
                    )}

                    {/* Bronze tier - 3 columns on desktop */}
                    {bronzeSponsors.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-6 md:gap-[30px] w-full">
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
                            <p className="font-body text-white/60 text-lg">
                                Sponsor information coming soon
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
