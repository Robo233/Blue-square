import StartGame from "../Scripts/StartGame"
import Home from "../Scripts/Home"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArrowRotateRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'


export const LevelCompleteMenu = () => {
    
    return (
        <div id="level-complete-container" className="bg-black bg-opacity-70 w-full h-full absolute hidden" >
        <a id="level-complete-text" style={{top:"40px"}} className=" absolute left-1/2 -translate-x-1/2 text-[#B3C100]  text-8xl  hidden">Level completed!</a>
        <div id="level-complete-button-container" style={{backgroundColor:"#B7B8B6", opacity:"0.1"}}  className=" absolute w-600 h-96 top-[200px]  rounded-3xl  left-1/2 transform -translate-x-1/2  hidden">
    
        <button id="previous-level-button" className="absolute left-[50px] bottom-[50px] bg-[#308d82] w-36 h-28 rounded-full hidden" onMouseDown={() => { StartGame("previous",0)}}  ><FontAwesomeIcon icon={faArrowLeft} size="4x" /></button>
        <button id="next-level-button" className="absolute right-[50px] bottom-[50px] bg-[#308d82] w-36 h-28 rounded-full hidden" onMouseDown={() => { StartGame("next",0)}}  ><FontAwesomeIcon icon={faArrowRight} size="4x" /></button>
    
       </div>
        <div id="restart-button-container-level-completed" className=" absolute left-1/2 top-[230px]  transform -translate-x-1/2 hidden">
            <button className="w-[120px] h-[120px]  bg-[#308d82] w-32 h-32 rounded-full " onMouseDown={() => { StartGame("restart",0)}}  ><FontAwesomeIcon icon={faArrowRotateRight} size="4x" /></button> 
        </div>

        <div id="home-button-container-level-completed" className=" absolute left-1/2 top-[426px]  transform -translate-x-1/2 hidden">
            <button className="w-[120px] h-[120px]  bg-[#308d82] w-32 h-32 rounded-full text-8xl" onMouseDown={() => { Home()}}  ><FontAwesomeIcon icon={faHouse} size="xs" /></button>
        </div>

        
        </div>
    )
}