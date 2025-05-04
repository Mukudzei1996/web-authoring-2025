//Prompt the user for their name and display a welcome message
var guest = prompt("Welcome! Please enter your name.");
document.write("<h2>Welcome to my page, " + guest + "!</h2>")

// This function changes the theme of the page
function changeStyle(newStyle){
	document.getElementById('color').setAttribute('href', newStyle);
}