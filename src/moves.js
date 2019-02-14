//


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
