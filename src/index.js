  let mapGrid = []
  let board = []
  var gameBoard = document.querySelector(".game-board")
  const astronaut = `<img src="assets/astroman.png">`
  const alien = `<img src="assets/alien.png">`
  const homebase = `<img src="assets/spaceship.png">`

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

  dragula([
  	document.getElementById('b1'),
  	document.getElementById('b2')
  ])

  // Scrollable area
  // var element = document.getElementById("boards"); // Count Boards
  // var numberOfBoards = element.getElementsByClassName('board').length;
  // var boardsWidth = numberOfBoards*316 // Width of all Boards
  // console.log(boardsWidth);
  // element.style.width = boardsWidth+"px"; // set Width

  // disable text-selection
  // function disableselect(e) {return false;}
  // document.onselectstart = new Function ()
  // document.onmousedown = disableselect


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

// console.log(map4LegalMoves[1].left);









//diane's code ///////////////////////////////////////////////
function changeText(text)
      {
          var display = document.querySelector('.box');
          display.innerHTML = "";
          display.innerHTML = text;
      }
        function changeback(text)
      {
          var display = document.querySelector('.box');
          display.innerHTML = "";
          display.innerHTML = text;
      }



// let img = document.createElement("img");
// img.src = "assets/planet.png";
// var src = document.querySelector('.box');
// src.appendChild(img);
