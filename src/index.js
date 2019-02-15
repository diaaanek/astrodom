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
      // console.log(currentMap)
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
    // console.log('click');
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
  if(el.id === 'up-event'){
    // console.log("DROP TARGET", el, target, winPosition)


    //legalMoves[legal] *** PAY ATTENTION TO ME WHEN YOU NEED TO ABSTRACT THE LEVEL RULES ***

    if(legalMoves[level][currentAstroPosition].up === 0)
    //CONFIRMING IF LEGAL MOVE HERE
    {
      drake.remove()
      console.log("game over");
      loseModal()
    }
    if(legalMoves[level][currentAstroPosition].up === "win"){
      drake.remove()
      console.log("you win");
      level++
      winModal()
      // legal++
      // console.log("you win");
    }
    // if(legalMoves[level][currentAstroPosition].up === "finalwin"){
    //   console.log("won the whole game");
    // }
    //
    else {
      console.log("legal move");
      let newAstroPosition = legalMoves[level][currentAstroPosition].up
      let newDiv = document.getElementById(`${newAstroPosition}`)
      let oldDiv = document.getElementById(`${currentAstroPosition}`)
      // console.log(newAstroPosition, oldDiv, newDiv);
      newDiv.innerHTML += astronaut
      oldDiv.innerHTML = ""
      currentAstroPosition = newAstroPosition
    }
  }
  //*************** UP MOVEMENT ***************//

  //*************** DOWN MOVEMENT ***************//
  if(el.id === 'down-event'){
    // console.log("DOWN", el, target)
        if(legalMoves[level][currentAstroPosition].down === 0) //CONFIRMING IF LEGAL MOVE HERE
        {
          drake.remove()
          console.log("game over");
          loseModal()
        }
        if(legalMoves[level][currentAstroPosition].down === "win"){
          console.log("you win");
          drake.remove()
          level++
          winModal()

        }
        // if(legalMoves[level][currentAstroPosition].down === "finalwin"){
        //   console.log("won the whole game");
        // }
        else{
          console.log("legal move");
          let newAstroPosition = legalMoves[level][currentAstroPosition].down
          let newDiv = document.getElementById(`${newAstroPosition}`)
          let oldDiv = document.getElementById(`${currentAstroPosition}`)
          // console.log(newAstroPosition, oldDiv, newDiv);
          newDiv.innerHTML += astronaut
          oldDiv.innerHTML = ""
          currentAstroPosition = newAstroPosition
        }
  }
    //*************** DOWN MOVEMENT ***************//

    //*************** LEFT MOVEMENT ***************//
  if(el.id === 'left-event'){
    // console.log("LEFT")

    if(legalMoves[level][currentAstroPosition].left === 0)
    //CONFIRMING IF LEGAL MOVE HERE
    {
      drake.remove()
      console.log("game over");
      loseModal()
    }
    if(legalMoves[level][currentAstroPosition].left === "win"){
      console.log("you win");
      drake.remove()
      level++
      winModal()
    }
    // if(legalMoves[level][currentAstroPosition].left === "finalwin"){
    //   console.log("won the whole game");
    // }
    else{
      console.log("legal move");
      let newAstroPosition = legalMoves[level][currentAstroPosition].left
      let newDiv = document.getElementById(`${newAstroPosition}`)
      let oldDiv = document.getElementById(`${currentAstroPosition}`)
      // console.log(newAstroPosition, oldDiv, newDiv);
      newDiv.innerHTML += astronaut
      oldDiv.innerHTML = ""
      currentAstroPosition = newAstroPosition
    }
  }
  //*************** LEFT MOVEMENT ***************//

  //*************** RIGHT MOVEMENT ***************//
  if(el.id === 'right-event'){
    console.log("RIGHT")
          if(legalMoves[level][currentAstroPosition].right === 0)
          //CONFIRMING IF LEGAL MOVE HERE
          {
            drake.remove()
            console.log("game over");
            loseModal()
          }
          if(legalMoves[level][currentAstroPosition].right === "win"){
            console.log("you win");
            drake.remove()
            level++
            winModal()
          }
          // if(legalMoves[level][currentAstroPosition].right === "finalwin"){
          //   console.log("won the whole game");
          // }
          else{
            console.log("legal move");
            let newAstroPosition = legalMoves[level][currentAstroPosition].right
            let newDiv = document.getElementById(`${newAstroPosition}`)
            let oldDiv = document.getElementById(`${currentAstroPosition}`)
            // console.log(newAstroPosition, oldDiv, newDiv);
            newDiv.innerHTML += astronaut
            oldDiv.innerHTML = ""
            currentAstroPosition = newAstroPosition
          }
  }
    //*************** RIGHT MOVEMENT ***************//

})
//*************** END OF DRAG DROP LISTENER ***************//




})
//*************** END OF DOM EVENT LISTENER ***************//

// function movePlaySound(){
//     var audio = new Audio("assets/astromove.wav");
//     audio.play();
// }
// function newGridLoop(array){
//   for(let element of array){
//     if(element === 0){
//       gameBoard.innerHTML += renderFreeHTML(element)
//     } if(element === 1) {
//       gameBoard.innerHTML += renderAlienHTML(element)
//     }
//      if(element === 2){
//       gameBoard.innerHTML += renderStartHTML(element)
//     }
//     if (element === 3){
//       gameBoard.innerHTML += renderFinishHTML(element)
//     }
//   }
// }


function foreachLoopTrial(map){
  for(let array of map){
    array.map(element => {
      if(element === 0){
        tileId++
        gameBoard.innerHTML += renderFreeHTML(element)
      }
      if(element === 1) {
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


function renderFreeHTML(element){
  return `
  <div id="${tileId}" class="box"></div>
  `
}

function renderAlienHTML(element){
  return `
  <div id="${tileId}" class="box">${alien}</div>
  `
}

function renderStartHTML(element){
  return `
  <div id="${tileId}" class="box">${astronaut}</div>
  `
}

function renderFinishHTML(element){
  return `
  <div id="${tileId}" class="box">${homebase}</div>
  `
}
