// JavaScript Document
console.log("lalalal")

var form = document.querySelector("section.form")
var knop1 = document.querySelector("body > button")
var knop2 = document.querySelector(".form section:first-of-type button")

function formopen() {
    form.classList.toggle("laatformzien")
}

knop1.addEventListener("click", formopen)
knop2.addEventListener("click", formopen)