import { useState, useEffect } from "react";
import countdownSvg from "../assets/countdown.svg"

//TimeLeft interface to store all info in one object
interface TimeLeft {
    days : number;
    hours : number;
    minutes : number;
    seconds : number;
}

export default function Countdown () {

    const hackathonDay = new Date(2026, 0, 1); //F1hacks day
    const initTimeLeft = {days : 0, hours : 0, minutes : 0, seconds : 0};
    const [curTime, setCurTime] = useState<TimeLeft>(initTimeLeft);

    //Timer, run once on component load
    useEffect(() => {

        //Every second update time
        const intervalId : number = setInterval(() => {
            //Calculate individual times
            //Note: Date() - Date() -> milliseconds between the two dates
            var daysRemaining : number = (hackathonDay - (new Date())) / (1000 * 60 * 60 * 24);
            var hoursRemaining : number = (daysRemaining % 1) * 24;
            var minutesRemaining : number = (hoursRemaining % 1) * 60;
            var secondsRemaining : number = (minutesRemaining % 1) * 60;
            var nextTimeLeft : TimeLeft = {days : Math.floor(daysRemaining), hours : Math.floor(hoursRemaining), minutes : Math.floor(minutesRemaining), seconds : Math.floor(secondsRemaining)};
            setCurTime(nextTimeLeft);
        }, 1000);

        //Remove interval on component dismount
        return () => {
            clearInterval(intervalId);
        };

    }, []);

    return (

        <div className="relative">
            <img src={countdownSvg.src} className="h-[200px]"/>
            <div className="absolute top-0 left-0 w-full h-full h-[200px] grid place-items-center py-[15px] font-title font-bold" style={{gridTemplateRows : "minmax(0, 1fr) minmax(0, 3fr)", gridTemplateColumns : "minmax(0, 1fr) minmax(0, 5fr) minmax(0, 1.34fr) minmax(0, 5fr) minmax(0, 1.34fr) minmax(0, 5fr) minmax(0, 2.1fr)", backgroundSize : "100% 100%", backgroundRepeat : "no-repeat"}}>
                <p className="z-1 col-start-2 text-l">DAYS</p>
                <p className="z-1 col-start-4 text-l">HOURS</p>
                <p className="z-1 col-start-6 text-l">MINUTES</p>
                <p className="z-1 row-start-2 col-start-2 text-3xl">{curTime.days}</p>
                <p className="z-1 row-start-2 col-start-4 text-3xl">{curTime.hours}</p>
                <p className="z-1 row-start-2 col-start-6 text-3xl">{curTime.minutes}</p>
            </div>
        </div>
        

    )

}
