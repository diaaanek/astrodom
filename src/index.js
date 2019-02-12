

var astro = document.createElement("img")
astro.setAttribute("src", "assets/astroman.png")
document.querySelector('#astro').appendChild(astro)


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



let img = document.createElement("img");
img.src = "assets/planet.png";
var src = document.querySelector('.box');
src.appendChild(img);
