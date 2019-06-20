//*************** GLOBAL VARIABLES ***************//
// LOCAL VARIABLES //
let mapGrid = [] // WILL HOLD ALL GAME DATA //
let tileId = 0 // TILE STARTS AT ZERO FOR RERENDER OF GAME GRID //
let level = 0 // LEVEL STARTS AT 0 FOR BEGINNING OF GAME PLAY //
let currentMap // WILL BE SET TO CURRENT MAP FROM MAPGRID //
let newMap // WILL BE SET TO SUBSEQUENT MAP FROM CURRENT GRID //
let retryMap // WILL BE VALUE OF CURRENT MAP FOR RERENDERING THE GAME GRID //
let board = [] //not sure what this is tbd //
let currentAstroPosition //CURRENT POSITION OF ASTRONAUT PIECE //
let winPosition // CURRENT POSITION OF SPACESHIP //

// FOUND DOM ELEMENTS //
var gameBoard = document.querySelector(".game-board")
const questionmark = document.querySelector(".questionmark")
const instructionsModal = document.getElementById("instructions-modal")
const closeInstructionModal = document.getElementById("closeIntructionsModal")
const availableMoves = document.querySelector("#b1")
const movesRemaining = document.querySelector("#b2")

// GAME PIECES
const astronaut = `<img id="astronaut" src="assets/astroman.png">` //ASTRONAUT PIECE//
const alien = `<img class='shake-slow shake-constant' src="assets/alien.png">` //ALIEN PIECE//
const homebase = `<img id="spaceship" src="assets/spaceship.png">` //SPACESHIP PIECE//

//*************** GLOBAL VARIABLES ***************//

