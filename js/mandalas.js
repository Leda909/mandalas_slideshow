texts = ["The Self Love mandala.<br>The division of the circle by six, and the green and pink colours is the simbol of the heart chacra. This chackra means love, affirmation, acceptance. The golden orange adds an extra solemn, cheerful mood to the mandala.",
"The Spiritual Blossoming mandala.<br>In the middle, the six-times repeated flowers and green leafes come into a bouquet, which just shining out from the dark spiritual purple. This dark colour combination gives a mistic feeling to the mandala.",
"The Affection Pain mandala.<br>It is a six-pionted mandala, with the mixture of smaragd, lihght-purpule and lazac colours. From the centrum, the roundish forms transforms into sharp egges. Those egges simbolizing the pain, and the rest of other are the affirmation.",
"The Svadhisthana Meditation mandala.<br>Svadhisthana is the third eye's chacra. Their colour is the indigo, purple and blue.",
"The Chirping Chit-Chat mandala.<br>Twelve happy-yellow birds are chirping on the light-blue area. Actualy, blue is a colour of communication.",
"The Self-Esteem mandala.<br>Being loved and harmonic with themself, says this mandala, by their roundish forms, smaragdish colours and four-pointed stracture."];


titles = ["Self-love","Spiritual blossoming","The affectionate pain","Svadhisthana meditation","Chirping chit-chat","Self-esteem"];

// JavaScript Document
	//  variable to hold the current image number
	var current = 1;
	// variable to hold the setInterval timer
	var timer;
	// This function will adjust the image height according to window size.
	var  mainImage, arrowLeft, arrowRight;


function init(){

	mainImage = document.getElementById("mainimg")
	
	arrowLeft = document.getElementById("left-arrow");
	arrowRight = document.getElementById("left-arrow");

//	document.getElementsByClassName("thumbs")[0].style.border ="2px solid red";
	document.getElementsByClassName("thumbs")[0].style.opacity ="1";
}


//--------------------------------------------------------------------//
// These  3 functions are for mouse over links // 
function changeImage(currentImg){
	
	// depending of which string had been passed to the function (and placed in the picture variable),
	// the current variable is set to a certain number corresponding to the image number (ie 1.jpg)
	 
	if (currentImg.id == "1"){
		current = 1;	
		document.getElementById('title').innerHTML = titles[0];	
		document.getElementById('text').innerHTML = texts[0];
		console.log(titles[0]);
	} else if (currentImg.id == "2"){
		current = 2
		document.getElementById('title').innerHTML = titles[1];	
		document.getElementById('text').innerHTML = texts[1];
	} else if (currentImg.id == "3"){
		current = 3;		
		document.getElementById('title').innerHTML = titles[2];	
		document.getElementById('text').innerHTML = texts[2];
	} else if (currentImg.id == "4"){
		current = 4;		
		document.getElementById('title').innerHTML = titles[3];
		document.getElementById('text').innerHTML = texts[3];	
	} else if (currentImg.id == "5"){
		current = 5;		
		document.getElementById('title').innerHTML = titles[4];	
		document.getElementById('text').innerHTML = texts[4];
	} else if (currentImg.id == "6"){
		current = 6;		
		document.getElementById('title').innerHTML = titles[5];	
		document.getElementById('text').innerHTML = texts[5];
		
	}
    
	currentImg.style.opacity = "1"
	//currentImg.style.border ="2px solid red"
	
	for(var i= 1;i<6; i++ ){

		if(i!=currentImg.id){
			document.getElementById(i).style.opacity = "0.5"
	//		document.getElementById(i).style.border ="2px solid white"
		}
	}
	
	currentImg.onmouseout = null;
}


function previewImage(currentImg){
	// the image src is set to the value passed in new
	mainImage.src = "images/" + currentImg.id + ".jpg";
	currentImg.style.opacity = "1"
//	currentImg.style.border ="2px solid red"


if (currentImg.id == "1"){
	current = 1;	
	document.getElementById('title').innerHTML = titles[0];	
	document.getElementById('text').innerHTML = texts[0];
	console.log(titles[0]);
} else if (currentImg.id == "2"){
	current = 2
	document.getElementById('title').innerHTML = titles[1];	
	document.getElementById('text').innerHTML = texts[1];
} else if (currentImg.id == "3"){
	current = 3;		
	document.getElementById('title').innerHTML = titles[2];	
	document.getElementById('text').innerHTML = texts[2];
} else if (currentImg.id == "4"){
	current = 4;		
	document.getElementById('title').innerHTML = titles[3];
	document.getElementById('text').innerHTML = texts[3];	
} else if (currentImg.id == "5"){
	current = 5;		
	document.getElementById('title').innerHTML = titles[4];	
	document.getElementById('text').innerHTML = texts[4];
} else if (currentImg.id == "6"){
	current = 6;		
	document.getElementById('title').innerHTML = titles[5];	
	document.getElementById('text').innerHTML = texts[5];
	
}
}


