video = document.createElement('video');
video.setAttribute('src', '/movie.webm');
video.setAttribute('loop', 'loop');

function attract() {
	document.body.appendChild(video);
	video.play();
	// prefs=http://ppd.webconverger.com/2013/attract.js
	video.mozRequestFullScreen();
}

var screenTimer;
document.onmousemove = resetTimer;
document.onkeypress = resetTimer;

window.onload = function() {
	screenTimer = setTimeout(inactive, 2000);
};

function inactive() {
	attract();
}

function resetTimer(e) {
	console.log(video);
	document.body.removeChild(video);
	clearTimeout(screenTimer);
	screenTimer = setTimeout(inactive, 2000);
}

