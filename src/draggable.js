// var drake = dragula([availableMoves, movesRemaining], {
//    copy: true,
//  })
//
//
//  dragula([movesRemaining], {
//    removeOnSpill: true,
//
//  })
//
//
//
// //*************** END OF DRAG START LISTENER ***************//
// drake.on('drag', function(el,source) {
//  if(el.id === "up-event"){
//  }
// })
//
// var dragAndDrop = {
//
//     limit: 6,
//     count: 0,
//
//     init: function () {
//         this.dragula();
//         this.eventListeners();
//     },
//
//     eventListeners: function () {
//         this.dragula.on('drop', this.dropped.bind(this));
//     },
//
//     dragula: function () {
//         this.dragula = dragula([document.querySelector('#b1'), document.querySelector('#b2')],
//         {
//             moves: this.canMove.bind(this),
//             copy: true,
//         });
//     },
//
//     canMove: function () {
//         return this.count < this.limit;
//     },
//
//     dropped: function (el) {
//         this.count++;
//     }
//
// }
//
//
//
// // let dragAndDrop = {
// //
// //     limit: 6, //move allowance
// //     count: 0,
// //
// //     init: function () {
// //         this.dragula();
// //         this.eventListeners();
// //     },
// //
// //     eventListeners: function () {
// //         this.dragula.on('drop', this.dropped.bind(this));
// //     },
//
//     dragula: function () {
//         this.dragula = dragula([document.querySelector('#b1'), document.querySelector('#b2')],
//         {
//             moves: this.canMove.bind(this),
//             copy: true,
//         });
//     },
//
//     canMove: function () {
//         return this.count < this.limit;
//     },
//
//     dropped: function (el) {
//         this.count++;
//     }
//
// }
//
// dragAndDrop.init();
