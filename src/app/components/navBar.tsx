export const NavBar = () => {
    return (
        <div className="w-full h-full flex flex-row justify-center items-center">

            <div className="w-full h-14 flex flex-row justify-between items-center">
                
                <div className="w-full h-full flex flex-row justify-center items-center">
                    <h1>E-Commerce Feelps</h1>
                </div>

                <div className="w-full h-full flex flex-row justify-center items-center">
                    <div className="w-full flex flex-row justify-center items-center rounded-md">
                        <div className="w-6 h-6 bg-zinc-600 rounded-s-md"></div>
                        <input type="search" name="" id="" placeholder="Pesquisa" className="w-full rounded-e-md" />
                    </div>
                </div>

                <div className="w-full h-full flex flex-row justify-between items-center p-2">
                    <ul className="mr-2 p-1 hover:rounded-md hover:cursor-pointer hover:bg-zinc-600"><li>Home</li></ul>
                    <ul className="mr-2 p-1 hover:rounded-md hover:cursor-pointer hover:bg-zinc-600"><li>Home</li></ul>
                    <ul className="mr-2 p-1 hover:rounded-md hover:cursor-pointer hover:bg-zinc-600"><li>Home</li></ul>
                    <ul className="mr-2 p-1 hover:rounded-md hover:cursor-pointer hover:bg-zinc-600"><li>Home</li></ul>
                </div>
            </div>
        </div>
    )
}