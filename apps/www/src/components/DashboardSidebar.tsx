import "bootstrap-icons/font/bootstrap-icons.css";

const Option = ({ icon, text } : { icon : string, text : string }) => {
    return (
        <a href={`/${text.toLowerCase()}`} className="col-span-2 grid grid-cols-subgrid grid-rows-subgrid items-center">
            <i className={`bi bi-${icon} col-start-1 justify-self-center`} />
            <h1 className="col-start-2">{text}</h1>
        </a>
    )
}

export default function Component() {
    return (
        <div className="w-1/5 h-full shrink-0 flex flex-col place-items-center overflow-auto border-r-1 border-foreground bg-background">
            <div className="grid pl-4 pt-10 w-full items-center" style={{ gridTemplateColumns : "1fr 2fr"}}>
                <div className="aspect-square w-full bg-yellow-300 justify-self-center"></div>
                <h1 className="pl-2 text-2xl row-start-1 col-start-2">FThacks</h1>
            </div>
            <nav className="grid w-full h-11/20 pt-7 pb-5 shrink-0 text-lg" style={{ gridTemplateColumns : "1fr 2fr"}}>
                <Option icon="grid-fill" text="Dashboard" />
                <Option icon="person-circle" text="Profile" />
                <Option icon="file-text" text="Applications" />
                <Option icon="calendar3" text="Schedule" />
                <Option icon="qr-code-scan" text="QR Code" />
            </nav>
            <div className="grid relative grow w-full shrink-0 items-center py-6 pl-4" style={{ gridTemplateColumns : "1fr 2fr"}}>
                <div className="absolute top-0 right-1/10 w-8/10 h-px bg-foreground"></div>
                <div className="aspect-square justify-self-center rounded-full w-full bg-yellow-300"></div>
                <div className="h-full flex flex-col justify-center pl-3 text-lg">
                    <h1 className="justify-self-center">Name here</h1>
                    <div className="justify-self-center flex">
                        <i className="bi bi-box-arrow-right pr-2"></i>
                        <h2>Logout</h2>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
