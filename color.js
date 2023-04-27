var nums=6;
var colors= generateColors();
var pickColor= colors[Math.floor(Math.random()*nums)];

var h1= document.querySelector("#h1");
var square= document.querySelectorAll("#square");
var displayColor= document.querySelector(".displayColor");
var message= document.querySelector(".message");
var newColor= document.querySelector('.btn1');
var easy= document.querySelector('.btn2');
var hard= document.querySelector('.btn3');

displayColor.textContent= pickColor;
changeColors();

function randomColor(){
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}

function generateColors(){
	var arr= [];
	for(var i=0; i<nums; i++){
		arr.push(randomColor());
	}
	return arr;
}

function changeColors(){
  for (var i=0; i<square.length; i++){
	square[i].style.background= colors[i];
	square[i].addEventListener("click", function(){
		clickedColor= this.style.background;
		if(pickColor===clickedColor){
			for(var j=0; j<nums; j++){
				square[j].style.background=clickedColor;
				message.textContent= "Correct.";
				newColor.textContent="Play Again?";
				h1.style.background= clickedColor;
			}
		} else{
			this.style.background="#232323";
			message.textContent= "Try Again!"
		}
	});
  }
}

function reset(){
	colors= generateColors();
	pickColor= colors[Math.floor(Math.random()*nums)];
    displayColor.textContent= pickColor;
    newColor.textContent="New Colors?"
    changeColors();
    message.textContent= "";
    h1.style.background= "steelblue";
}

newColor.addEventListener("click", function(){
	reset();
});

easy.addEventListener("click", function(){
	nums=3;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	reset();
	square[3].style.display="none";
	square[4].style.display="none";
	square[5].style.display="none";
});

hard.addEventListener("click", function(){
	nums=6;
	hard.classList.add("selected");
	easy.classList.remove("selected");
	reset();
	square[3].style.display="block";
	square[4].style.display="block";
	square[5].style.display="block";
});