import "../styles/Hero.css";
import carSide from "../assets/car-side.svg";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden aspect-[98/216]">
      {/* Background SVG - Clipped to frame bounds */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 393 1200"
        preserveAspectRatio="xMidYMin slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#00AEB9" />
            <stop offset="100%" stopColor="#FF1A37" />
          </linearGradient>
        </defs>

        {/* Rectangle 114 - Gradient Background at (-577, -132) */}
        <rect
          x="-577"
          y="-132"
          width="1548"
          height="973"
          fill="url(#heroGradient)"
        />

        {/* Vector 30 - Cream wave at (-62, 506) */}
        <g transform="translate(-62, 506)">
          <path
            d="M516 554H75.1889H46.4404L34.9409 61.6029C6.19239 43.0822 -31.7557 4.89105 46.4404 0.292794C144.185 -5.45503 192.1 75.0145 255.346 101.838C318.593 128.661 322.426 75.0145 414.422 92.258C488.018 106.053 512.806 143.988 516 161.232V554Z"
            fill="#F0EAD7"
          />
        </g>

        {/* Vector 31 - Lighter cream wave at (-49, 711) */}
        <g transform="translate(-49, 711)">
          <path
            d="M0 396H461.314H491.4L503.434 44.0339C533.52 30.7952 573.233 3.49613 491.4 0.209289C389.108 -3.89926 338.965 53.6205 272.777 72.7937C206.588 91.967 202.577 53.6205 106.303 65.9462C29.2834 75.8067 3.34283 102.923 0 115.249V396Z"
            fill="#FBFCEE"
          />
        </g>

        {/* Group 16 - Checkered pattern - Only rightmost portion visible on LEFT edge */}
        <g transform="translate(-504, 504)">
          {/* Scattered checkered pattern - shifted right by ~23px for visibility */}
          {/* Row 1 (y=0) */}
          <rect x="501.24" y="0" width="22.76" height="22.76" fill="#FB2C46" fillOpacity="0.1" />
          <rect x="455.72" y="0" width="22.76" height="22.76" fill="#FB2C46" fillOpacity="0.1" />
          <rect x="410.21" y="0" width="22.76" height="22.76" fill="#FB2C46" fillOpacity="0.3" />

          {/* Row 2 (y=22.76) - skip the opacity=0 square */}
          <rect x="478.48" y="22.76" width="22.76" height="22.76" fill="#FB2C46" fillOpacity="0.3" />
          <rect x="432.97" y="22.76" width="22.76" height="22.76" fill="#FB2C46" fillOpacity="0.3" />

          {/* Additional scattered squares at different y positions for pattern variation */}
          <rect x="501.24" y="45.52" width="22.76" height="22.76" fill="#FB2C46" fillOpacity="0.3" />
          <rect x="478.48" y="68.28" width="22.76" height="22.76" fill="#FB2C46" fillOpacity="0.3" />
          <rect x="501.24" y="91.04" width="22.76" height="22.76" fill="#FB2C46" fillOpacity="0.1" />
          <rect x="524" y="113.8" width="22.76" height="22.76" fill="#FB2C46" fillOpacity="0.3" />
        </g>
      </svg>

      {/* Content Container */}
      <div className="relative mt-36 py-8 flex flex-col px-[30px] gap-5 items-center mx-auto z-10">
        {/* Date & Title Section - 25px gap */}
        <div className="flex flex-col gap-[25px] w-full">
          {/* Date & Location - 5px gap */}
          <div className="flex flex-col gap-[5px] items-center w-full">
            <p
              className="text-white text-center text-[14px] font-semibold tracking-[-0.03em]"
              style={{
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.2102272851126534em'
              }}
            >
              xx/xx/2026
            </p>
            <p
              className="text-white text-center text-[14px] font-semibold tracking-[-0.03em]"
              style={{
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.2102272851126534em'
              }}
            >
              UNIVERSITY OF WATERLOO, LOCATION
            </p>
          </div>

          {/* Main Title with Gradient Stroke - Wrapped */}
          <svg
            className="w-full"
            viewBox="0 0 333 80"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="titleStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#D2273D', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#00AEB9', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <text
              textAnchor="middle"
              fill="#FFFFFF"
              stroke="url(#titleStrokeGradient)"
              strokeWidth="12"
              fontSize="36"
              fontFamily="Orbitron, sans-serif"
              fontWeight="900"
              paintOrder="stroke fill"
            >
              <tspan x="50%" y="30">FORMULATECH</tspan>
              <tspan x="50%" y="66">HACKS</tspan>
            </text>
          </svg>
        </div>

        {/* Subtitle */}
        <p
          className="text-white text-center text-base font-semibold tracking-[-0.03em] w-full"
          style={{
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.399999976158142em'
          }}
        >
          Where motorsport meets makers.
          <br />
          Waterloo's first-ever Formula One hackathon.
        </p>

        {/* Buttons Container - 15px gap */}
        <div className="flex flex-col gap-[15px] items-center">
          {/* Primary Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScru3wvO6uZcbIDaXxxaUfB5GVFhpmB5LtLRFH8gHBSazsdFg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row justify-center items-center gap-[10px] px-[15px] py-[10px] bg-[#D2273D] rounded-[300px] hover:bg-[#D2273D]/90 transition-all duration-200"
          >
            <span
              className="text-white text-[14px] font-black text-left"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                lineHeight: '1.253999982561384em'
              }}
            >
              SAVE MY SPOT
            </span>
          </a>

          {/* Secondary Button */}
          <a
            href="#sponsors"
            className="flex flex-row justify-center items-center gap-[10px] px-[15px] py-[10px] border-[3px] border-[#FBFCEE] rounded-[300px] hover:bg-white/10 transition-all duration-200"
          >
            <span
              className="text-white text-[14px] font-black text-left"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                lineHeight: '1.253999982561384em'
              }}
            >
              BECOME A SPONSOR
            </span>
          </a>
        </div>

        {/* Car Image - 281x160px */}
        <img
          className="mt-5"
          src={carSide.src}
          alt="Side Car"
          style={{ width: '281px', height: '160px' }}
        />
      </div>
    </div>
  );
}
