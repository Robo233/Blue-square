import OpenLevels from "../Scripts/OpenLevels"

export const MainMenu = () => {
    
    return (
        <div id="main-menu-container" className="bg-[#B3C100] w-full h-full absolute ">

        <a id="main-menu-title" className=" relative top-[100px] text-[#308d82] text-8xl screen-550:text-7xl text-center font-extrabold flex justify-center items-center ">Blue square</a>

        <button id="restart-button" className="absolute top-[400px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#308d82] w-64 h-64 rounded-full" onMouseDown={() => { OpenLevels()}}  > 
        <div id="start-button-image-container" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 "> 
        <div  id="start-button-image" >
        </div>
        </div>
        </button>
        
        </div>

        
    )
    
}

