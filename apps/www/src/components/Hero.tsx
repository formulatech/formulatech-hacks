import "../styles/Hero.css";
import carSide from "../assets/car-side.svg";
import desktopStarRed from "../assets/desktop-star-red.svg";
import desktopStarTeal from "../assets/desktop-star-teal.svg";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden aspect-[98/216] min-[412px]:max-sm:max-h-[916px] sm:aspect-auto sm:min-h-screen sm:pb-16 lg:aspect-[1512/1300] lg:pb-0">
      {/* Mobile Background SVG - Clipped to frame bounds */}
      <svg
        className="absolute inset-0 w-full h-full sm:hidden min-[412px]:max-sm:-top-[25%] min-[412px]:max-sm:h-[125%] min-[524px]:max-sm:-top-[45%] min-[524px]:max-sm:h-[145%] min-[568px]:max-sm:-top-[50%] min-[568px]:max-sm:h-[150%]"
        viewBox="0 0 393 1200"
        preserveAspectRatio="xMidYMin slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#00AEB9" />
            <stop offset="100%" stopColor="#FF1A37" />
          </linearGradient>

          {/* Star filters and gradients */}
          <filter id="mobileStarTealFilter" x="0" y="0" width="157" height="153.564" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>

          <radialGradient id="mobileStarTealGradient" cx="-12.5" cy="540.8" r="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00AEB9" />
            <stop offset="100%" stopColor="#007A82" />
          </radialGradient>

          <filter id="mobileStarRedFilter" x="0" y="0" width="174.729" height="183" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>

          <radialGradient id="mobileStarRedGradient" cx="331.4" cy="771.5" r="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D2273D" />
            <stop offset="100%" stopColor="#A41023" />
          </radialGradient>
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

        {/* Star 4 (Teal) - Positioned on left side, around CTA row */}
        <g transform="translate(-67, 468)" filter="url(#mobileStarTealFilter)">
          <path d="M135.711 35.4168L99.6079 66.7939L145.977 78.5353L98.326 82.6988L128.938 119.453L87.9402 94.8127L91.1023 142.541L72.4175 98.5085L46.9219 138.98L57.6872 92.3744L13.2722 110.131L49.3756 78.7535L3.0063 67.0121L50.6575 62.8486L20.0454 26.0944L61.0432 50.7347L57.8811 3.00661L76.5659 47.039L102.062 6.56746L91.2963 53.173L135.711 35.4168Z" fill="url(#mobileStarTealGradient)" />
          <path d="M136.994 34.6342C137.376 35.2602 137.25 36.0704 136.697 36.5514L102.764 66.0413L146.346 77.0784C147.057 77.2584 147.534 77.925 147.475 78.6559C147.416 79.3869 146.839 79.9683 146.108 80.0323L101.322 83.9452L130.093 118.491C130.563 119.054 130.556 119.874 130.079 120.431C129.602 120.988 128.792 121.119 128.164 120.741L89.6306 97.5818L92.6024 142.441C92.6508 143.173 92.1639 143.833 91.4505 144.003C90.737 144.173 90.0051 143.803 89.7186 143.128L72.1568 101.742L48.1934 139.781C47.8025 140.402 47.0213 140.649 46.3443 140.367C45.6673 140.085 45.2926 139.356 45.4577 138.642L55.576 94.8372L13.8305 111.526C13.1496 111.798 12.3716 111.54 11.9895 110.914C11.6075 110.288 11.733 109.477 12.2865 108.996L46.2193 79.5036L2.63724 68.4688C1.9264 68.2887 1.44945 67.6222 1.50837 66.8912C1.56737 66.1603 2.14483 65.5787 2.8753 65.5148L47.6619 61.6006L18.8902 27.0562C18.421 26.4927 18.427 25.6727 18.9043 25.116C19.3816 24.5593 20.1912 24.4281 20.8197 24.8058L59.3532 47.964L56.3811 3.10578C56.3328 2.37407 56.8196 1.71408 57.533 1.54423C58.2464 1.37445 58.9783 1.74418 59.2649 2.41911L76.8271 43.8036L100.79 5.76607C101.181 5.14579 101.962 4.8981 102.639 5.17995C103.316 5.46184 103.691 6.19086 103.526 6.90533L93.4083 50.7094L135.153 34.0211C135.834 33.7489 136.612 34.0082 136.994 34.6342Z" fill="none" stroke="white" strokeWidth="3" strokeLinejoin="round" />
        </g>

        {/* Star 3 (Red) - Positioned on right side, lower in section */}
        <g transform="translate(248, 684)" filter="url(#mobileStarRedFilter)">
          <path d="M83.3647 3L92.765 58.5689L133.033 19.1381L107.975 69.6196L163.729 61.3881L113.785 87.5L163.729 113.612L107.975 105.38L133.033 155.862L92.765 116.431L83.3647 172L73.9644 116.431L33.6969 155.862L58.7544 105.38L3.00047 113.612L52.9447 87.5L3.00047 61.3881L58.7544 69.6196L33.6969 19.1381L73.9644 58.5689L83.3647 3Z" fill="url(#mobileStarRedGradient)" />
          <path d="M83.3647 1.5C84.0966 1.5 84.7212 2.02837 84.8433 2.75L93.7651 55.4893L131.983 18.0664C132.506 17.5543 133.322 17.4946 133.915 17.9248C134.506 18.355 134.702 19.1493 134.376 19.8047L110.593 67.7158L163.51 59.9043C164.234 59.7976 164.93 60.2288 165.156 60.9248C165.382 61.6208 165.073 62.3787 164.424 62.7178L117.022 87.5L164.424 112.282C165.073 112.621 165.382 113.379 165.156 114.075C164.93 114.771 164.234 115.202 163.51 115.096L110.593 107.283L134.376 155.195C134.702 155.851 134.506 156.645 133.915 157.075C133.322 157.505 132.506 157.446 131.983 156.934L93.7651 119.51L84.8433 172.25C84.7212 172.972 84.0966 173.5 83.3647 173.5C82.6329 173.5 82.0083 172.972 81.8862 172.25L72.9634 119.51L34.7466 156.934C34.2237 157.446 33.407 157.505 32.8149 157.075C32.2232 156.645 32.0279 155.851 32.353 155.195L56.1353 107.283L3.21924 115.096C2.49531 115.202 1.79986 114.771 1.57373 114.075C1.34776 113.379 1.65673 112.621 2.30518 112.282L49.7065 87.5L2.30518 62.7178C1.65673 62.3787 1.34776 61.6208 1.57373 60.9248C1.79986 60.2288 2.49531 59.7976 3.21924 59.9043L56.1353 67.7158L32.353 19.8047C32.0279 19.1493 32.2232 18.355 32.8149 17.9248C33.407 17.4946 34.2237 17.5543 34.7466 18.0664L72.9634 55.4893L81.8862 2.75L81.9146 2.61719C82.0864 1.9644 82.6785 1.5 83.3647 1.5Z" fill="none" stroke="white" strokeWidth="3" strokeLinejoin="round" />
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

        {/* Desktop Stars */}
        {/* Red star */}
        <image
          href={desktopStarRed.src}
          x="-96"
          y="248"
          width="419"
          height="438"
        />

        {/* Teal star */}
        <image
          href={desktopStarTeal.src}
          x="1184"
          y="468"
          width="457"
          height="447"
        />
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
