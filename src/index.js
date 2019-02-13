  let mapGrid = []
  let board = []
  var gameBoard = document.querySelector(".game-board")

document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("difficulty-modal")
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
        console.log(mapGrid);

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
        console.log(map4)
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

  // export class CopyComponent {
  //   constructor(private dragulaService: DragulaService) {
  //     dragulaService.createGroup('COPYABLE', {
  //       copy: (el, source) => {
  //         return source.id === 'b1';
  //       },
  //       accepts: (el, target, source, sibling) => {
  //         // To avoid dragging from right to left container
  //         return target.id !== 'b2';
  //       }
  //     });
  //   }
  // }


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

function foreachLoopTrial(map){
  for(let array of map){
    array.map(element => {
      if(element === 0){
        gameBoard.innerHTML += renderFreeHTML(element)
      }
      if(element === 1) {
        gameBoard.innerHTML += renderAlienHTML(element)
      }
      if(element === 2){
        gameBoard.innerHTML += renderStartHTML(element)
      }
      if(element === 3){
        gameBoard.innerHTML += renderFinishHTML(element)
      }
    })
  }
}

function xycoords() {
  const rows =  4
  const columns = 4
  for (let rowId = 0; rowId<rows; rowId++) {
    const column = []
    for (let columnId = 0;columnId<rows;columnId++) {
      column.push({x:rowId, y:columnId})
    }
    board.push(column)
  }
  return board
}
xycoords()
console.log(board[0][0]);

function renderFreeHTML(element){

  return `
  <div class="box"><h1>${element}</h1></div>
  `
}

function renderAlienHTML(element){
  return `
  <div class="box"><h1>${element}</h1></div>
  `
}

function renderStartHTML(element){
  return `
  <div class="box"><h1>${element}</h1></div>
  `
}

function renderFinishHTML(element){
  return `
  <div class="box"><h1>${element}</h1></div>
  `
}











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
