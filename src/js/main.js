

console.log(`Hello chello, straws! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

// let strawOne = document.querySelector(".straw_1");
// let $strawTwo = document.querySelector(".straw_2");
// let $strawThree = document.querySelector(".straw_3");

let $strawImgs = document.querySelectorAll(".straw-img");


var blob= new TimelineMax({repeat:-1,yoyo:true,ease:Power2.easeInOut})
MorphSVGPlugin.convertToPath("#circ_p");
//purple circle animation
blob.to("#circ_p", 8, {morphSVG:"#blob_p"},"spill -=.1");
blob.to("#circ_p", 8, {morphSVG:"#blob_p2"},"spill -=-2");
//yellow circle animation
MorphSVGPlugin.convertToPath("#circ_y");
blob.to("#circ_y", 8, {morphSVG:"#blob_y"},"spill -=.1");
blob.to("#circ_y", 8, {morphSVG:"#blob_y2"},"spill -=-2");
//blue circle animation
MorphSVGPlugin.convertToPath("#circ_b");
blob.to("#circ_b", 8, {morphSVG:"#blob_b"},"spill -=.1");
blob.to("#circ_b", 8, {morphSVG:"#blob_b2"},"spill -=-2");



var tl= new TimelineMax({repeat:-1,ease:Power1.easeInOut})
tl.fromTo($strawImgs,.2,{scale:0},{scale:1},"slide -=.1")
.fromTo($strawImgs,.5,{x:-1000}, {x:0},"slide")
.fromTo($strawImgs,.5,{y:1000}, {y:0},"slide")
.to($strawImgs, 1, {y:0})  
.to($strawImgs, 2, {y:25})  
.to($strawImgs,2, {y:0})  
.to($strawImgs, 2, {y:25})
.to($strawImgs, 2, {y:0})
.to($strawImgs,.5,{scale:0},"slideOut")
.fromTo($strawImgs,.5,{y:0}, {y:1000},"slideOut")
.fromTo($strawImgs,.5,{x:0}, {x:-1000},"slideOut")

