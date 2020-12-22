
let https="https:/" + "/";
let gstatic="encrypted-tbn0.gstatic.com/images?q=tbn:"
let usqp="&usqp=CAU";

let sou;
let audio = document.getElementById("audio");


let songs = [
'Likha Hai Teri Aankhon Mein#Lata Mangeshkar, Kishore Kumar#ANd9GcQ7GM0S3UuGWGGKFcVZJ78TnzwVNmbTsWP2GA',

'Achha ji main haari chalo#Mohammed Rafi, Asha Bhosle#ANd9GcQv7yrCvgePHK4JKE9878i74BQb1DbS7qic3Q',

'Hai apna dil toh awara#Hemant Kumar#ANd9GcSU8sPI4EatvS1qrlpEThuBnAZ9gTTMM7Y9cw',

'Khwaab Ho Tum Ya Koi Haqeeqat#Kishore Kumar#ANd9GcQ7GM0S3UuGWGGKFcVZJ78TnzwVNmbTsWP2GA'
]

let noOfSongs= songs.length - 1;

function select(source){
			sou = source;
			let	sName = songs[sou];
			let splitted = sName.split("#");
			let labelIMG =https + gstatic + splitted[2] + usqp;
    let tiTle = splitted[0];
				console.log(sName);				
		audio.src ="s/" + splitted[0] + ".mp3";
				 audio.play();
				 console.log(labelIMG);
				 				 document.getElementById("title").innerHTML=tiTle;
document.getElementById("labelIMG").src=labelIMG;
document.getElementById("author").innerHTML=splitted[1];
}









function next(){
				if(sou >= noOfSongs){
				sou = 0;
				select(sou);
			
				
} else{
				select(sou + 1);
				
}

}

function prev(){
				if(sou <= 0){
				sou = noOfSongs;
				select(sou);
} else{
				select(sou - 1);
}

}



function backward(){
audio.currentTime =	audio.currentTime - 10;
audio.play();
}

function forward(){ 
audio.currentTime =	audio.currentTime + 10;
audio.play();
}




audio.addEventListener("ended",
				function(){ 

if(sou >= noOfSongs){
				sou = 0;
				select(sou);
} else{
				select(sou + 1);
}
				 });
				 


function togglePlay() { 
if (audio.paused) {  
playPause.classList='fa fa-pause';
audio.play();
} else { 
 playPause.classList='fa fa-play';
 audio.pause();
 } 
 };



audio.onplaying = function() {
  isPlaying = true;
  playPause.classList='fa fa-pause';
};
audio.onpause = function() {
  isPlaying = false;
  playPause.classList='fa fa-play';
};



/*
function togglePlay() {
				 isPlaying ? audio.pause() : audio.play(); 
				 };
				 audio.onplaying = function() { 
				 				isPlaying = true;
				 				playPause.classList='fa fa-pause';
				 				}; 
				 				audio.onpause = function() { 
				 								isPlaying = false; 
				 								playPause.classList='fa fa-play';
				 								};

*/

/*audio.addEventListener('timeupdate', function(ev){
console.log("Current time", this.currentTime);});*/






audio.addEventListener('timeupdate', function() {

let dura = audio.currentTime;

var mins = Math.floor(dura / 60);
    if (mins < 10) {
      mins = '0' + String(mins);
    }
    var secs = Math.floor(dura % 60);
    if (secs < 10) {
      secs = '0' + String(secs);
    }

document.getElementById("currentTime").innerHTML= mins + ":" + secs + " /" ;

});



audio.onloadedmetadata = function() {

let dura = audio.duration;

var mins = Math.floor(dura / 60);
    if (mins < 10) {
      mins = '0' + String(mins);
    }
    var secs = Math.floor(dura % 60);
    if (secs < 10) {
      secs = '0' + String(secs);
    }

document.getElementById("duration").innerHTML= mins + ":" + secs;

};







let playCircle = document.querySelector(".playCircle"); 
let playIcon = document.getElementById("playIcon");
let elemHeight = playCircle.offsetHeight;
let pos=elemHeight/2; 
playIcon.style.top=pos;
console.log(elemHeight + ' '+pos)
