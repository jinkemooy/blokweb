// JavaScript Document
console.log("lalalal")

var myElement = document.querySelector("footer img");
myElement.addEventListener("scroll", function(ev){
    ev.target.scrollTop;//pixels scrolled from element top
    ev.target.scrollHeight;//pixels of the whole element.
});