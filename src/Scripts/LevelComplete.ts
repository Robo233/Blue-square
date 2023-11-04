import isOverlapping from "../Engine/isOverlapping";
import LastCharacterOfString from '../Engine/LastCharacterOfString'
import topToBottom from "../Engine/Animations/topToBottom"
import leftToRight from "../Engine/Animations/leftToRight"
import fadeIn from "../Engine/Animations/fadeIn"

function LevelComplete(){

    const cube = document.getElementById('cube')!;
    const destination = document.getElementById('destination')!;
    const levelCompleteContainer = document.getElementById('level-complete-container')!;
    const highestCompletedLevel = document.getElementById('highest-completed-level')!
    const levelTitle = document.getElementById('level-title')!;

    let levelNumber
  
    if(isOverlapping(cube,destination)){

        topToBottom(-100,40,1,'level-complete-text',2)
        
        
        leftToRight(-50,50,1,'restart-button-container-level-completed',2)
        leftToRight(-50,50,1,'home-button-container-level-completed',1)
        fadeIn(document.getElementById('level-complete-button-container')!)

        levelNumber = Number(LastCharacterOfString(levelTitle.innerHTML) )
        const prevoiusLevelButton = document.getElementById('previous-level-button')!;
        const nextLevelButton = document.getElementById('next-level-button')!;
        const showTutorialButton = document.getElementById('show-tutorial-button')!;
        const tutorialTextContainer = document.getElementById('tutorial-text-container')!;

        

        if(levelNumber == "1"){
            prevoiusLevelButton.style.display = "none"
           
        }else{
            prevoiusLevelButton.style.display = "block"
            topToBottom(-1000,200,1,'previous-level-button',8)
        }
    
        if(levelNumber == "5"){
            nextLevelButton.style.display = "none"
           
        }else{
            nextLevelButton.style.display = "block"
            topToBottom(-1000,200,1,'next-level-button',8)
        }
        

        levelCompleteContainer.style.display = "block"
        cube.style.top = '450px';
        cube.style.left = '750px';
        if(Number(LastCharacterOfString(levelTitle.innerHTML) )>=Number(LastCharacterOfString(highestCompletedLevel.innerHTML))){
        highestCompletedLevel.innerHTML = Number(LastCharacterOfString(levelTitle.innerHTML))+1 as unknown as string
        }
        let levelNumberId = 'level-button-'+(Number(Number(LastCharacterOfString(levelTitle.innerHTML) ))+1)
        document.getElementById(levelNumberId)!.style.backgroundColor = "#44ccbb"
        document.getElementById("was-level-finished")!.innerHTML = "true"
        document.getElementById("isPlaying")!.innerHTML = "false";
        showTutorialButton.style.display = "none"
        tutorialTextContainer.style.display = "none"
    }
}



export default LevelComplete;