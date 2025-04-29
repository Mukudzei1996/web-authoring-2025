var guest = prompt("Welcome! Please enter your name.");
document.write("<h2>Welcome to my page, " + guest + "!</h2>")

// This function changes the style of the page

function changeStyle(newStyle){
	document.getElementById('color').setAttribute('href', newStyle);
}