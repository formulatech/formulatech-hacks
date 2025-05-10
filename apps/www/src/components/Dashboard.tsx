import DashboardSidebar from "./DashboardSidebar.tsx"

const Greeting = ({ name } : { name : string }) => {

    return (
        <h1 className="font-primary font-bold text-4xl">Hello {name}</h1>
    )

};

const TextBox = () => {
    
    return (
        <div className="border border-foreground rounded-xl h-[250px] shadow-2xl"></div>
    )

}

export default function Component() {
    return (
        <div className="flex h-screen w-screen">
            <DashboardSidebar />
            <main className="bg-background flex flex-col overflow-auto gap-6 grow pt-20 pb-5 px-10">
                {/*Top half*/}
                <div className="flex h-[300px] w-full shrink-0">
                    {/*Top left box*/}
                    <div className="flex flex-col justify-between w-55/100">
                        <Greeting name="(name prop here)" />
                        <h2 className="font-primary">Text here</h2>
                        <TextBox></TextBox>
                    </div>
                    <div className="grow"></div>
                    {/*Helmet*/}
                    <div className="bg-yellow-200 h-1/1 w-3/10"></div>
                    <div className="grow"></div>
                </div>
                {/*Bottom half*/}
                <div className="grid grid-cols-2 gap-x-6 shrink-0 w-full">
                    {/*Bottom left box*/}
                    <TextBox></TextBox>
                    {/*Bottom right box*/}
                    <TextBox></TextBox>
                </div>
            </main>
        </div>
    )
}
