import isOverlapping from "../Engine/isOverlapping"
import topToBottom from "../Engine/Animations/topToBottom"
import leftToRight from "../Engine/Animations/leftToRight"
import fadeIn from "../Engine/Animations/fadeIn"

function Death(){
    
    var isPlaying = ((document.getElementById("isPlaying")!.innerHTML) === "true")
    if(isPlaying){
  
    const gameOverBackground = document.getElementById('game-over-menu-container')!;
    const showTutorialButton = document.getElementById('show-tutorial-button')!;
    const tutorialTextContainer = document.getElementById('tutorial-text-container')!;

        document.getElementById("isPlaying")!.innerHTML = "false";
        topToBottom(-100,40,1,'game-over-text',2)
      
        leftToRight(-50,50,1,'restart-button-container',2)
        leftToRight(-50,50,1,'home-button-container',1)
        fadeIn(document.getElementById('game-over-button-container')!)
        
        document.getElementById('was-level-finished')!.innerHTML = "true"
        gameOverBackground.style.display = "block"
        showTutorialButton.style.display = "none"
        tutorialTextContainer.style.display = "none"
}
    }



export default Death;