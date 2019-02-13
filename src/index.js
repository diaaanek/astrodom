  let mapGrid = []
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
        // foreachLoopTrial(map4)
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
  var element = document.getElementById("boards"); // Count Boards
  var numberOfBoards = element.getElementsByClassName('board').length;
  var boardsWidth = numberOfBoards*316 // Width of all Boards
  console.log(boardsWidth);
  element.style.width = boardsWidth+"px"; // set Width

  // disable text-selection
  function disableselect(e) {return false;}
  document.onselectstart = new Function ()
  document.onmousedown = disableselect


}) //end of DOMContentLoaded

// console.log(mapGrid);
// let nineSquare = mapGrid.filter( map => map.size === 9 )
// let sixteenSquare = mapGrid.filter( map => map.size === 16)
// let twentyFiveSquare = mapGrid.filter( map => map.size === 25)

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



//   return `
//   <div class="box">${map[0].layout.value}</div>
// `

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
