window.onload = function(){
var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;

  var canvas = document.getElementById("ctx");
  var ctx = canvas.getContext("2d");
var canvast = document.getElementById("ctxt");
  var ctxt = canvas.getContext("2d");

canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
canvast.width = window.innerWidth;
  canvast.height = window.innerHeight;
WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;


var screens = new Image(WIDTH,HEIGHT);
  screens.src = "screens.png";
  var currentScreen = "menu";
var darknessmu = new Audio("darkness music.wav");
  darknessmu.loop = true;

setInterval(update,50);
  function update(){
    ctx.clearRect(0,0,WIDTH,HEIGHT);

screenUpdate();
    musicUpdate();

  }
  function musicUpdate(){
if(currentScreen === "menu"){
     darknessmu.play();
     }

  }
  function screenUpdate(){
    if (currentScreen == "menu"){
      ctx.drawImage(screens,0,0,1280,722,0,0,WIDTH,HEIGHT);
      setTimeout(function(){
      var randomchange = Math.floor(Math.random() * 6);
      if (randomchange == 1){
ctx.drawImage(screens,0,0,1280,722,0,0,WIDTH,HEIGHT);


      }

if (randomchange == 2){
ctx.drawImage(screens,0,0,1280,722,0,0,WIDTH,HEIGHT);


      }
if (randomchange == 3){
ctx.drawImage(screens,0,722,1280,722,0,0,WIDTH,HEIGHT);


      }
if (randomchange == 4){
ctx.drawImage(screens,2166,722,1280,722,0,0,WIDTH,HEIGHT);


      }



      },Math.floor(Math.random() * (2 - 6)));
      ctxt.font = "30px Georgia";
      ctxt.fillStyle = "white";

      ctxt.fillText("Start new game",25,200);
      ctxt.fillText("Quit game",25,250);
document.addEventListener("click", startNewGame);

        }


  }
  function startNewGame(e){
if(e.clientX > 30 && e.clientX < 215 && e.clientY < 250 && e.clientY > 185 ){

    alert("painoit: x: " + e.clientX + " y: " + e.clientY);

}

  }

}