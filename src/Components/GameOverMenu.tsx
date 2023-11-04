import { transform } from "typescript"
import Home from "../Scripts/Home"
import StartGame from "../Scripts/StartGame"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'

export const GameOvermenu = () => {
    
    return (
        <div id="game-over-menu-container" className="absolute bg-black bg-opacity-70 w-[100%] h-[100%] z-[2]  hidden" >
        <a id="game-over-text" style={{top:"40px"}} className=" absolute left-1/2 transform -translate-x-1/2 top-[100px] text-[#B3C100] text-8xl   hidden">You're dead</a>
        <div id="game-over-button-container" style={{backgroundColor:"#B7B8B6", opacity:"0.1"}}  className=" absolute w-[315px] h-96 top-[200px]  rounded-3xl  left-1/2 transform -translate-x-1/2   hidden"  >
        </div>

        <div id="restart-button-container" className=" absolute left--1/2 top-[230px]  transform -translate-x-1/2 ">
            <button className="w-[120px] h-[120px]  bg-[#308d82] w-32 h-32 rounded-full " onMouseDown={() => { StartGame("restart",0)}}  ><FontAwesomeIcon icon={faArrowRotateRight} size="4x" /></button>
        </div>

        <div id="home-button-container" className=" absolute left--1/2 top-[426px]  transform -translate-x-1/2 hidden">
            <button className="w-[120px] h-[120px]  bg-[#308d82] w-32 h-32 rounded-full " onMouseDown={() => { Home()}}  >  <FontAwesomeIcon icon={faHouse} size="4x" /></button>
        </div>

        </div>

    )
}

