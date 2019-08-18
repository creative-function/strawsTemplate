"use strict";

console.log("Hello chello, straws! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files."); // let strawOne = document.querySelector(".straw_1");
// let $strawTwo = document.querySelector(".straw_2");
// let $strawThree = document.querySelector(".straw_3");

var $strawImgs = document.querySelectorAll(".prod-img");
var heroImg = document.querySelector(".hero-img"); // TweenMax.fromTo(strawOne, 1,{x:-10,y:100, scale:.5},{x:0,y:0, scale:1});
// TweenMax.fromTo($strawTwo, 1,{x:-10,y:100, scale:.5},{x:0,y:0, scale:1});
// TweenMax.fromTo($strawThree, 1,{x:-10,y:100, scale:.5},{x:0,y:0, scale:1});

TweenMax.fromTo($strawImgs, 1, {
  x: -10,
  y: 100,
  scale: .5
}, {
  x: 0,
  y: 0,
  scale: 1,
  onComplete: tl
});
var tl = new TimelineMax({
  repeat: -1,
  repeatDelay: 2,
  ease: Power1.easeInOut
});
tl.to($strawImgs, 2, {
  y: 0
}).to($strawImgs, 2, {
  y: 25
}).to($strawImgs, 2, {
  y: 0
}).to($strawImgs, 2, {
  y: 25
}).to($strawImgs, 2, {
  y: 0
});
//# sourceMappingURL=main.js.map
