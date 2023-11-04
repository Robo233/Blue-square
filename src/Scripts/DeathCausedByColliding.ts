import isOverlapping from "../Engine/isOverlapping"
import topToBottom from "../Engine/Animations/topToBottom"
import leftToRight from "../Engine/Animations/leftToRight"
import fadeIn from "../Engine/Animations/fadeIn"
import Death from './Death'

function DeathCausedByColliding(testCube){

    var isPlaying = ((document.getElementById("isPlaying")!.innerHTML) === "true")
    if(isPlaying){
    const cubes = document.querySelectorAll('[id=level1],[id=level2],[id=level3],[id=level4],[id=level5],[id=level1move],[id=level2move],[id=level3move],[id=level4move],[id=level5move]') as unknown as HTMLCollectionOf<HTMLElement>;
    const cube = document.getElementById('cube')!;
    const gameOverBackground = document.getElementById('game-over-menu-container')!;
    const restartButton = document.getElementById('restart-button-container')!;

    for(let i = 0; i < cubes.length; i++){

    if(isOverlapping(cube,cubes[i])){
      
      
       Death()
    }
}
    }

}

export default DeathCausedByColliding;