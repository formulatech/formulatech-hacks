import { useState, useEffect } from "react";

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

        <div className="h-[500px] w-8/10 p-3 bg-[#1C1B20] r-2 flex flex-col md:flex-row rounded-4xl border-black border-5 justify-evenly">
            <CountdownColumn label="Days" value={curTime.days} />
            <CountdownColumn label="Hours" value={curTime.hours} />
            <CountdownColumn label="Minutes" value={curTime.minutes} />
            <CountdownColumn label="Seconds" value={curTime.seconds} />
        </div>
        

    )

}

function CountdownColumn ({label, value} : {label : string, value : number}) {

    //take in raw value and break into individual digits
    const intValue = Math.floor(value); 
    const ones = intValue % 10;
    const tens = Math.floor((intValue % 100) / 10);
    const hundreds = Math.floor(intValue / 100);
    

    return (

        <div className="w-full md:w-23/100 h-1/4 md:h-full flex flex-row md:flex-col md:justify-evenly">
            <div className="h-full md:h-3/20 flex w-1/2 md:w-full bg-[#fefdf3] rounded-lg border-5 border-[#d1283e] justify-center items-center">
                <p className="font-bold font-title text-xl md:text-3xl">{label}</p>
            </div>
            <div className="relative flex h-full md:h-7/10 w-1/2 md:w-full bg-yellow-200 rounded-lg border-5 border-[#d1283e] text-[50px] md:text-[100px]">
                {//Conditional rendering of extra digit for days
                value >= 100 ? <Digit dig={hundreds}></Digit> : ""
                }
                <Digit dig={tens}></Digit>
                <Digit dig={ones}></Digit> 
            </div>
        </div>

    )

}


function Digit({ dig }: { dig: number }) {
    const [isFlippingTop, setIsFlippingTop] = useState(false);
    const [isFlippingBottom, setIsFlippingBottom] = useState(false);
    const [curNumber, setCurNumber] = useState(dig);
    const [nextNumber, setNextNumber] = useState(dig);

    useEffect(() => {
        if (dig === curNumber) return; // Only animate when digit actually changes

        setNextNumber(dig);
        setIsFlippingTop(true);

        const topTimer = setTimeout(() => {
            setIsFlippingTop(false);
            setIsFlippingBottom(true);
            setCurNumber(dig); // Move to the new digit
        }, 450);

        const bottomTimer = setTimeout(() => {
            setIsFlippingBottom(false);
        }, 900);

        return () => {
            clearTimeout(topTimer);
            clearTimeout(bottomTimer);
        };
    }, [dig]);

    return (
        <div className="relative flex-col w-1/2 border border-[#d1283e] perspective-[400px]">
            {/* Static top half */}
            <div className="w-full h-1/2 bg-[#fefdf3] relative text-center leading-[2.1] md:leading-[3.12]">
                {curNumber}
            </div>
            
            {/* Static bottom half */}
            <div className="w-full h-1/2 bg-[#fefdf3] relative text-center leading-[0] overflow-hidden">
                {curNumber}
            </div>
            
            {/* Flipping top half */}
            <div 
                className={`absolute overflow-hidden top-0 w-full h-1/2 bg-[#fefdf3] text-center leading-[2.1] md:leading-[3.13] origin-bottom ${
                    isFlippingTop ? 'transition-transform duration-450 ease-in' : ''
                }`}
                style={{
                    transform: isFlippingTop ? 'rotateX(-90deg)' : 'rotateX(0deg)',
                }}
            >
                {curNumber}
            </div>

            {/* Flipping bottom half */}
            <div 
                className={`absolute overflow-hidden bottom-0 w-full h-1/2 bg-[#fefdf3] text-center leading-[0] origin-top ${
                    isFlippingBottom ? 'transition-transform duration-450 ease-out' : ''
                }`}
                style={{
                    transform: isFlippingBottom ? 'rotateX(0deg)' : 'rotateX(90deg)',
                }}
            >
                {nextNumber}
            </div>
        </div>
    );
}
