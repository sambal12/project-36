var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background(rgb(163, 144, 209));

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
