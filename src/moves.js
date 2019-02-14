//


const map4LegalMoves = {1: {up: 0, down: 5, left: 0, right: 2},
              2: {up: 0, down: 0, left: 1, right: 3},
              3: {up: 0, down: 0, left: 2, right: 4},
              4: {up: 0, down: 8, left: 3, right: 0},
              5: {up: 1, down: 9, left: 0, right: 0},
              8: {up: 4, down: 12, left: 0, right: 0},
              9: {up: 5, down: 0, left: 0, right: "win"},
              12: {up: 8, down: 16, left: 0, right: 0},
              14: {up: 10, down: 0, left: 0, right: 15},
              15: {up: 0, down: 0, left: 14, right: 16},
              16: {up: 12, down: 0, left: 15, right: 0}
              }

               // const one = map4LegalMoves[1]['up']

const map5LegalMoves = {1: {up: 0, down: 5, left: 0, right: 2},
              2: {up: 0, down: 0, left: 1, right: 3},
              3: {up: 0, down: 7, left: 2, right: 0},
              5: {up: 1, down: 9, left: 0, right: 0},
              7: {up: 3, down: 11, left: 0, right: "win"},
              9: {up: 5, down: 13, left: 0, right: 0},
              11: {up: 7, down: 15, left: 0, right: 0},
              13: {up: 9, down: 0, left: 0, right: 14},
              14: {up: 0, down: 0, left: 13, right: 15},
              15: {up: 11, down: 0, left: 14, right: 0},
              }

  const map6LegalMoves = {1: {up: 0, down: 5, left: 0, right: 2},
              2: {up: 0, down: 0, left: 1, right: 3},
              3: {up: 0, down: 7, left: 2, right: 4},
              4: {up: 0, down: 8, left: 3, right: 0},
              5: {up: 1, down: 9, left: 0, right: 0},
              7: {up: 3, down: 0, left: 0, right: 8},
              8: {up: 4, down: 12, left: 7, right: 0},
              9: {up: 5, down: 13, left: 0, right: 10},
              10: {up: 0, down: 0, left: 9, right: 0},
              12: {up: 8, down: 16, left: 0, right: 0},
              13: {up: 9, down: 0, left: 0, right: 0},
              16: {up: 12, down: 0, left: "win", right: 0}
              }//end of map6

// console.log(map4LegalMoves[1]);

      // function renderLeftMoves(){
      //       leftMove.addEventListener('click', e=> {
      //          gridBox
      //       })
      //       }
      //
      // renderLeftMoves()
