import Pesquisa from "@/app/assets/icos/procurar.svg";

export const NavBar = () => {
    return (
        <div className="w-full h-full flex flex-row justify-center items-center mb-4">

            <div className="w-full h-full flex flex-col sm:flex-row justify-between items-center">
                
                <div className="w-full h-full flex flex-row justify-center items-center">
                    <h1 className="w-full h-full p-4 flex justify-center items-center">E-Commerce Feelps</h1>
                </div>

                <div className="w-full h-full flex flex-row justify-center items-center">
                    <div className="w-full flex flex-row justify-center items-center rounded-md">
                        <input type="search" name="" id="" placeholder="Pesquisa" className="w-60 text-center h-8 rounded-s-md" />
                        <div className="w-8 h-8 bg-blue-700 rounded-e-md">
                            <img src={Pesquisa.src} alt="" className="p-1"/>
                        </div> 
                    </div>
                </div>

                <div className="w-full h-full hidden sm:flex flex-row justify-between items-center p-2">
                    <ul className="w-full flex justify-center mr-2 p-1 hover:rounded-md hover:cursor-pointer hover:bg-blue-700"><li>Home</li></ul>
                    <ul className="w-full flex justify-center mr-2 p-1 hover:rounded-md hover:cursor-pointer hover:bg-blue-700"><li>Main</li></ul>
                    <ul className="w-full flex justify-center mr-2 p-1 hover:rounded-md hover:cursor-pointer hover:bg-blue-700"><li>About</li></ul>
                </div>
            </div>
        </div>
    )
}