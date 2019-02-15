function introModal(){
  const modal = document.getElementById("difficulty-modal")
  const span = document.getElementById("closeIntroModal")

  window.onload = function(){
    modal.style.display = "block"
<<<<<<< HEAD

=======
    // introMusic = new sound("intro.mp3")
    // introMusic.play()
>>>>>>> ghostlevel
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
  const winBtn = winModal.querySelector("#win-btn")

  winModal.style.display = "block"

  return winModal.addEventListener('click', e =>{
      console.log('click');
      console.log(level);
      newMap = mapGrid[level].layout
      tileId = 0
      console.log(newMap);
      // console.log(tileId);
      gameBoard.innerHTML = ""
      console.log("reseting map HTML here");
      foreachLoopTrial(newMap)
      console.log('map rendered');
      movesRemaining.innerHTML = `<h2 class="title">MOVES REMAINING</h2>`
      console.log('about to close modal');
      winModal.style.display = "none"
      console.log('closed the modal');
      return

  })//end of click listener
  // winBtn.removeEventListener("click", e=>{
  //
  //   console.log('removed');
  // })

}//end of win modal

function loseModal(){
  const movesRemaining = document.querySelector("#b2")
  const loseModal = document.getElementById("lose-modal")
  const loseBtn = document.getElementById('try-again-btn')

  loseModal.style.display = "block"
  loseModal.addEventListener('click', e =>{
    console.log('click');
    console.log(level);
    retryMap = mapGrid[level].layout
    tileId = 0
    gameBoard.innerHTML = ""
    console.log("reseting map HTML here");
    foreachLoopTrial(retryMap)
    console.log('map rendered');
    movesRemaining.innerHTML = `<h2 class="title">MOVES REMAINING</h2>`
    console.log('about to close modal');
    loseModal.style.display = "none"
    console.log('closed the modal');
  }) // end of click listener
}//end of lose modal
