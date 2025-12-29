import "../styles/Hero.css";
import carSide from "../assets/car-side.svg";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden aspect-[98/216] min-[412px]:max-sm:max-h-[916px] sm:aspect-auto sm:min-h-screen sm:pb-16 lg:aspect-[1512/1300] lg:pb-0">
      {/* Mobile Background SVG - Clipped to frame bounds */}
      <svg
        className="absolute inset-0 w-full h-full sm:hidden min-[412px]:max-sm:-top-[25%] min-[412px]:max-sm:h-[125%] min-[568px]:max-sm:-top-[35%] min-[568px]:max-sm:h-[135%]"
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

      {/* Desktop Background SVG - Clipped to frame bounds */}
      <svg
        className="hidden sm:block absolute inset-0 w-full h-full"
        viewBox="0 0 1512 2700"
        preserveAspectRatio="xMidYMin slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="desktopHeroGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#00AEB9" />
            <stop offset="100%" stopColor="#FF1A37" />
          </linearGradient>
        </defs>

        {/* Gradient Background at (-18, 0) */}
        <rect
          x="-18"
          y="0"
          width="2194"
          height="940"
          fill="url(#desktopHeroGradient)"
        />

        {/* Layer 2 - Cream wave at (-320.92, 352) */}
        <g transform="translate(-320.92, 352)">
          <path
            d="M2154 2313.39H313.87H193.861L145.858 257.241C25.8496 179.902 -132.562 20.424 193.861 1.22264C601.89 -22.7791 801.904 313.245 1065.92 425.253C1329.94 537.26 1345.94 313.245 1729.97 385.25C2037.19 442.854 2140.67 601.265 2154 673.27V2313.39Z"
            fill="#F0EAD7"
          />
        </g>

        {/* Top layer - Off-white wave at (-248, 940) */}
        <g transform="translate(-248, 940)">
          <path
            d="M0 1736H2024.66H2156.7L2209.52 193.037C2341.56 135.001 2515.85 15.3265 2156.7 0.91749C1707.75 -17.0937 1487.68 235.064 1197.19 319.116C906.694 403.168 889.088 235.064 466.551 289.097C128.522 332.324 14.6714 451.198 0 505.232V1736Z"
            fill="#FBFCEE"
          />
        </g>

        {/* Red grid at (-1080, 348) */}
        <g transform="translate(-1080, 348)">
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1670.58 431.375)" fill="#FB2C46" fillOpacity="0.1" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1608.96 369.75)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1423.34 431.375)" fill="#FB2C46" fillOpacity="0.1" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1361.72 369.75)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1176.84 431.375)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1732.21 369.75)" fill="#FB2C46" fillOpacity="0.1" />
          <rect width="62.3675" height="61.625" transform="matrix(-1 0 0 1 1485.71 369.75)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1300.09 431.375)" fill="#FB2C46" fillOpacity="0.1" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1238.47 369.75)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 991.965 369.75)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 806.348 431.375)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 744.723 369.75)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 559.848 431.375)" fill="#FB2C46" fillOpacity="0.1" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1115.22 369.75)" fill="#FB2C46" fillOpacity="0.1" />
          <rect width="62.3675" height="61.625" transform="matrix(-1 0 0 1 930.34 431.375)" fill="#FB2C46" fillOpacity="0.1" />
          <rect width="62.3675" height="61.625" transform="matrix(-1 0 0 1 868.715 369.75)" fill="#FB2C46" fillOpacity="0.1" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 683.098 431.375)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 621.473 369.75)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1418.86 308.125)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1357.24 246.5)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1172.36 308.125)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1110.74 246.5)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 925.118 308.125)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 863.493 246.5)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 678.618 308.125)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1295.61 308.125)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1233.99 246.5)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="62.3675" height="61.625" transform="matrix(-1 0 0 1 1049.11 308.125)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="62.3675" height="61.625" transform="matrix(-1 0 0 1 987.485 246.5)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 801.868 308.125)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 740.243 246.5)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 555.368 308.125)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 493.743 246.5)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 308.125 308.125)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 246.5 246.5)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 61.625 308.125)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 616.993 246.5)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="62.3675" height="61.625" transform="matrix(-1 0 0 1 432.118 308.125)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="62.3675" height="61.625" transform="matrix(-1 0 0 1 370.493 246.5)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 184.875 308.125)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 123.25 246.5)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1418.86 184.875)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1357.24 123.25)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1172.36 184.875)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1110.74 123.25)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 925.118 184.875)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 863.493 123.25)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 678.618 184.875)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1295.61 184.875)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1233.99 123.25)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="62.3675" height="61.625" transform="matrix(-1 0 0 1 1049.11 184.875)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="62.3675" height="61.625" transform="matrix(-1 0 0 1 987.485 123.25)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 801.868 184.875)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 740.243 123.25)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 555.368 184.875)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 493.743 123.25)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 308.125 184.875)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 246.5 123.25)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 61.625 184.875)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 616.993 123.25)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="62.3675" height="61.625" transform="matrix(-1 0 0 1 432.118 184.875)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="62.3675" height="61.625" transform="matrix(-1 0 0 1 370.493 123.25)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 184.875 184.875)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 123.25 123.25)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1542.11 61.625)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1295.61 61.625)" fill="#FB2C46" fillOpacity="0.1" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1048.37 61.625)" fill="#FB2C46" fillOpacity="0.1" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 986.743 0)" fill="#FB2C46" fillOpacity="0.1" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 801.868 61.625)" fill="#FB2C46" fillOpacity="0.1" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1418.86 61.625)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 1357.24 0)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="62.3675" height="61.625" transform="matrix(-1 0 0 1 1172.36 61.625)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="62.3675" height="61.625" transform="matrix(-1 0 0 1 1110.74 0)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 925.118 61.625)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 678.618 61.625)" fill="#FB2C46" fillOpacity="0.1" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 616.993 0)" fill="#FB2C46" fillOpacity="0.1" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 431.375 61.625)" fill="#FB2C46" fillOpacity="0.1" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 184.875 61.625)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="62.3675" height="61.625" transform="matrix(-1 0 0 1 555.368 61.625)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="62.3675" height="61.625" transform="matrix(-1 0 0 1 493.743 0)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 308.125 61.625)" fill="#FB2C46" fillOpacity="0.3" />
          <rect width="61.625" height="61.625" transform="matrix(-1 0 0 1 246.5 0)" fill="#FB2C46" fillOpacity="0.3" />
        </g>
      </svg>

      {/* Content Container */}
      <div className="relative mt-36 py-8 flex flex-col px-[30px] gap-5 items-center mx-auto z-10 sm:max-w-[942px] sm:gap-[25px] sm:px-[40px] lg:px-[30px]">
        {/* Date & Title Section - 25px gap */}
        <div className="flex flex-col gap-[25px] w-full sm:gap-[25px]">
          {/* Date & Location - 5px gap on mobile, row with space-between on desktop */}
          <div className="flex flex-col gap-[5px] items-center w-full sm:flex-row sm:justify-between sm:gap-[15px]">
            <p
              className="text-white text-center text-[14px] font-semibold tracking-[-0.03em] sm:text-[16px] md:text-[18px] lg:text-[20px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.2102272851126534em'
              }}
            >
              xx/xx/2026
            </p>
            <p
              className="text-white text-center text-[14px] font-semibold tracking-[-0.03em] sm:text-[16px] md:text-[18px] lg:text-[20px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.2102272851126534em'
              }}
            >
              UNIVERSITY OF WATERLOO, LOCATION
            </p>
          </div>

          {/* Main Title - Desktop sm-md: 56px */}
          <svg
            className="w-full hidden sm:block md:hidden"
            viewBox="0 0 640 112"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="smTitleStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#D2273D', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#00AEB9', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <text
              textAnchor="middle"
              fill="#FFFFFF"
              stroke="url(#smTitleStrokeGradient)"
              strokeWidth="10"
              fontSize="56"
              fontFamily="Orbitron, sans-serif"
              fontWeight="900"
              paintOrder="stroke fill"
            >
              <tspan x="50%" y="47">FORMULATECH</tspan>
              <tspan x="50%" y="103">HACKS</tspan>
            </text>
          </svg>

          {/* Main Title - Desktop md-lg: 70px */}
          <svg
            className="w-full hidden md:block lg:hidden"
            viewBox="0 0 768 140"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="mdTitleStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#D2273D', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#00AEB9', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <text
              textAnchor="middle"
              fill="#FFFFFF"
              stroke="url(#mdTitleStrokeGradient)"
              strokeWidth="12"
              fontSize="70"
              fontFamily="Orbitron, sans-serif"
              fontWeight="900"
              paintOrder="stroke fill"
            >
              <tspan x="50%" y="58">FORMULATECH</tspan>
              <tspan x="50%" y="128">HACKS</tspan>
            </text>
          </svg>

          {/* Main Title - Desktop lg+: 84px */}
          <svg
            className="w-full hidden lg:block"
            viewBox="0 0 942 168"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="lgTitleStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#D2273D', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#00AEB9', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <text
              textAnchor="middle"
              fill="#FFFFFF"
              stroke="url(#lgTitleStrokeGradient)"
              strokeWidth="15"
              fontSize="84"
              fontFamily="Orbitron, sans-serif"
              fontWeight="900"
              paintOrder="stroke fill"
            >
              <tspan x="50%" y="70">FORMULATECH</tspan>
              <tspan x="50%" y="154">HACKS</tspan>
            </text>
          </svg>

          {/* Main Title with Gradient Stroke - Mobile: wrapped, 36px */}
          <svg
            className="w-full sm:hidden"
            viewBox="0 0 333 80"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="mobileTitleStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#D2273D', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#00AEB9', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <text
              textAnchor="middle"
              fill="#FFFFFF"
              stroke="url(#mobileTitleStrokeGradient)"
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
          className="text-white text-center text-base font-semibold tracking-[-0.03em] w-full sm:text-[22px] md:text-[26px] lg:text-[32px] sm:tracking-[-0.05em]"
          style={{
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.1em'
          }}
        >
          Where motorsport meets makers.
          <br />
          Waterloo's first-ever Formula One hackathon.
        </p>

        {/* Buttons Container - 15px gap mobile, responsive gap desktop */}
        <div className="flex flex-col gap-[15px] items-center sm:flex-row sm:gap-[20px] md:gap-[25px] lg:gap-[30px]">
          {/* Primary Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScru3wvO6uZcbIDaXxxaUfB5GVFhpmB5LtLRFH8gHBSazsdFg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row justify-center items-center gap-[10px] px-[15px] py-[10px] bg-[#D2273D] rounded-[300px] hover:bg-[#D2273D]/90 transition-all duration-200 sm:px-[16px] sm:py-[16px] md:px-[18px] md:py-[18px] lg:px-[20px] lg:py-[20px]"
          >
            <span
              className="text-white text-[14px] font-black text-left sm:text-[15px] md:text-[16px] lg:text-[18px]"
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
            className="flex flex-row justify-center items-center gap-[10px] px-[15px] py-[10px] border-[3px] border-[#FBFCEE] rounded-[300px] hover:bg-white/10 transition-all duration-200 sm:px-[16px] sm:py-[16px] md:px-[18px] md:py-[18px] lg:px-[20px] lg:py-[20px]"
          >
            <span
              className="text-white text-[14px] font-black text-left sm:text-[15px] md:text-[16px] lg:text-[18px]"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                lineHeight: '1.253999982561384em'
              }}
            >
              BECOME A SPONSOR
            </span>
          </a>
        </div>

        {/* Car Image - responsive sizing */}
        <img
          className="mt-5 w-[281px] h-[160px] sm:w-[420px] sm:h-[241px] md:w-[530px] md:h-[304px] lg:w-[642px] lg:h-[368px]"
          src={carSide.src}
          alt="Side Car"
        />
      </div>
    </div>
  );
}
