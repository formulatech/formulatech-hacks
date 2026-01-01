import { useState, useEffect } from "react";

interface TimeLeft {
    days : number;
    hours : number;
    minutes : number;
    seconds : number;
}

export default function Countdown () {

    const hackathonDay = new Date(2026, 3, 21, 0, 0, 0); // March 21st, 2026 at midnight
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
            setCurTime(calculateTimeLeft());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };

    }, []);

    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex">
                <div className="hidden md:block font-title font-bold text-4xl mb-8 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">/</div>
                <div className="font-title font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-8 mx-8 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">COUNTDOWN TO HACKATHON</div>
                <div className="hidden md:block font-title font-bold text-4xl mb-8 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">/</div>
            </div>
            <div className="hidden h-[250px] lg:h-[370px] w-8/10 p-3 bg-[#1C1B20] r-2 md:flex md:flex-row rounded-4xl border-black border-5 gap-0 justify-center">
                <CountdownColumn label="Days" value={curTime.days} />
                <CountdownColumn label="Hours" value={curTime.hours} />
                <CountdownColumn label="Minutes" value={curTime.minutes} />
                <CountdownColumn label="Seconds" value={curTime.seconds} />
            </div>
            <div className="md:hidden h-[300px] flex flex-wrap w-8/10 bg-black rounded-2xl">
                <div className="h-1/2 w-full flex justify-evenly items-center">
                    <CountdownColumn label="Days" value={curTime.days} />
                    <CountdownColumn label="Hours" value={curTime.hours} />
                </div>
                <div className="h-1/2 w-full flex justify-evenly items-center">
                    <CountdownColumn label="Minutes" value={curTime.minutes} />
                    <CountdownColumn label="Seconds" value={curTime.seconds} />
                </div>
            </div>
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

        <div className="w-1/3 md:w-24/100 h-8/10 md:h-full flex flex-col justify-evenly">
            <div className="h-1/5 flex w-full bg-[#fefdf3] rounded-lg border-2 md:border-4 lg:border-5 border-[#d1283e] justify-center items-center">
                <p className="font-bold font-title text-sm md:text-xl lg:text-3xl">{label}</p>
            </div>
            <div className="relative flex h-7/10 w-full bg-yellow-200 rounded-lg border-2 md:border-4 lg:border-5 border-[#d1283e] text-[30px] md:text-[55px] lg:text-[100px]">
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
        <div className="relative flex-col w-1/2 border border-[#d1283e] perspective-[400px] font-title">
            {/* Static top half */}
            <div className="w-full h-1/2 bg-[#fefdf3] relative text-center leading-[2.64] md:leading-[2.52] lg:leading-[2.24]">
                {curNumber}
            </div>
            
            {/* Static bottom half */}
            <div className="w-full h-1/2 bg-[#fefdf3] relative text-center leading-[0] overflow-hidden">
                {curNumber}
            </div>
            
            {/* Flipping top half */}
            <div 
                className={`absolute overflow-hidden top-0 w-full h-1/2 bg-[#fefdf3] text-center leading-[2.64] md:leading-[2.52] lg:leading-[2.24] origin-bottom ${
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
