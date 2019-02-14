  let mapGrid = []
  let board = []
  var gameBoard = document.querySelector(".game-board")
  const astronaut = `<img src="assets/astroman.png">`
  const alien = `<img class='shake-slow shake-constant' src="assets/alien.png">`
  const homebase = `<img src="assets/spaceship.png">`

  const availableMoves = document.querySelector("#b1")
  const movesRemaining = document.querySelector("#b2")

  const leftMove = document.querySelector("#left-event")


document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("difficulty-modal")
  const loseModal = document.getElementById("lose-modal")
  const winModal = document.getElementById("win-modal")
  const span = document.querySelector(".close")

  window.onload = function(){
    modal.style.display = "block"
  }
  span.onclick = function(){
    modal.style.display = "none"
  }
  window.onclick = function(e){
    if(e.target == modal){
      modal.style.display = "none"
    }
  }

  const endPoint = 'http://localhost:3000/api/v1/maps'
    fetch(endPoint)
      .then(response => response.json())
      .then(data => {
        mapGrid = data
        // console.log(mapGrid);

        // let nineSquare = mapGrid.filter( map => map.size === 9 )
        // let map1 = nineSquare[2].layout
        let sixteenSquare = mapGrid.filter( map => map.size === 16)
        let map4 = sixteenSquare[0].layout
        let map5 = sixteenSquare[1].layout
        let map6 = sixteenSquare[2].layout
        // let twentyFiveSquare = mapGrid.filter( map => map.size === 25)
        // let map7 = twentyFiveSquare[0].layout
        // console.log(mapGrid);
        // console.log(nineSquare);
        // console.log(map4)
        foreachLoopTrial(map4)
      })


  //Diane's code (adjusting DOM content to reflect certain HTML/CSS assets)
  // var astro = document.createElement("img")
  // astro.setAttribute("src", "assets/astroman.png")
  // document.querySelector('#astro').appendChild(astro)
  //

  // dragula library
 // dragula([availableMoves, movesRemaining])

 var drake = dragula([availableMoves, movesRemaining], {
    copy: true,
  });

  dragula([movesRemaining], {
    removeOnSpill: true,
  });

drake.on('drag', function(el,source) {
  console.log("HEY", source, el)
  document.getElementsByTagName('body')[0].style.backgroundColor = '#28a0ef';

}); // end drag event listener

drake.on('drop', function(el, target){
    console.log("DROP TARGET", el, target)
  if(el.id === 'up-event'){
    el.style.border = '2px dashed white';
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white';

  }
  if(el.id === 'down-event'){
    console.log("DOWN")
        el.style.border = '2px dashed white';

        gameBoard.innerHTML =
      `
      <div id="1" class="box"></div>
      <div id="2" class="box"></div>
      <div id="3" class="box"></div>
      <div id="4" class="box"></div>
      <div id="5" class="box"><img src="assets/astroman.png"></div>
      <div id="6" class="box"><img class='shake-slow shake-constant'src="assets/alien.png"></div>
      <div id="7" class="box"><img class='shake-slow shake-constant'src="assets/alien.png"></div>
      <div id="8" class="box"></div>
      <div id="9" class="box"></div>
      <div id="10" class="box"><img src="assets/spaceship.png"></div>
      <div id="11" class="box"><img class='shake-slow shake-constant' src="assets/alien.png"></div>
      <div id="12" class="box"></div>
      <div id="13" class="box"><img src="assets/alien.png"></div>
      <div id="14" class="box"></div>
      <div id="15" class="box"></div>
      <div id="16" class="box"></div>
      `
  }
  if(el.id === 'left-event'){
    console.log("LEFT")
    el.style.border = '2px dashed white';
    gameBoard.innerHTML =
  `
  <div id="1" class="box"><img src="assets/astroman.png"></div>
  <div id="2" class="box"></div>
  <div id="3" class="box"></div>
  <div id="4" class="box"></div>
  <div id="5" class="box"></div>
  <div id="6" class="box"><img class='shake-slow shake-constant' src="assets/alien.png"></div>
  <div id="7" class="box"><img class='shake-slow shake-constant' src="assets/alien.png"></div>
  <div id="8" class="box"></div>
  <div id="9" class="box"></div>
  <div id="10" class="box"><img src="assets/spaceship.png"></div>
  <div id="11" class="box"><img class='shake-slow shake-constant' src="assets/alien.png"></div>
  <div id="12" class="box"></div>
  <div id="13" class="box"><img class='shake-slow shake-constant' src="assets/alien.png"></div>
  <div id="14" class="box"></div>
  <div id="15" class="box"></div>
  <div id="16" class="box"></div>
  `
  }

  if(el.id === 'right-event'){
    console.log("RIGHT")
    el.style.border = '2px dashed white';
      document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
  }
})

}) //end of DOMContentLoaded

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
let tileId = 0

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

// function xycoords() {
//   const rows =  4
//   const columns = 4
//   for (let rowId = 0; rowId<rows; rowId++) {
//     const column = []
//     for (let columnId = 0;columnId<rows;columnId++) {
//       column.push({x:rowId, y:columnId})
//     }
//     board.push(column)
//   }
//   return board
// }
// xycoords()
// console.log(board);

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



const map4LegalMoves = {1: {up: null, down: 5, left: null, right: 2},
              2: {up: null, down: null, left: 1, right: 3},
              3: {up: null, down: null, left: 2, right: 4},
              4: {up: null, down: 8, left: 3, right: null},
              5: {up: 1, down: 9, left: null, right: null},
              8: {up: 4, down: 12, left: null, right: null},
              9: {up: 5, down: null, left: null, right: "win"},
              12: {up: 8, down: 16, left: null, right: null},
              14: {up: 10, down: null, left: null, right: 15},
              15: {up: null, down: null, left: 14, right: 16},
              16: {up: 12, down: null, left: 15, right: null}
              }

               // const one = map4LegalMoves[1]['up']

const map5LegalMoves = {1: {up: null, down: 5, left: null, right: 2},
              2: {up: null, down: null, left: 1, right: 3},
              3: {up: null, down: 7, left: 2, right: null},
              5: {up: 1, down: 9, left: null, right: null},
              7: {up: 3, down: 11, left: null, right: "win"},
              9: {up: 5, down: 13, left: null, right: null},
              11: {up: 7, down: 15, left: null, right: null},
              13: {up: 9, down: null, left: null, right: 14},
              14: {up: null, down: null, left: 13, right: 15},
              15: {up: 11, down: null, left: 14, right: null},
              }

  const map6LegalMoves = {1: {up: null, down: 5, left: null, right: 2},
              2: {up: null, down: null, left: 1, right: 3},
              3: {up: null, down: 7, left: 2, right: 4},
              4: {up: null, down: 8, left: 3, right: null},
              5: {up: 1, down: 9, left: null, right: null},
              7: {up: 3, down: null, left: null, right: 8},
              8: {up: 4, down: 12, left: 7, right: null},
              9: {up: 5, down: 13, left: null, right: 10},
              10: {up: null, down: null, left: 9, right: null},
              12: {up: 8, down: 16, left: null, right: null},
              13: {up: 9, down: null, left: null, right: null},
              16: {up: 12, down: null, left: "win", right: null}
              }//end of map6

// console.log(map4LegalMoves[1]);

      // function renderLeftMoves(){
      //       leftMove.addEventListener('click', e=> {
      //          gridBox
      //       })
      //       }
      //
      // renderLeftMoves()
