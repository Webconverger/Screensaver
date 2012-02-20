var screenTimer;
document.onmousemove = resetTimer;

window.onload = function() {
	screenTimer = setTimeout(inactive, 2000);
};

function inactive() {
	// screen saver goes here
	$('#main').fadeOut(900, function() {
		$('#main').css("display", "none");
		$('#screensaver').css("display", "block");
	});
}

function resetTimer(e) {
	// undo screen saver here
	$('#main').css("display", "block");
	$('#screensaver').css("display", "none");
	// reset timer
	clearTimeout(screenTimer);
	screenTimer = setTimeout(inactive, 2000);
}

