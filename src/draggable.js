
// class App {
//   static init() {
//
//     App.box = document.getElementsByClassName('box')[0]
//
//     App.box.addEventListener("dragstart", App.dragstart)
//     App.box.addEventListener("dragend", App.dragend)
//
//     const containers = document.getElementsByClassName('holder')
//
//     for(const container of containers) {
//       container.addEventListener("dragover", App.dragover)
//       container.addEventListener("dragenter", App.dragenter)
//       container.addEventListener("dragleave", App.dragleave)
//       container.addEventListener("drop", App.drop)
//     }
//   }
//
//   static dragstart() {
//     this.className += " held"
//
//     setTimeout(()=>this.className="invisible", 0)
//   }
//
//   static dragend() {
//     this.className = "box"
//   }
//
//   static dragover(e) {
//     e.preventDefault()
//   }
//
//   static dragenter(e) {
//     e.preventDefault()
//     this.className += " hovered"
//   }
//
//   static dragleave() {
//     this.className = "holder"
//   }
//
//   static drop() {
//     this.className = "holder"
//     this.append(App.box)
//   }
//
// }
//
// document.addEventListener("DOMContentLoaded", App.init)

// dragula library


dragula([
	document.getElementById("b1"),
	document.getElementById("b2")
])

// // Scrollable area
// var element = document.getElementById("boards"); // Count Boards
// var numberOfBoards = element.getElementsByClassName('board').length;
// var boardsWidth = numberOfBoards*316 // Width of all Boards
// console.log(boardsWidth);
// element.style.width = boardsWidth+"px"; // set Width

// disable text-selection
function disableselect(e) {return false;}
document.onselectstart = new Function ()
document.onmousedown = disableselect

