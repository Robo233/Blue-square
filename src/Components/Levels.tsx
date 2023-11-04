import StartGame from "../Scripts/StartGame"

export const Levels = () => {
    
    return (
        <div id="level-container" className="bg-[#B3C100] w-full h-full absolute hidden">
            <a id="game-over-text" className=" relative top-[100px] text-[#308d82] text-8xl font-extrabold flex justify-center items-center ">Levels</a>
            <div id="button-container" className="w-[500px] screen-510:w-[320px] absolute left-1/2 transform -translate-x-1/2">
                <button id="level-button-1" className="w-[120px] h-[120px] absolute top-[200px] left-[0px] screen-510:left-[10px] rounded-2xl bg-[#44ccbb] " onMouseDown={() => { StartGame(1,20)}}><a className="text-[#002e12]" >1</a></button>
                <button id="level-button-2" className="w-[120px] h-[120px] absolute top-[200px] left-1/2 screen-510:left-[unset] screen-510:right-[10px] transform -translate-x-1/2 screen-510:-translate-x-0 rounded-2xl bg-[#308d82] " onMouseDown={() => { StartGame(2,30)}}><a className="text-[#002e12]" >2</a></button>
                <button id="level-button-3" className="w-[120px] h-[120px] absolute top-[200px] right-[0px] screen-510:right-[unset] screen-510:top-[350px] screen-510:left-[10px] rounded-2xl bg-[#308d82] " onMouseDown={() => { StartGame(3,40)}}><a className="text-[#002e12]" >3</a></button>
                <button id="level-button-4" className="w-[120px] h-[120px] absolute top-[370px] right-[66px] screen-510:right-[10px] screen-510:top-[350px] rounded-2xl bg-[#308d82] " onMouseDown={() => { StartGame(4,50)}}><a className="text-[#002e12]">4</a></button>    
                <button id="level-button-5" className="w-[120px] h-[120px] absolute top-[370px] left-[66px] screen-510:top-[500px] screen-510:left-1/2 screen-510:-translate-x-1/2 rounded-2xl bg-[#308d82]" onMouseDown={() => { StartGame(5,60)}}><a className="text-[#002e12]" >5</a></button> 
            </div>
        </div>
    )
}