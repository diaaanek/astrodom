// 
// let dragAndDrop = {
//
//     limit: 6, //move allowance
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
// dragAndDrop.init();
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
