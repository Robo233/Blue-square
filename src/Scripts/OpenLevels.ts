function OpenLevels(){
    const levelContainer = document.getElementById('level-container')!;
    const mainMenuContainer = document.getElementById('main-menu-container')!;
    levelContainer.style.display = "block";
    mainMenuContainer.style.display = "none";
   
}

export default OpenLevels;