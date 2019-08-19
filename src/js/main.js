

console.log(`Hello chello, straws! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

// let strawOne = document.querySelector(".straw_1");
// let $strawTwo = document.querySelector(".straw_2");
// let $strawThree = document.querySelector(".straw_3");

let $strawImgs = document.querySelectorAll(".prod-img");

let heroImg = document.querySelector(".hero-img");

// TweenMax.fromTo(strawOne, 1,{x:-10,y:100, scale:.5},{x:0,y:0, scale:1});
// TweenMax.fromTo($strawTwo, 1,{x:-10,y:100, scale:.5},{x:0,y:0, scale:1});
// TweenMax.fromTo($strawThree, 1,{x:-10,y:100, scale:.5},{x:0,y:0, scale:1});



var tl= new TimelineMax({repeat:-1, repeatDelay:2,ease:Power1.easeInOut})
tl.fromTo($strawImgs,.5,{scale:0},{scale:1},"slide -=.1")
.fromTo($strawImgs,.5,{x:-1000}, {x:0},"slide")
.fromTo($strawImgs,.5,{y:1000}, {y:0},"slide")
.to($strawImgs, 1, {y:0})  
.to($strawImgs, 2, {y:25})  
.to($strawImgs,2, {y:0})  
.to($strawImgs, 2, {y:25})
.to($strawImgs, 2, {y:0})
.to($strawImgs,.5,{scale:0})
