var screenTimer;
document.onmousemove = resetTimer;

window.onload = function() {
	screenTimer = setTimeout(inactive, 2000);
};

function inactive() {
	// screen saver goes here
	$('body').fadeOut(900, function() {
		document.body.style.display = "none";
	});
}

function resetTimer(e) {
	// undo screen saver here
	document.body.style.display = "block";
	// reset timer
	clearTimeout(screenTimer);
	screenTimer = setTimeout(inactive, 2000);
}

