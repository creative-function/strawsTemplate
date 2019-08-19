"use strict";

console.log("Hello chello, straws! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");
var menuBttn = document.querySelector(".menu_bttn");
var backBttn = document.querySelector(".back-bttn");
menuBttn.addEventListener('click', popMenu);
backBttn.addEventListener('click', popMenu);

function popMenu() {
  console.log("menu button clicked");
  var popoutMenu = document.querySelector("#popout-menu");

  if (popoutMenu.style.display === "block") {
    popoutMenu.style.display = "none";
  } else {
    popoutMenu.style.display = "block";
  }
}

;
var $strawImgs = document.querySelectorAll(".straw-img");
var blob = new TimelineMax({
  repeat: -1,
  repeatDelay: -1,
  yoyo: true,
  ease: Back.easeInOut
});
MorphSVGPlugin.convertToPath("#circ_p"); //purple circle animation

blob.to("#circ_p", 8, {
  morphSVG: "#blob_p"
}, "spill -=.1");
blob.to("#circ_p", 8, {
  morphSVG: "#blob_p2"
}, "spill -=-2");
blob.to("#circ_p", 4, {
  morphSVG: "#circ_p"
}, "spill +=1"); //yellow circle animation

MorphSVGPlugin.convertToPath("#circ_y");
blob.to("#circ_y", 8, {
  morphSVG: "#blob_y"
}, "spill -=.1");
blob.to("#circ_y", 8, {
  morphSVG: "#blob_y2"
}, "spill -=-2");
blob.to("#circ_y", 4, {
  morphSVG: "#circ_y"
}, "spill +=1"); //blue circle animation

MorphSVGPlugin.convertToPath("#circ_b");
blob.to("#circ_b", 8, {
  morphSVG: "#blob_b"
}, "spill -=.1");
blob.to("#circ_b", 8, {
  morphSVG: "#blob_b2"
}, "spill -=-2");
blob.to("#circ_b", 4, {
  morphSVG: "#circ_b"
}, "spill +=1");
var tl = new TimelineMax({
  repeat: -1,
  ease: Power1.easeInOut
});
tl.fromTo($strawImgs, .2, {
  scale: 0
}, {
  scale: 1
}, "slide -=.1").fromTo($strawImgs, .5, {
  x: -1000
}, {
  x: 0
}, "slide").fromTo($strawImgs, .5, {
  y: 1000
}, {
  y: 0
}, "slide").to($strawImgs, 1, {
  y: 0
}).to($strawImgs, 2, {
  y: 25
}).to($strawImgs, 2, {
  y: 0
}).to($strawImgs, 2, {
  y: 25
}).to($strawImgs, 2, {
  y: 0
}).to($strawImgs, .5, {
  scale: 0
}, "slideOut").fromTo($strawImgs, .5, {
  y: 0
}, {
  y: 1000
}, "slideOut").fromTo($strawImgs, .5, {
  x: 0
}, {
  x: -1000
}, "slideOut");
//# sourceMappingURL=main.js.map