//*************** BEGINNING OF DOM EVENT LISTENER ***************//
document.addEventListener("DOMContentLoaded", () => {

  const endPoint = 'http://localhost:3000/api/v1/maps' // LOCAL SERVER //
  introModal() // CALL THE INTRODUCTION TO THE GAME MODAL //

//*************** BEGINNING OF FETCH ***************//
  fetch(endPoint)
    .then(response => response.json())
    .then(data => {
      mapGrid = data //SETTING LOCAL VARIABLE TO HOLD ALL DATA //
      currentMap = mapGrid[level].layout //GRABBING THE MAP THAT WE WANT BASED ON VALUE OF LEVEL //
      foreachLoopTrial(currentMap) // FUNCTION TO RENDER THE MAP //

      currentAstroPosition = parseInt(document.getElementById("astronaut").parentElement.id)
      winPosition = parseInt(document.getElementById("spaceship").parentElement.id)
      // console.log(currentAstroPosition, winPosition);
    })
  //*************** END OF FETCH ***************//

  //*************** INSTRUCTIONS MODAL **************//
  questionmark.addEventListener("mouseover", function(e){
    instructionsModal.style.display = "block"
  }) // THIS TOGGLES THE INSTRUCTIONS MODAL ON //

  closeInstructionModal.addEventListener("click", function(e){
    instructionsModal.style.display = "none"
  }) // THIS TOGGLES THE INSTRUCTIONS MODAL OFF //

  //*************** INSTRUCTIONS MODAL **************//

  //*************** DRAGULA *************** //
  var drake = dragula([availableMoves, movesRemaining], {
    copy: true,
  }) //SETTING THE CONTAINERS FOR DRAGULA//


  dragula([movesRemaining], {
    removeOnSpill: true,
  }) // MAKING COPIES OF MOVES WHEN THEY MOVE OUT OF AVAIL MOVES CONTAINER//

//*************** BEGINNING OF DRAG START LISTENER ***************//
  // drake.on('drag', function(el,source) {
  //   if(el.id === "up-event"){
  //   }
  // }) //EVENTUALLY THIS WILL RESTRICT MOVES//

//*************** END OF DRAG START LISTENER ***************//

//*************** BEGINNING OF DRAG DROP LISTENER ***************//

  drake.on('drop', function(el, target){
    //compare the div id of the currentAstroPosition against the legal moves of the current map and asking 1st if the up move is an integer and if so, move the astronaut to the value of up

//*************** UP MOVEMENT ***************//
  if(el.id === 'up-event'){ //THIS IS ALL OF THE CODE FOR AN UP MOVE//

    if(legalMoves[level][currentAstroPosition].up === 0)
    //CONFIRMING IF LEGAL MOVE HERE
    // console.log(legalMoves[level][currentAstroPosition]);
    {
      drake.remove()//REMOVES ALL THE MOVES FROM THE PLAYED MOVES CONTAINER//
      loseModal()//CALL THE LOSE MODAL
    }
    if(legalMoves[level][currentAstroPosition].up === "win"){
      drake.remove()//REMOVES ALL THE MOVES FROM THE PLAYED MOVES CONTAINER//
      // console.log("you win");
      level++ //INCREMENT THE LEVEL SO WIN MODAL CAN RENDER A NEW MAP
      levelUpModal()
      // console.log(currentAstroPosition);
    }
    if(legalMoves[level][currentAstroPosition].up === "finalwin"){
      console.log("won the whole game");
      drake.remove()
      finalWinModal()
    }
    // EVENTUALLY THIS WILL BE IMPLEMENTED AT THE END OF THE ENTIRE GAME PLAY
    //
    else { //FOR ANY MOVE THAT IS NOT ILLEGAL OR A WIN MOVE...//
      let newAstroPosition = legalMoves[level][currentAstroPosition].up //DETERMINE THE NEW POSITION OF THE ASTRONAUT BASED ON THE LEGAL MOVES LOGIC //
      let newDiv = document.getElementById(`${newAstroPosition}`) //GRAB THE NEW DIV THAT THE ASTRONAUT WILL BE MOVING INTO//
      let oldDiv = document.getElementById(`${currentAstroPosition}`)//GRAB THE OLD DIV THAT THE ASTRONAUT IS MOVING INTO//
      // console.log(newAstroPosition, oldDiv, newDiv);
      newDiv.innerHTML += astronaut // ADD THE ASTRONAUT TO THE NEW DIV
      oldDiv.innerHTML = "" // REMOVE THE ASTRONAUT FROM THE OLD DIV
      currentAstroPosition = newAstroPosition //UPDATE THE LOCAL VARIABLE
      // console.log(currentAstroPosition);

    }
  }
  //*************** UP MOVEMENT ***************//

  //*************** DOWN MOVEMENT ***************//
  if(el.id === 'down-event'){
        if(legalMoves[level][currentAstroPosition].down === 0) //CONFIRMING IF LEGAL MOVE HERE
        {
          drake.remove()
          // console.log("game over");
          loseModal()
        }
        if(legalMoves[level][currentAstroPosition].down === "win"){
          // console.log("you win");
          drake.remove()
          level++
          levelUpModal()
          console.log(currentAstroPosition);
        }
        if(legalMoves[level][currentAstroPosition].down === "finalwin"){
          console.log("won the whole game");
          drake.remove()
          finalWinModal()
        }
        else{
          // console.log("legal move");
          let newAstroPosition = legalMoves[level][currentAstroPosition].down
          let newDiv = document.getElementById(`${newAstroPosition}`)
          let oldDiv = document.getElementById(`${currentAstroPosition}`)
          newDiv.innerHTML += astronaut
          oldDiv.innerHTML = ""
          currentAstroPosition = newAstroPosition
          // console.log(currentAstroPosition);
        }
  }
  //*************** DOWN MOVEMENT ***************//

  //*************** LEFT MOVEMENT ***************//
  if(el.id === 'left-event'){

    if(legalMoves[level][currentAstroPosition].left === 0)
    //CONFIRMING IF LEGAL MOVE HERE
    {
      drake.remove()
      // console.log("game over");
      loseModal()
    }
    if(legalMoves[level][currentAstroPosition].left === "win"){
      // console.log("you win");
      drake.remove()
      level++
      levelUpModal()
      // console.log(currentAstroPosition);
    }
    if(legalMoves[level][currentAstroPosition].left === "finalwin"){
      console.log("won the whole game");
      drake.remove()
      finalWinModal()
    }
    else{
      // console.log("legal move");
      let newAstroPosition = legalMoves[level][currentAstroPosition].left
      let newDiv = document.getElementById(`${newAstroPosition}`)
      let oldDiv = document.getElementById(`${currentAstroPosition}`)
      newDiv.innerHTML += astronaut
      oldDiv.innerHTML = ""
      currentAstroPosition = newAstroPosition
      console.log(currentAstroPosition);
    }
  }
  //*************** LEFT MOVEMENT ***************//

  //*************** RIGHT MOVEMENT ***************//
  if(el.id === 'right-event'){
    if(legalMoves[level][currentAstroPosition].right === 0)
    //CONFIRMING IF LEGAL MOVE HERE
    {
      drake.remove()
      // console.log("game over");
      loseModal()
    }
    if(legalMoves[level][currentAstroPosition].right === "win"){
      // console.log("you win");
      drake.remove()
      level++
      levelUpModal()
      // console.log(currentAstroPosition);
    }
    if(legalMoves[level][currentAstroPosition].right === "finalwin"){
      console.log("won the whole game");
      drake.remove()
      finalWinModal()
    }
    else{
      // console.log("legal move");
      let newAstroPosition = legalMoves[level][currentAstroPosition].right
      let newDiv = document.getElementById(`${newAstroPosition}`)
      let oldDiv = document.getElementById(`${currentAstroPosition}`)
      newDiv.innerHTML += astronaut
      oldDiv.innerHTML = ""
      currentAstroPosition = newAstroPosition
      // console.log(currentAstroPosition);
      }
    }
    //*************** RIGHT MOVEMENT ***************//
  })
//*************** END OF DRAG DROP LISTENER ***************//

})//*************** END OF DOM EVENT LISTENER ***************//



