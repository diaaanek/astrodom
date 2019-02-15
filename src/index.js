//*************** GLOBAL VARIABLES ***************//

let mapGrid = []
let tileId = 0
let level = 0
let newMap
let retryMap
// let level2 = mapGrid[1].layout
// foreachLoopTrial(level2)
// level 3: mapGrid[2].layout
let board = []
var gameBoard = document.querySelector(".game-board")
let currentAstroPosition
let winPosition
// const loseModal = document.getElementById("lose-modal")
const questionmark = document.querySelector(".questionmark")
const instructionsModal = document.getElementById("instructions-modal")
const closeInstructionModal = document.getElementById("closeIntructionsModal")

let currentMap

// console.log(currentAstroPosition, winPosition);

const astronaut = `<img id="astronaut" src="assets/astroman.png">`
const alien = `<img class='shake-slow shake-constant' src="assets/alien.png">`
const homebase = `<img id="spaceship" src="assets/spaceship.png">`


const availableMoves = document.querySelector("#b1")
const movesRemaining = document.querySelector("#b2")

//*************** GLOBAL VARIABLES ***************//


//*************** BEGINNING OF DOM EVENT LISTENER ***************//
document.addEventListener("DOMContentLoaded", () => {

const endPoint = 'http://localhost:3000/api/v1/maps'

introModal()


//*************** BEGINNING OF FETCH ***************//
fetch(endPoint)
  .then(response => response.json())
  .then(data => {
    mapGrid = data

    // let nineSquare = mapGrid.filter( map => map.size === 9 )
    // let map1 = nineSquare[2].layout
    // let sixteenSquare = mapGrid.filter( map => map.size === 16)
    // let map4 = sixteenSquare[0].layout
    currentMap = mapGrid[level].layout
    // console.log(map4)
    // let map5 = sixteenSquare[1].layout
    // console.log(map5)
    // let map6 = sixteenSquare[2].layout


    console.log(currentMap)
     // sixteenSquare[parseInt(`${level}`)].layout

    // console.log(currentMap)
    // let twentyFiveSquare = mapGrid.filter( map => map.size === 25)
    // let map7 = twentyFiveSquare[0].layout
    // console.log(mapGrid);
    // console.log(nineSquare);
    // console.log(map4)
    foreachLoopTrial(currentMap) // FUNCTION TO RENDER THE MAP

    currentAstroPosition = parseInt(document.getElementById("astronaut").parentElement.id)
    winPosition = parseInt(document.getElementById("spaceship").parentElement.id)
    // console.log(currentAstroPosition, winPosition);
  })
  //*************** END OF FETCH ***************//

  //*************** toggle hover modal **************//
  questionmark.addEventListener("mouseover", function(e){
    instructionsModal.style.display = "block"
  })

  closeInstructionModal.addEventListener("click", function(e){
    // console.log('click');
    instructionsModal.style.display = "none"
  })

  //*************** toggle hover modal **************//

  //Diane's code (adjusting DOM content to reflect certain HTML/CSS assets)
// dragula library

// el - the item that is being dropped
//
// target - the container on which the item is being dropped
//
// source - the container from which the item was dragged
//
// sibling - the item in the target container before which the item is being dropped, null if being dropped as last item


 var drake = dragula([availableMoves, movesRemaining], {
    copy: true,
  })


  dragula([movesRemaining], {
    removeOnSpill: true,

  })

//*************** END OF DRAG START LISTENER ***************//
drake.on('drag', function(el,source) {
  if(el.id === "up-event"){
  }
})
  //makes a copy of the dragged event
//*************** END OF DRAG START LISTENER ***************//

//*************** BEGINNING OF DRAG DROP LISTENER ***************//
// let legal = 0
// let legal = 1
drake.on('drop', function(el, target){

//*************** UP MOVEMENT ***************//
  if(el.id === 'up-event'){
    // console.log("DROP TARGET", el, target, winPosition)

    //compare the div id of the currentAstroPosition against the legal moves of the current map and asking 1st if the up move is an integer and if so, move the astronaut to the value of up

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
