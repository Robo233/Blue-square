import {ColliderSquare} from "./ColliderSquare"


export const Map = () => {
    
    return (
        <div className="hidden" id="map-container">
        
        <a id="highest-completed-level" className="hidden">1</a>
        <a id="was-level-finished" className="hidden" >false</a>
        <a id="isPlaying" className="hidden" >false</a>
       
        <a id="countdown" className="fixed top-[10px] text-[#308d82] right-[20px] text-7xl screen-510:text-6xl z-[1]"></a>
        
        <a id="level-title" className="fixed top-[10px] text-[#308d82] left-[20px] text-7xl screen-510:text-6xl z-[1]" >Level 1</a>

        <div id="map-border" className="  w-[900px] h-[600px] absolute top-[100px] left-1/2 transform -translate-x-1/2 bg-[#B7B8B6] screen-900:left-0 screen-900:-translate-x-0"  ></div>
	
        <div className="absolute top-[150px] text-7xl left-1/2 transform -translate-x-1/2 w-800  h-500   bg-[#5f5f5e] screen-900:left-[50px] screen-900:-translate-x-0">
       
        <table id="destination" style={{width:'80px', height:'80px', position:'absolute', top:'0'}} >
        <tbody>
	<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
	<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
	<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
	<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        </tbody>
        </table>
    
        <div className="absolute bg-sky-600" id="cube" style={{top: '450px', left:'750px', width:'50px', height:"50px"}} ></div>
        


        <ColliderSquare idNumber="level1" top="0px" left="450px" width="100px" height="400px"/>
        <ColliderSquare idNumber="level1" top="20px" left="600px" width="200px" height="240px"/>
        <ColliderSquare idNumber="level1" top="0px" left="400px" width="100px" height="280px"/>
        <ColliderSquare idNumber="level1" top="200px" left="0px" width="300px" height="200px"/>

        <ColliderSquare idNumber="level2" top="50px" left="400px" width="100px" height="200px"/>
        <ColliderSquare idNumber="level2" top="120px" left="600px" width="200px" height="240px"/>
        <ColliderSquare idNumber="level2" top="220px" left="0px" width="150px" height="280px"/>
        <ColliderSquare idNumber="level2" top="200px" left="100px" width="250px" height="200px"/>
        <ColliderSquare idNumber="level2" top="0px" left="100px" width="350px" height="80px"/>
        <ColliderSquare idNumber="level2" top="420px" left="400px" width="250px" height="80px" />
        <div id="level2move" className="hidden" style={{position: "absolute", top: "120px", left: "200px", width:"150px", height:"30px", backgroundColor:"#002e12"}}>

        </div>
      

        <ColliderSquare idNumber="level3" top="50px" left="400px" width="100px" height="200px"/>
        <ColliderSquare idNumber="level3" top="200px" left="600px" width="200px" height="240px"/>
        <ColliderSquare idNumber="level3" top="220px" left="0px" width="150px" height="280px"/>
        <ColliderSquare idNumber="level3" top="200px" left="100px" width="250px" height="200px"/>
        <ColliderSquare idNumber="level3" top="50px" left="100px" width="100px" height="150px"/>
        <ColliderSquare idNumber="level3" top="50px" left="120px" width="300px" height="50px"/>
        <ColliderSquare idNumber="level3" top="300px" left="420px" width="200px" height="50px"/>
        <ColliderSquare idNumber="level3" top="400px" left="420px" width="40px" height="100px"/>
        <ColliderSquare idNumber="level3" top="100px" left="500px" width="240px" height="50px"/>
        <ColliderSquare idNumber="level3" top="0px" left="700px" width="40px" height="50px"/>
        <ColliderSquare idNumber="level3" top="50px" left="570px" width="80px" height="50px"/>

     

        <ColliderSquare idNumber="level4" top="80px" left="0px" width="30px" height="80px"/> 
        <ColliderSquare idNumber="level4" top="220px" left="0px" width="50px" height="100px"/> 
        <ColliderSquare idNumber="level4" top="320px" left="0px" width="90px" height="70px"/> 
        <ColliderSquare idNumber="level4" top="320px" left="90px" width="40px" height="180px"/> 
        <ColliderSquare idNumber="level4" top="300px" left="130px" width="100px" height="100px"/> 
        <ColliderSquare idNumber="level4" top="220px" left="190px" width="40px" height="80px"/> 
        <ColliderSquare idNumber="level4" top="110px" left="100px" width="40px" height="80px"/> 
        <ColliderSquare idNumber="level4" top="0px" left="80px" width="100px" height="110px"/> 
        <ColliderSquare idNumber="level4" top="160px" left="230px" width="100px" height="100px"/> 
        <ColliderSquare idNumber="level4" top="370px" left="300px" width="70px" height="70px"/> 
        <ColliderSquare idNumber="level4" top="300px" left="380px" width="110px" height="50px"/> 
        <ColliderSquare idNumber="level4" top="140px" left="390px" width="80px" height="60px"/> 
        <ColliderSquare idNumber="level4" top="0px" left="380px" width="100px" height="80px"/> 
        <ColliderSquare idNumber="level4" top="130px" left="330px" width="200px" height="30px"/> 
        <ColliderSquare idNumber="level4" top="60px" left="530px" width="200px" height="100px"/> 
        <ColliderSquare idNumber="level4" top="150px" left="680px" width="60px" height="60px"/> 
        <ColliderSquare idNumber="level4" top="260px" left="490px" width="10px" height="100px"/> 
        <ColliderSquare idNumber="level4" top="260px" left="490px" width="180px" height="10px"/> 
        <ColliderSquare idNumber="level4" top="400px" left="550px" width="60px" height="100px"/> 
        <ColliderSquare idNumber="level4" top="260px" left="660px" width="10px" height="100px"/> 
        <ColliderSquare idNumber="level4" top="350px" left="670px" width="130px" height="10px"/> 

        <ColliderSquare idNumber="level4" top="210px" left="720px" width="30px" height="60px"/> 
        <ColliderSquare idNumber="level4" top="70px" left="790px" width="10px" height="90px"/> 
        <ColliderSquare idNumber="level4" top="60px" left="250px" width="80px" height="100px"/> 
        <ColliderSquare idNumber="level4" top="210px" left="560px" width="60px" height="60px"/> 

        <ColliderSquare idNumber="level5" top="0px" left="80px" width="30px" height="30px"/> 
        <ColliderSquare idNumber="level5" top="80px" left="0px" width="80px" height="10px"/> 
        <ColliderSquare idNumber="level5" top="140px" left="50px" width="70px" height="50px"/> 
        <ColliderSquare idNumber="level5" top="240px" left="0px" width="70px" height="60px"/> 
        <ColliderSquare idNumber="level5" top="360px" left="200px" width="30px" height="110px"/> 
        <ColliderSquare idNumber="level5" top="250px" left="120px" width="170px" height="60px"/> 
        <ColliderSquare idNumber="level5" top="0px" left="130px" width="30px" height="180px"/> 
        <ColliderSquare idNumber="level5" top="180px" left="130px" width="120px" height="30px"/> 
        <ColliderSquare idNumber="level5" top="0px" left="220px" width="70px" height="100px"/> 
        <ColliderSquare idNumber="level5" top="160px" left="310px" width="50px" height="60px"/> 
        <ColliderSquare idNumber="level5" top="310px" left="290px" width="70px" height="110px"/> 
        <ColliderSquare idNumber="level5" top="480px" left="300px" width="70px" height="20px"/> 
        <ColliderSquare idNumber="level5" top="440px" left="410px" width="60px" height="60px"/> 
        <ColliderSquare idNumber="level5" top="310px" left="330px" width="60px" height="20px"/> 
        <ColliderSquare idNumber="level5" top="250px" left="390px" width="30px" height="60px"/> 
        <ColliderSquare idNumber="level5" top="170px" left="420px" width="110px" height="80px"/> 
        <ColliderSquare idNumber="level5" top="0px" left="350px" width="70px" height="100px"/> 
        <ColliderSquare idNumber="level5" top="0px" left="420px" width="50px" height="60px"/> 
        <ColliderSquare idNumber="level5" top="50px" left="470px" width="60px" height="60px"/> 
        <ColliderSquare idNumber="level5" top="250px" left="450px" width="20px" height="140px"/> 
        <ColliderSquare idNumber="level5" top="380px" left="520px" width="110px" height="70px"/> 
        <ColliderSquare idNumber="level5" top="170px" left="530px" width="50px" height="60px"/> 
        <ColliderSquare idNumber="level5" top="50px" left="580px" width="60px" height="150px"/> 
        <ColliderSquare idNumber="level5" top="200px" left="610px" width="30px" height="10px"/> 
        <ColliderSquare idNumber="level5" top="390px" left="740px" width="10px" height="90px"/> 
        <ColliderSquare idNumber="level5" top="390px" left="680px" width="60px" height="10px"/> 
        <ColliderSquare idNumber="level5" top="270px" left="680px" width="10px" height="120px"/> 
        <ColliderSquare idNumber="level5" top="260px" left="680px" width="50px" height="10px"/> 
        <ColliderSquare idNumber="level5" top="150px" left="700px" width="30px" height="110px"/> 
        <ColliderSquare idNumber="level5" top="50px" left="690px" width="60px" height="100px"/> 
        <ColliderSquare idNumber="level5" top="320px" left="740px" width="60px" height="20px"/> 
        <ColliderSquare idNumber="level5" top="250px" left="780px" width="20px" height="70px"/> 
        <ColliderSquare idNumber="level5" top="380px" left="460px" width="60px" height="10px"/> 
        <ColliderSquare idNumber="level5" top="350px" left="50px" width="90px" height="100px"/> 
       

        </div>


        <button id="show-tutorial-button" onMouseDown={() => { showTutorial()}} className="absolute top-[750px] left-1/2 transform -translate-x-1/2 w-[180px] h-[100px] rounded-2xl bg-[#308d82] hover:bg-[#1c504a] hidden" ><a className="text-[25px]" >Show tutorial</a></button>
        <div id="tutorial-text-container" className="absolute top-[900px] left-1/2 transform -translate-x-1/2  text-[30px] hidden ">
           <div  className=" max-w-[800px]"><a id="tutorial-text1" style={{color: "transparent"}} className="max-w-[800px] " >•Use w, a, s, d to move with the blue square.</a></div>
           
            <div  className=" max-w-[800px]"><a id="tutorial-text2" style={{color: "transparent"}} className="max-w-[800px]" >•If you collide with a green square, or you can't reach the destination before the time runs out, you die.</a></div>
        </div>
        
        </div>

      
    )

    

    function showTutorial(){
        const tutorialText1 = document.getElementById('tutorial-text1')!
        const tutorialText2 = document.getElementById('tutorial-text2')!
        
        if(tutorialText1.style.color === 'transparent'){
            tutorialText1.style.color = 'black'
            tutorialText2.style.color = 'black'
        }else{
            tutorialText1.style.color = 'transparent'
            tutorialText2.style.color = 'transparent'
        }

    }
}


