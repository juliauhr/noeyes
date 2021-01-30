var level = 0;
var glass = document.getElementById('glass');
var dude = document.getElementById('dude');
var clicks = 0;

document.getElementById("playButton").addEventListener("click", level0);

function level0(){
  document.getElementById('text1').style.color = 'gainsboro';
  document.getElementById('imageContainer').style.visibility = 'visible';
  dude.style.width = '3300px';
  dude.style.transform = 'translate(-1620px, -1875px)';
  glass.style.display = "none";
  document.getElementById('playButton').style.display = "none";
  document.getElementById('nextButton').style.display="block";

  document.getElementById("kand0b").addEventListener("click", function(){
    var ping = new Audio('ping1.wav');
    ping.play();
    this.style.pointerEvents = 'none';
    this.style.transform = 'rotate(90deg)';
    document.getElementById('kand0a').style.top = '40%';
    document.getElementById('kand0a').style.left = '63%';
    setTimeout(function() {var ping = new Audio('ping2.wav'); ping.play();}, 2000);
    setTimeout(function() {var ping = new Audio('ping3.wav'); ping.play();}, 4000);
    setTimeout(function() {nextLevelReady()}, 4000);
  });
}

function level1(){
  document.getElementById("kand1a").addEventListener("click", function(){
    var ping = new Audio('ping1.wav');
    ping.play();
    clicks++;
    this.style.height = '80px';
    this.style.pointerEvents = 'none';
    if(winCheck(3)){
      nextLevelReady();
    }
  });

  document.getElementById("kand1b").addEventListener("click", function(){
    var ping = new Audio('ping2.wav');
    ping.play();
    clicks++;
    this.style.top = '450px';
    setTimeout(function() {var ping = new Audio('ping3.wav'); ping.play();}, 2000);
    this.style.pointerEvents = 'none';
    if(winCheck(3)){
      nextLevelReady();
    }
  });

  document.getElementById("kand1c").addEventListener("click", function(){
    var ping = new Audio('ping2.wav');
    ping.play();
    clicks++
    this.style.display = 'none';
    this.style.pointerEvents = 'none';
    if(winCheck(3)){
      nextLevelReady();
    }
  });
}

function level2(){
  document.getElementById("kand2a").addEventListener("click", function(){
    clicks++;
    var ping = new Audio('ping3.wav');
    ping.play();
    this.style.transform = 'rotate(180deg)';
    document.getElementById("kand2c").style.left = '50px';
    document.getElementById("kand2c").style.width = '0px';
    this.style.pointerEvents = 'none';
    if(winCheck(2)){nextLevelReady();}
  });

  document.getElementById("kand2b").addEventListener("click", function(){
    clicks++;
    var ping = new Audio('ping2.wav');
    ping.play();
    this.style.height = '100px';
    this.style.pointerEvents = 'none';
    if(winCheck(2)){nextLevelReady();}
  });
}

function level3(){
  document.getElementById("button3a").addEventListener("click", function(){
    clicks++;
    var ping = new Audio('ping1.wav');
    ping.play();
    document.getElementById("kand3a").style.transform = 'rotate(360deg)';
    this.style.pointerEvents = 'none';
    setTimeout(function(){document.getElementById("kand3a").style.display='none';}, 4000);
    if(winCheck(3)){setTimeout(function(){nextLevelReady();}, 4000);}
  });
  document.getElementById("button3b").addEventListener("click", function(){
    clicks++;
    var ping = new Audio('ping2.wav');
    ping.play();
    document.getElementById("kand3b").style.transform = 'rotate(360deg)';
    this.style.pointerEvents = 'none';
    setTimeout(function(){document.getElementById("kand3b").style.display='none';}, 4000);
    if(winCheck(3)){setTimeout(function(){nextLevelReady();}, 4000);}
  });
  document.getElementById("button3c").addEventListener("click", function(){
    clicks++;
    var ping = new Audio('ping3.wav');
    ping.play();
    document.getElementById("kand3c").style.transform = 'rotate(-360deg)';
    this.style.pointerEvents = 'none';
    setTimeout(function(){document.getElementById("kand3c").style.display='none';}, 4000);
    if(winCheck(3)){setTimeout(function(){nextLevelReady();}, 4000);}
  });
}

function level4(){
  document.getElementById("eye0").addEventListener("click", function(){
    clicks++;
    var ping = new Audio('ping1.wav');
    ping.play();
    this.style.pointerEvents = 'none';
    this.style.width = '200px';
    setTimeout(function(){document.getElementById("eye0").style.top = '-300px';}, 2000);
    if(clicks>2){moveBoat();}
  });
  document.getElementById("eye1").addEventListener("click", function(){
    clicks++;
    var ping = new Audio('ping2.wav');
    ping.play();
    this.style.pointerEvents = 'none';
    this.style.width = '200px';
    setTimeout(function(){document.getElementById("eye1").style.top = '-300px';}, 2000);
    if(clicks>2){moveBoat();}
  });
  document.getElementById("eye2").addEventListener("click", function(){
    clicks++;
    var ping = new Audio('ping3.wav');
    ping.play();
    this.style.width = '200px';
    this.style.pointerEvents = 'none';
    setTimeout(function(){document.getElementById("eye2").style.top = '-300px';}, 2000);
    if(clicks>2){moveBoat();}
  });
  document.getElementById("kand4a").addEventListener("click", function(){
    clicks++;
    var ping = new Audio('ping1.wav');
    ping.play();
    this.style.pointerEvents = 'none';
    this.style.left = '550px';
    setTimeout(function(){
      document.getElementById("kand4b").style.width = '0px';
      document.getElementById("kand4b").style.transform = 'translate(465px, 175px)';
    }, 3000);
  });
  document.getElementById("eye3").addEventListener("click", function(){
    clicks++;
    var ping = new Audio('ping3.wav');
    ping.play();
    this.style.pointerEvents = 'none';
    this.style.width = '200px';
    setTimeout(function(){document.getElementById("eye3").style.top = '-300px';}, 2000);

    setTimeout(function(){nextLevelReady();}, 2000);
  });

  function moveBoat(){
    document.getElementById("kand4a").style.left = '90px';
  }
}

function level5(){
  document.getElementById("credits").addEventListener("click", function(){
    this.style.width = '120px';
    this.style.transform = 'translate(105px, 180px)';
    this.style.fontSize = '7px';
    this.style.pointerEvents = 'none';
    dude.style.width = '700px';
    dude.style.transform = 'translate(-50px, -100px)';
  });
}

function nextLevelReady(){
  document.getElementById('nextButton').style.visibility = 'visible';
}

function winCheck(num){
  if(clicks > num-1){
    var win = true;
  }else{
    var win = false;
  }
  return win;
}


const onMouseMove = (e) =>{
  glass.style.left = e.pageX + 'px';
  glass.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);

document.getElementById("nextButton").addEventListener("click", nextLevel);

/*nextLevel();
nextLevel();
nextLevel();
nextLevel();*/

function nextLevel(){
  clicks = 0;
  var lastLevel = document.getElementById('game'+level);
  lastLevel.style.width = '0px';
  var kids = lastLevel.getElementsByTagName('img');
  for(var i=1; i<kids.length; i++){
    kids[i].style.display = 'none';
  }

  setTimeout(function(){lastLevel.style.display='none';}, 3000);
  document.getElementById('nextButton').style.visibility="hidden";
  level++;
  if(level == 1){
    level1();
  }else if(level == 2){
    level2();
  }else if(level == 3){
    level3();
  }else if(level == 4){
    level4();
  }else if(level == 5){
    level5();
  }
}
