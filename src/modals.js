
function introModal(){
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

}

function winModal(){
  const winModal = document.getElementById("win-modal")
  
}

function loseModal(){
    const loseModal = document.getElementById("lose-modal")

}
