import StandsSVG from "../assets/stands.svg";
import MarketingFlag from "../assets/aston martin flag.svg";
import LogisticsFlag from "../assets/mclaren flag.svg";
import FinanceFlag from "../assets/mercedes flag.svg";
// Add more flags as needed

const TEAM_FLAGS = [
  { name: "Marketing", Flag: MarketingFlag },
  { name: "Logistics", Flag: LogisticsFlag },
  { name: "Finance", Flag: FinanceFlag },
  // Add more teams here
];

const PLACEHOLDER_IMAGES = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
  "https://randomuser.me/api/portraits/women/8.jpg",
  "https://randomuser.me/api/portraits/men/9.jpg",
  "https://randomuser.me/api/portraits/women/10.jpg"
];

// Core triangle: 1, 2, 3, 4 (centered, no overflow)
const CIRCLE_ROWS = [1, 2, 3, 4];
const STAND_WIDTH = 1500;
const CIRCLE_RADIUS = 50;
const STAND_HEIGHTS = [350, 460, 570, 670];
const CIRCLE_GAP = 80;

export default function Teams() {
  let imgIdx = 0;
  const CAR_HEIGHT = 144; // h-36 = 144px
  const ROAD_HEIGHT = 64; // h-16 = 64px
  return (
    <div className="py-8 w-full flex flex-col items-center">
      <div className="text-center mb-0">
      <h1 className="font-black text-center p-4 text-7xl capitalize text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-xl font-title">
				THE TEAM
      </h1>
      </div>
      <div className="relative mx-auto" style={{ width: STAND_WIDTH, maxWidth: "100%" }}>
        <img src={StandsSVG.src} className="w-full h-auto" alt="stands" />
        {/* Core triangle of circles */}
        {CIRCLE_ROWS.map((count, rowIdx) => {
          const totalWidth = count * CIRCLE_RADIUS * 2 + (count - 1) * CIRCLE_GAP;
          const startX = (STAND_WIDTH - totalWidth) / 2;
          const y = STAND_HEIGHTS[rowIdx];
          return Array.from({ length: count }).map((_, i) => {
            const x = startX + i * (CIRCLE_RADIUS * 2 + CIRCLE_GAP);
            const img = PLACEHOLDER_IMAGES[imgIdx++ % PLACEHOLDER_IMAGES.length];
            return (
              <div
                key={`circle-${rowIdx}-${i}`}
                className="absolute flex items-center justify-center rounded-full border-4 border-white shadow-lg overflow-hidden bg-white"
                style={{
                  left: x,
                  top: y,
                  width: CIRCLE_RADIUS * 2,
                  height: CIRCLE_RADIUS * 2,
                }}
              >
                <img
                  src={img}
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          });
        })}
      </div>
      {/* Cars absolutely positioned above the road */}
      <div className="relative w-full flex flex-col items-center" style={{ height: CAR_HEIGHT + ROAD_HEIGHT }}>
        {/* Cars */}
        <div className="absolute left-0 right-0 flex justify-evenly items-end" style={{ top: ROAD_HEIGHT * 0.1, height: CAR_HEIGHT }}>
          {TEAM_FLAGS.map(({ name, Flag }) => (
            <div key={name} className="flex flex-col items-center">
              <img src={Flag.src} className="w-72 h-36" alt={`${name} flag`} />
            </div>
          ))}
        </div>
        {/* Road under the cars - full width, no rounded corners */}
        <div className="absolute left-0 right-0 bottom-0 bg-[#23232b] flex items-center w-full h-16" style={{ borderRadius: 0, overflow: "hidden" }}>
          {/* Dashed white line */}
          <div className="absolute left-0 top-1/2 w-full flex justify-between items-center pointer-events-none" style={{ transform: "translateY(-50%)" }}>
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="bg-white"
                style={{
                  width: 40,
                  height: 8,
                  borderRadius: 4,
                  marginLeft: i === 0 ? 0 : 12,
                  marginRight: i === 29 ? 0 : 0,
                  opacity: 0.8,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 