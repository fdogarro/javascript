// Point of entry
function init(){
	for (var i = 1; i <= 4; i++) {
		var myPrettyImage = document.createElement('img');
		myPrettyImage.src = i + '.jpg';
		document.body.appendChild(myPrettyImage);
		
	}
}

window.onload = init;