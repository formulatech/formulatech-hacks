import stands from "../assets/Stands.png";

export default function Teams() {
    return (
        <div className="mt-[20dvh] pt-20 w-[80%] mx-auto flex flex-col gap-[30px]" id="teams">
            <h1 className="font-black p-5 -ml-2.5 text-5xl capitalize text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-xl font-title">
                THE TEAM
            </h1>

            {/* stands container */}
            <div className="relative w-full flex flex-col items-center">

                {/* Stands with member images container */}
                <div className="relative w-full flex justify-center">
                    <div className="relative w-full max-w-5xl">
                        <img
                            src={stands.src}
                            alt="Team Stands"
                            className="w-full h-auto object-contain"
                        />
                        
                            
                    </div>
                </div>

            </div>
        </div>
    );
}