//*************** PURE FUNCTIONS ***************//

//THIS FUNCTION CALLS HELPER FUNCTIONS IN ORDER TO RENDER THE MAP //
function foreachLoopTrial(map){
  for(let array of map){ //FOR EVERY ARRAY IN THE MAP ITSELF (MAP IS AN ARRAY OF NESTED ARRAYS IN THE DB)//
    array.map(element => { //GRAB EACH ELEMENT FROM THE ARRAY//
      if(element === 0){
        tileId++ //INCREMENT THE DIV ID//
        gameBoard.innerHTML += renderFreeHTML(element) //ADD THE NEW DIVS HTML TO THE HTML OF THE ENTIRE GAME BOARD
      }
      if(element === 1) { //SAME LOGIC HERE //
        tileId++
        gameBoard.innerHTML += renderAlienHTML(element)
      }
      if(element === 2){
        tileId++
        gameBoard.innerHTML += renderStartHTML(element)
      }
      if(element === 3){
        tileId++
        gameBoard.innerHTML += renderFinishHTML(element)
      }
    })
  }
}

//HELPER FUNCTIONS THAT GET CALLED IN THE ABOVE LOOP FUNCTION TO RENDER HTML TO CREATE THE GRID//
function renderFreeHTML(element){
  return `
  <div id="${tileId}" class="box"></div>
  `
}//THIS FUNCTION CREATES A FREE SPACE//

function renderAlienHTML(element){
  return `
  <div id="${tileId}" class="box">${alien}</div>
  `
}//THIS FUNCTION CREATES AN ALIEN SPACE//

function renderStartHTML(element){
  return `
  <div id="${tileId}" class="box">${astronaut}</div>
  `
}//THIS FUNCTION CREATES OUR ASTRONAUT//

function renderFinishHTML(element){
  return `
  <div id="${tileId}" class="box">${homebase}</div>
  `
}//THIS FUNCTION CREATES THE SPACESHIP/HOMEBASE//

//*************** PURE FUNCTIONS ***************//
