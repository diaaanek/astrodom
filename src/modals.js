
function introModal(){
  const modal = document.getElementById("difficulty-modal")
  const span = document.querySelector(".close")

  window.onload = function(){
    modal.style.display = "block"
    // introMusic = new sound("intro.mp3")
    // introMusic.play()

  }

  span.onclick = function(){
    modal.style.display = "none"
  }

  window.onclick = function(e){
    if(e.target == modal){
      modal.style.display = "none"
    }
  }

}

function winModal(){
  const movesRemaining = document.querySelector("#b2")
  const winModal = document.getElementById("win-modal")
  const winBtn = document.getElementById("win-btn")

  winModal.style.display = "block"

  winBtn.addEventListener('click', e =>{
    console.log('click');
    console.log(level);
    // console.log(mapGrid);
    level++
    console.log(level);
    let newMap = mapGrid[level].layout
    tileId = 0
    console.log(newMap);
    console.log(tileId);
    gameBoard.innerHTML = ""
    foreachLoopTrial(newMap)
    movesRemaining.innerHTML = `<h2 class="title">MOVES REMAINING</h2>`
    //DIANE YOU SHOULD RESET THE MOVES REMAINING CONTAINER TO BE EMPTY HERE //
    winModal.style.display = "none"
    winBtn.removeEventListener()
  })//end of click listener

}//end of win modal

// function loseModal(){
//
// }//end of lose modal

//GP TO DO: MAKE A FINAL WIN MODAL
