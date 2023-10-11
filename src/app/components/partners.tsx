import Microsoft from "@/app/assets/img/microsoft.jpg";
import Amazon from "@/app/assets/img/amazon.jpeg";


export const Partners = () => {
    return (
        <div className="w-full h-full flex justify-between items-center">
            <div className="w-full h-full mt-2 flex flex-col sm:flex-row justify-between items-center">
                <div className="w-full h-full flex justify-center items-center rounded-md"><img className="w-80 h-60 rounded-md" src={Microsoft.src} alt="Logo microsoft" /></div>
                <div className="w-full h-full flex justify-center items-center rounded-md"><img className="w-80 h-60 rounded-md" src={Amazon.src} alt="Logo amazon" /></div>
                <div className="w-full h-full flex justify-center items-center rounded-md"><img className="w-80 h-60 rounded-md" src={Microsoft.src} alt="Logo microsoft" /></div>
                <div className="w-full h-full flex justify-center items-center rounded-md"><img className="w-80 h-60 rounded-md" src={Amazon.src} alt="Logo amazon" /></div>
            </div>
        </div>
    )
}