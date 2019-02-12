  let mapGrid = []
  var gameBoard = document.querySelector(".game-board")

document.addEventListener("DOMContentLoaded", () => {



  const endPoint = 'http://localhost:3000/api/v1/maps'
    fetch(endPoint)
      .then(response => response.json())
      .then(data => {
        mapGrid = data

        // let nineSquare = mapGrid.filter( map => map.size === 9 )
        // let map1 = nineSquare[2].layout
        // let sixteenSquare = mapGrid.filter( map => map.size === 16)
        // let map4 = sixteenSquare[1].layout
        let twentyFiveSquare = mapGrid.filter( map => map.size === 25)
        let map7 = twentyFiveSquare[0].layout
        // console.log(mapGrid);
        // console.log(nineSquare);
        // console.log(map1)
        foreachLoopTrial(map7)
      })


  //Diane's code (adjusting DOM content to reflect certain HTML/CSS assets)
  // var astro = document.createElement("img")
  // astro.setAttribute("src", "assets/astroman.png")
  // document.querySelector('#astro').appendChild(astro)
  //


}) //end of DOMContentLoaded

// console.log(mapGrid);
// let nineSquare = mapGrid.filter( map => map.size === 9 )
// let sixteenSquare = mapGrid.filter( map => map.size === 16)
// let twentyFiveSquare = mapGrid.filter( map => map.size === 25)


function foreachLoopTrial(map){
  for(let array of map){
    array.map(element => {
      if(element === true){
        gameBoard.innerHTML += renderTrueHTML(element)
      } else {
        gameBoard.innerHTML += renderFalseHTML(element)
      }
    })
  }
}



//   return `
//   <div class="box">${map[0].layout.value}</div>
// `

function renderTrueHTML(element){
  return `
  <div class="box"><h1>${element}</h1></div>
  `
}

function renderFalseHTML(element){
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
