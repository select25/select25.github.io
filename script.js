window.mySwipe = new Swipe(document.getElementById('slider'));



let sou;
let audio = document.getElementById("audio");


let songs = [
's/Likha Hai Teri Aankhon Mein.mp3',
's/Achha ji main haari chalo maan jao na.mp3',
's/Hai apna dil to awara.mp3',
's/Khwaab Ho Tum Ya Koi Haqeeqat.mp3'
]

let noOfSongs= songs.length - 1;

function select(source){
			sou = source;
			let	sName = songs[sou];
				console.log(sName);				
		audio.src = sName;
				 audio.play();
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