function revertImage(currentImg){

	mainImage.src = "images/" + current + ".jpg";
	currentImg.style.opacity = "0.5"

	document.getElementById('title').innerHTML = titles[0];	
		document.getElementById('text').innerHTML = texts[0];
		console.log(titles)
	//currentImg.style.border ="2px solid white"
}


//--------------------------------------------------------------------//
//  These functions are dedicated to play and stop slide show  //

function start(){
	

	arrowLeft.style.opacity = "0.2";
	arrowRight.style.opacity = "0.2";

	// when the start is pressed, a setInterval is set up, calling the newPic function every 3 seconds
	timer = setInterval(function(){
		fadeIn(mainImage.id);
		newPic()
	},3000)
	stopBtn.disabled = false
	stopBtn.style.cursor = "pointer";



var imgs = document.getElementsByTagName('img');

	for (var i=0; i < imgs.length; i++)
	{

	// Or you can do like this.........: 
	   imgs[i].onclick = null;
	   imgs[i].onmouseover = null;
	
    // Or
	//imgs[i].setAttribute("onmouseover", null);
	//imgs[i].setAttribute("onclick", null);

		if(imgs[i].id!="image"){
				imgs[i].style.cursor = "not-allowed";
		}
	
	}
  
}



function stop(){
	location.reload();
}



function newPic(){

	// if the current image is not the last one (ie 5), then move it to the next one
	if (current<6)	{
		current = current + 1;
		
	} else {
		current = 1;
}
	
	// the image src is then changed to the current value
	document.getElementById("mainimg").src = "images/" + current + ".jpg";
	changeThumbsForward();    
}


function changeThumbsForward(){

		//document.getElementById(current).style.border = "2px solid red";
		document.getElementById(current).style.opacity = "1" ;

   	
		
		if(current==1){
			//document.getElementById(5).style.border = "2px solid white";
			document.getElementById(5).style.opacity = "0.5" ;
		}
		else {
			//document.getElementById(current-1).style.border = "2px solid white";
			document.getElementById(current-1).style.opacity = "0.5" ;
		}
}

function changeThumbsBackward(){

		//document.getElementById(current).style.border = "2px solid red";
		document.getElementById(current).style.opacity = "1" ;
		
		if(current==6){
		//	document.getElementById(1).style.border = "2px solid white";
			document.getElementById(1).style.opacity = "0.5" ;}
				
			else {
			// document.getElementById(current+1).style.border = "2px solid white";
			document.getElementById(current+1).style.opacity = "0.5" ;
		}
}


function nextPic(){
	if(current!=6){
		newPic();
		changeTitle();
	}
}


function prevPic(){
		
		if(current!=1){
			current = current - 1;
			changeThumbsBackward()	
			changeTitle();	
		}

	document.getElementById("mainimg").src = "images/" + current + ".jpg";
}


function fadeIn(id) {
	var element =  document.getElementById(id);
	var op = 0.1;  // initial opacity
	var timer = setInterval(function () {
		if (op >= 1){
			clearInterval(timer);
		}
		element.style.opacity = op;
		element.style.filter = "alpha(opacity=" + op * 100 + ")";
		op += op * 0.1;
	}, 40);
}



function changeTitle(){
	// depending of which string had been passed to the function (and placed in the picture variable),
	// the current variable is set to a certain number corresponding to the image number (ie 1.jpg)
	 
	if (current == 1){
			
		document.getElementById('title').innerHTML = titles[0];	
		document.getElementById('text').innerHTML = texts[0];
		console.log(titles[0]);
	} else if (current == 2){
	
		document.getElementById('title').innerHTML = titles[1];	
		document.getElementById('text').innerHTML = texts[1];
	} else if (current == 3){
			
		document.getElementById('title').innerHTML = titles[2];	
		document.getElementById('text').innerHTML = texts[2];
	} else if (current == 4){
			
		document.getElementById('title').innerHTML = titles[3];	
		document.getElementById('text').innerHTML = texts[3];
	} else if (current == 5){
				
		document.getElementById('title').innerHTML = titles[4];
		document.getElementById('text').innerHTML = texts[4];	
	} else if (current == 6){
			
		document.getElementById('title').innerHTML = titles[5];	
		document.getElementById('text').innerHTML = texts[5];	
	}
}