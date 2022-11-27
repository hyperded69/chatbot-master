
var fade_state =true;
function customshow() {
  var x = document.getElementById("custom");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("menu")
  if (y.style.display === "block"){
    y.style.display ="none"
  }
  
  
}

function menushow() {
    var x = document.getElementById("menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    var y = document.getElementById("custom")
    if (y.style.display === "block"){
      y.style.display ="none"
    }
  }
  function bgchanger1() {
    document.getElementById("chat-container").style.backgroundImage = 'url("static/ae.jpg")';
 }
  function bgchanger2() {
    document.getElementById("chat-container").style.backgroundImage = 'url("static/ae1.jpg")';
  }
  function bgchanger3() {
    document.getElementById("chat-container").style.backgroundImage = 'url("static/ae2.jpg")';
  }
  function bgchanger4() {
    document.getElementById("chat-container").style.backgroundImage = 'url("static/ae3.jpg")';
  }
  function bgchanger5() {
    document.getElementById("chat-container").style.backgroundImage = 'url("static/ae4.jpg")';
  }