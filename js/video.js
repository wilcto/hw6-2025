var video = document.querySelector(".video");
let volume = document.querySelector("#volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.setAttribute("autoplay", "false");
	video.setAttribute("loop", "false");

	console.log("Autoplay turned off");
	console.log("Looping turned off");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	video.volume = document.querySelector("#slider").value / 100;
	volume.innerHTML = document.querySelector("#slider").value + "%";
	console.log("Play Video with volume", video.volume);
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Playback Rate is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log("Playback Rate is ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 10 > video.duration){
		video.currentTime = 0;
	}else{
		video.currentTime = video.currentTime + 10;
	}
	
	console.log("Current video time is", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(event){
	if(event.target.innerHTML === "Mute"){
		video.muted = "true";
		event.target.innerHTML = "Unmute";
		console.log("Video muted");
	}else{
		video.muted = "false";
		event.target.innerHTML = "Mute";
		console.log("Video unmuted");
	}
});

document.querySelector("#slider").addEventListener("input", function(){
	volume.innerHTML = document.querySelector("#slider").value;
	video.volume = document.querySelector("#slider").value / 100;
	console.log("Volume changed to", video.volume);
});

document.querySelector("#vintage").addEventListener("click", function(){
	if(!video.classList.contains("oldSchool")){
		video.classList.add("oldSchool");
		console.log(video.classList);
	}
});

document.querySelector("#orig").addEventListener("click", function(){
	if(video.classList.contains("oldSchool")){
		video.classList.remove("oldSchool");
		console.log(video.classList);
	}
});