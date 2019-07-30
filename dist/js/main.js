"use strict";

console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");
var photoBox = document.querySelectorAll(".single-project");
var photoGallery = ['url("/dist/img/dog1.jpg")', 'url("/dist/img/dog2.jpg")', 'url("/dist/img/dog3.jpg")', 'url("/dist/img/dog4.jpg")', 'url("/dist/img/dog5.jpg")', 'url("/dist/img/dog6.jpg")', 'url("/dist/img/dog7.jpg")', 'url("/dist/img/dog8.jpg")', 'url("/dist/img/dog9.jpg")', 'url("/dist/img/dog10.jpg")', 'url("/dist/img/dog11.jpg")', 'url("/dist/img/dog12.jpg")'];
$('.single-project').css({
  "background-image": photoGallery[0],
  "background-size": "contain"
});
//# sourceMappingURL=main.js.map
