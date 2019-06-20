function introModal(){//THIS MODAL IS CALLED ON EVERY REFRESH OF THE GAME//
  const modal = document.getElementById("difficulty-modal")//GRAB THE INTRO MODAL DIV//
  const span = document.getElementById("closeIntroModal")//GRAB THE 'X' SPAN TO CLOSE THE MODAL//

  window.onload = function(){
    modal.style.display = "block"
  } //ON LOAD, CHANGE THE INTRO MODAL'S DISPLAY TO BLOCK//

  span.onclick = function(){
    modal.style.display = "none"
  }//ON A CLICK OF THE SPAN, CHANGE THE INTRO MODAL'S DISPLAY TO OFF//

  window.onclick = function(e){
    if(e.target == modal){
      modal.style.display = "none"
    }//ON A CLICK ANYWHERE IN THE WINDOW, CHANGE THE INTRO MODAL'S DISPLAY TO OFF//
  }

}// END OF INTRO MODAL FUNCTION//

function levelUpModal(){//THIS MODAL IS CALLED WHEN THE ASTRONAUT MOVES INTO THE SPACESHIP DIV (PER INDEX.JS) THE LEVEL IS INCREMENTED ***BEFORE*** THE WINMODAL FUNCTION IS CALLED//
  const movesRemaining = document.querySelector("#b2") //GRAB THE DIV THAT HOLDS THE PLAYED MOVES//
  const winModal = document.getElementById("win-modal")//GRAB THE WIN MODAL//
  const winBtn = winModal.querySelector("#win-btn")//GRAB THE WIN MODAL BTN//

  winModal.style.display = "block"//UPON CALLING THIS FUNCTION, CHANGE THE WIN MODAL'S DISPLAY TO BLOCK//

  return winModal.addEventListener('click', e =>{//IF THEY CLICK THE WIN BTN//
      // console.log('click');
      // console.log('level', level);
      newMap = mapGrid[level].layout//DEFINE THE NEW MAP VARIABLE TO THE INCREMENTED LEVEL//
      tileId = 0 //RESET THE TILE ID SO THAT THE DIVS ARE CREATED STARTING WITH ID#1//
      // console.log(newMap);
      // console.log(tileId);
      gameBoard.innerHTML = ""//RESET THE INNER HTML OF THE GRID TO EMPTY//
      // console.log("reseting map HTML here");
      foreachLoopTrial(newMap) //RENDER THE NEW MAP PER THE LOOP FUNCTION//
      // console.log('map rendered');
      currentAstroPosition = parseInt(document.getElementById("astronaut").parentElement.id)
      movesRemaining.innerHTML = `<h2 class="title">MOVES PLAYED</h2>`//RESET THE MOVES PLAYED CONTAINER TO EMPTY//
      // console.log('about to close modal');
      winModal.style.display = "none" //CLOSE THE WIN MODAL//
      // console.log('closed the modal');
      // console.log('astro', currentAstroPosition);
      return

  })//CRAZY EFFING BUG RESOLVED HURRAY HURRAY HURRAY //

}//end of win modal

function loseModal(){//THIS IS THE FUNCTION WHEN
  const movesRemaining = document.querySelector("#b2")
  const loseModal = document.getElementById("lose-modal")
  const loseBtn = document.getElementById('try-again-btn')

  loseModal.style.display = "block"
  loseModal.addEventListener('click', e =>{
    // console.log('click');
    // console.log(level);
    retryMap = mapGrid[level].layout
    tileId = 0
    gameBoard.innerHTML = ""
    // console.log("reseting map HTML here");
    foreachLoopTrial(retryMap)
    // console.log('map rendered');
    movesRemaining.innerHTML = `<h2 class="title">MOVES REMAINING</h2>`
    // console.log('about to close modal');
    loseModal.style.display = "none"
    // console.log('closed the modal');
  }) // end of click listener
}//end of lose modal

function finalWinModal(){
  const movesRemaining = document.querySelector("#b2") //GRAB THE DIV THAT HOLDS THE PLAYED MOVES//
  const finalWinModal = document.getElementById("final-win-modal")//GRAB THE WIN MODAL//
  const winBtn = finalWinModal.querySelector("#finalwin-btn")

  finalWinModal.style.display = "block"

  return finalWinModal.addEventListener('click', e =>{//IF THEY CLICK THE BTN//
      console.log('click');
      console.log('level', level);
      newMap = mapGrid[0].layout//DEFINE THE NEW MAP VARIABLE TO THE INCREMENTED LEVEL//
      tileId = 0 //RESET THE TILE ID SO THAT THE DIVS ARE CREATED STARTING WITH ID#1//
      console.log('map1', newMap);
      // console.log(tileId);
      gameBoard.innerHTML = ""//RESET THE INNER HTML OF THE GRID TO EMPTY//
      console.log("reseting map HTML here");
      foreachLoopTrial(newMap) //RENDER THE NEW MAP PER THE LOOP FUNCTION//
      console.log('map rendered');
      currentAstroPosition = parseInt(document.getElementById("astronaut").parentElement.id)
      movesRemaining.innerHTML = `<h2 class="title">MOVES PLAYED</h2>`//RESET THE MOVES PLAYED CONTAINER TO EMPTY//
      console.log('about to close modal');
      finalWinModal.style.display = "none" //CLOSE THE WIN MODAL//
      console.log('closed the modal');
      console.log('astro', currentAstroPosition);
      return

  })

}
