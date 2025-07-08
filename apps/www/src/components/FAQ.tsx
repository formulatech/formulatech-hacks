import FaqGeneral from "../assets/faq-black.svg";
import FaqRegistration from "../assets/faq-red.svg";
import FaqLogistics from "../assets/faq-purple.svg";
import FaqOther from "../assets/faq-yellow.svg";
import Flag from "../assets/flag.svg";

const FAQ_CARS = [
  { label: "GENERAL", Car: FaqGeneral },
  { label: "REGISTRATION", Car: FaqRegistration },
  { label: "LOGISTICS", Car: FaqLogistics },
  { label: "OTHER", Car: FaqOther },
];

const FAQ_ITEMS = [
  { icon: FaqGeneral, label: "General" },
  { icon: FaqRegistration, label: "Registration" },
  { icon: FaqLogistics, label: "Logistics" },
  { icon: FaqOther, label: "Other" },
  { icon: FaqGeneral, label: "General" },
  { icon: FaqRegistration, label: "Registration" },
];

export default function FAQ() {
  return (
    <div className=" w-full flex flex-col items-center py-8">
      {/* Header */}
      <div className="text-center mb-2">
      <h1 className="font-black text-center p-4 text-7xl capitalize text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-xl font-title">
	    Frequently Asked Questions
      </h1>
      </div>
      {/* Cars with flags */}
      <div className="relative w-full flex justify-center items-end mb-2" style={{ minHeight: 120 }}>
        <div className="flex w-full max-w-6xl justify-between items-end px-8">
          {FAQ_CARS.map(({ label, Car }) => (
            <div key={label} className="flex flex-col items-center">
              <img src={Car.src} className="w-40 h-24" alt={label} />
            </div>
          ))}
        </div>
      </div>
      {/* Road */}
      <div className="w-full flex justify-center">
        <div className="bg-[#23232b] relative flex items-center w-full h-10" style={{ borderRadius: 0, overflow: "hidden" }}>
          {/* Dashed white line */}
          <div className="absolute left-0 top-1/2 w-full flex justify-between items-center pointer-events-none" style={{ transform: "translateY(-50%)" }}>
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="bg-white"
                style={{
                  width: 32,
                  height: 5,
                  borderRadius: 2,
                  marginLeft: i === 0 ? 0 : 10,
                  marginRight: i === 29 ? 0 : 0,
                  opacity: 0.8,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* FAQ Box */}
      <div className="w-full flex justify-center mt-0">
        <div className="bg-black rounded-b-2xl w-full max-w-6xl px-8 py-8 flex flex-col items-center" style={{ minHeight: 260 }}>
          <div className="grid grid-cols-3 grid-rows-2 gap-y-8 gap-x-8 w-full">
            {FAQ_ITEMS.map(({ icon, label }, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <img src={Flag.src} className="w-10 h-10" alt={label} />
                <div className="h-2 w-32 bg-white rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 