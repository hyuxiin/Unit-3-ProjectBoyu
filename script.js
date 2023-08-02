// var NewWorldOrder = document.getElementbyID("NWO");
// NewWorldOrder.onended = function (){
//   console.log('It works')
//   var AlmostHeavenHell = document.getElementbyID("AHH");
//   AlmostHeavenHell.play()
// };

let buttonNext = document.querySelector(".next-button");
let part1 = document.querySelector(".pt1");
let part2 = document.querySelector(".p2");
let body = document.querySelector("body")
buttonNext.onclick = function() {
  part2.style.display = "block"
  part1.style.display = "none"
};

let buttonSleep = document.querySelector(".sleep");
let buttonGreet = document.querySelector(".greet");
let buttonRestart = document.querySelector(".reincarnation")
let part3v1 = document.querySelector(".p3v1");
let part3v2 = document.querySelector(".p3v2");
  buttonSleep.onclick = function() {
  part3v1.style.display = "block"
  part2.style.display = "none"
}
buttonRestart.onclick = function() {
  part1.style.display = "block"
  part3v1.style.display = "none"
}
buttonGreet.onclick = function() {
  part3v2.style.display = "block"
  part2.style.display = "none"
}

let buttonDecline = document.querySelector(".decline");
let buttonAccept = document.querySelector(".accept")
let buttonMoveOn = document.querySelector(".move-on")
let buttonMoveOn2 = document.querySelector(".move-on2")
let part4v1 = document.querySelector(".p4v1")
let part4v2 = document.querySelector(".p4v2")
let part5v1 = document.querySelector(".p5v1")
let part5v2 = document.querySelector(".p5v2")
buttonDecline.onclick = function() {
  part4v1.style.display = "block"
  part3v2.style.display = "none"
}
buttonMoveOn.onclick = function() {
  part5v1.style.display = "block"
  part4v1.style.display = "none"
}
buttonAccept.onclick = function() {
  part4v2.style.display = "block"
  part3v2.style.display = "none"
}
buttonMoveOn2.onclick = function() {
  part5v2.style.display = "block"
  part4v2.style.display = "none"
}

let buttonPray = document.querySelector(".death")
let buttonServant = document.querySelector(".servant")
let buttonRebel = document.querySelector(".rebel")
let finalPart = document.querySelector(".p6")
buttonPray.onclick = function() {
  finalPart.style.display = "block"
  part5v1.style.display = "none"

}
buttonServant.onclick = function() {
  finalPart.style.display = "block"
  part5v2.style.display = "none"
}
buttonRebel.onclick = function() {
  finalPart.style.display = "block"
  part5v2.style.display = "none"
}

let buttonFight = document.querySelector(".fight")
let part5h1 = document.querySelector(".p5h1")
buttonFight.onclick = function (){
  buttonRebel.style.display="none"
  p5h1.innerHTML = "You angered the popular kid";
  p5p.innerHTML = "He expects you to pay with retribution"
  buttonFight.style.display = "none"
  body.style.color = "#DC143C"
}

let buttonReincarnate = document.querySelector(".reincarnate")
buttonReincarnate.onclick = function() {
  finalPart.style.display = "none"
  part1.style.display = "block"
  
  body.style.color = "#000000"
  buttonRebel.style.display ="block"
  p5h1.innerHTML = "You agreed to being his friend (p2)"
  p5p.innerHTML = "Since you're the friend of the popular kid, he expects you to do everything he says, or else [we can leave that up to your imagination]"
}