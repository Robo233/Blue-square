import React, { useState } from "react";
import "./App.css";
import { LevelCompleteMenu } from "./Components/LevelCompleteMenu";
import { Map } from "./Components/Map";
import { GameOvermenu } from "./Components/GameOverMenu";
import { MainMenu } from "./Components/MainMenu";
import { Levels } from "./Components/Levels";
import Move from "./Engine/Move";
import Death from "./Scripts/DeathCausedByColliding";
import LevelComplete from "./Scripts/LevelComplete";

const App = () => {

return (
	<>

	<Map />
	<LevelCompleteMenu />
	<GameOvermenu />
	<MainMenu />
	<Levels />
	
	</>
);
};

var travelDistance = 10;
var distanceFromTop = 0;
var distanceFromBottom = 450;
var distanceFromLeft = 0;
var distanceFromRight = 750;




function MoveAndDeath(direction){
	let cube = document.getElementById('cube')!;
	Move(cube,direction,travelDistance,distanceFromTop,distanceFromBottom,distanceFromLeft,distanceFromRight,"isPlaying");
	Death(cube);
	LevelComplete();
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
	let cube = document.getElementById('cube')!;

    if (e.keyCode == '38' || e.keyCode == '87') {
		MoveAndDeath("top")
    }
    else if (e.keyCode == '40'|| e.keyCode == '83') {
        MoveAndDeath("down")
    }
    else if (e.keyCode == '37'|| e.keyCode == '65') {
		MoveAndDeath("left")
    }
    else if (e.keyCode == '39'|| e.keyCode == '68') {
		MoveAndDeath("right")
    }

}


export default App;
