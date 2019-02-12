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
