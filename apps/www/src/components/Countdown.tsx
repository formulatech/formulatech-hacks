import { useState, useEffect } from "react";
import countdownSvg from "../assets/countdown.svg";

interface TimeLeft {
    days : number;
    hours : number;
    minutes : number;
    seconds : number;
}

export default function Countdown () {

    const hackathonDay = new Date(2026, 0, 1, 0, 0, 0); // January 1st, 2026 at midnight
    const initTimeLeft = {days : 0, hours : 0, minutes : 0, seconds : 0};
    const [curTime, setCurTime] = useState<TimeLeft>(initTimeLeft);

    useEffect(() => {

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = hackathonDay.getTime() - now.getTime();

            if (difference <= 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return { days, hours, minutes, seconds };
        };

        setCurTime(calculateTimeLeft());

        const intervalId = setInterval(() => {
            console.log("Interval running");
            setCurTime(calculateTimeLeft());
        }, 1000);

        return () => {
            console.log("Cleanup running");
            clearInterval(intervalId);
        };

    }, []);

    return (

        <div className="relative">
            <img src={countdownSvg.src} className="h-[600px]"/>
            <div className="absolute top-0 left-0 w-full h-full h-[200px] grid place-items-center py-[15px] font-title font-bold" style={{gridTemplateRows : "minmax(0, 1fr) minmax(0, 3fr)", gridTemplateColumns : "minmax(0, 1fr) minmax(0, 4fr) minmax(0, 1fr) minmax(0, 4fr) minmax(0, 1fr) minmax(0, 4fr) minmax(0, 1fr) minmax(0, 4fr) minmax(0, 1fr)", backgroundSize : "100% 100%", backgroundRepeat : "no-repeat"}}>
                <p className="z-1 col-start-2 text-l">DAYS</p>
                <p className="z-1 col-start-4 text-l">HOURS</p>
                <p className="z-1 col-start-6 text-l">MINUTES</p>
                <p className="z-1 col-start-8 text-l">SECONDS</p>
                <p className="z-1 row-start-2 col-start-2 text-3xl">{curTime.days}</p>
                <p className="z-1 row-start-2 col-start-4 text-3xl">{curTime.hours}</p>
                <p className="z-1 row-start-2 col-start-6 text-3xl">{curTime.minutes}</p>
                <p className="z-1 row-start-2 col-start-8 text-3xl">{curTime.seconds}</p>
            </div>
        </div>
        

    )

}
