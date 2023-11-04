import Countdown from '../Engine/Countdown'
import Death from './Death'
import movingSquare from "../Engine/movingSquare"

let CurrentLevelNumber
let cubes
let movingCubes
let cubesArray
let highestCompletedLevel

function StartGame(levelNumber, amountOfTimeToCompleteLevel){
    document.getElementById("map-container")!.style.display = "block";
    document.getElementById("isPlaying")!.innerHTML = "true";
    highestCompletedLevel = Number(document.getElementById('highest-completed-level')!.innerHTML)
    const cube = document.getElementById('cube')!;
    
    
    if(levelNumber == "restart"){
        levelNumber = CurrentLevelNumber
        amountOfTimeToCompleteLevel = levelNumber*10 + 10
    }
    if(levelNumber == "previous"){
        levelNumber = CurrentLevelNumber -1
        amountOfTimeToCompleteLevel = levelNumber*10 + 10
        
    }
    if(levelNumber == "next"){
        levelNumber = CurrentLevelNumber +1
        amountOfTimeToCompleteLevel = levelNumber*10 + 10
    }

    if(levelNumber<=highestCompletedLevel) {

    Countdown(amountOfTimeToCompleteLevel,1000,"countdown",gameOverFunction,'was-level-finished','Time left: ')
    document.getElementById('was-level-finished')!.innerHTML = "false"
    document.getElementById('countdown')!.innerHTML = "Time left: " + amountOfTimeToCompleteLevel

    CurrentLevelNumber = levelNumber
    for(let i=0;i<=5;i++){
    cubes = document.querySelectorAll('#level'+i) as unknown as HTMLCollectionOf<HTMLElement>;
    
    movingCubes = document.querySelectorAll('#level'+i+'move') as unknown as HTMLCollectionOf<HTMLElement>;
    
    if(levelNumber as number == i){
        for(let j=0;j<cubes.length;j++){
      
            cubes[j].style.display = "block"
        }
    }
    else{
        for(let k=0;k<cubes.length;k++){
            cubes[k].style.display = "none"
        }
    }
    if(levelNumber as number == i){
        for(let j=0;j<movingCubes.length;j++){
            console.log(movingCubes);
            movingCubes[j].style.display = "block"
            movingSquare(movingCubes[j].id,20,2000)
        }
    }
    else{
        for(let k=0;k<movingCubes.length;k++){
            
            movingCubes[k].style.display = "none"
        }
    }
    }

    const levelContainer = document.getElementById('level-container')!;
    const gameOverContainer = document.getElementById('game-over-menu-container')!;
    const gameOverTutorialtextContainer = document.getElementById('game-over-tutorialtext-background')!;
    const levelCompleteContainer = document.getElementById('level-complete-container')!;
    
    const levelTitle = document.getElementById('level-title')!;
    const mainMenuContainer = document.getElementById('main-menu-container')!;

    const showTutorialButton = document.getElementById('show-tutorial-button')!
    const tutorialTextContainer = document.getElementById('tutorial-text-container')!;

    showTutorialButton.style.display = 'block';
    mainMenuContainer.style.display = "none"
    levelContainer.style.display = "none"
    gameOverContainer.style.display = "none"
    levelCompleteContainer.style.display = "none"
    tutorialTextContainer.style.display = "block"
    cube.style.left = "750px"
    cube.style.top = "450px"
    levelTitle.innerHTML = "Level " + levelNumber

   

}
else{
    console.log("level is not completed yet")
}

    document.getElementById('game-over-text')!.style.display = "none";
    document.getElementById('restart-button-container')!.style.display = "none";
    document.getElementById('home-button-container')!.style.display = "none";
    document.getElementById('game-over-button-container')!.style.display = "none";

    document.getElementById('level-complete-text')!.style.display = "none";
    document.getElementById('level-complete-button-container')!.style.display = "none";
    document.getElementById('previous-level-button')!.style.display = "none";
    document.getElementById('next-level-button')!.style.display = "none";
    document.getElementById('restart-button-container-level-completed')!.style.display = "none";
    document.getElementById('home-button-container-level-completed')!.style.display = "none";

}

function gameOverFunction(){
    Death()
}


export default StartGame

