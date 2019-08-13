// When the page loads
function pageLoad() {
	resetFunction();
	resetMath();
	parParagraph();
}

// 
function resetMath() {
	document.getElementById('addOutput').innerHTML = '';
	document.getElementById('subOutput').innerHTML = '';
	document.getElementById('mulOutput').innerHTML = '';
	document.getElementById('divOutput').innerHTML = '';
	document.getElementById('numA').value = '';
	document.getElementById('numB').value = '';
	document.getElementById('answerBox').value = '';
	document.getElementById('answerBox').style.backgroundColor = '#FFCC66';
  document.getElementById('displayBox').style.backgroundColor = '#FFFFFF';
}



function myFunction() {
	document.getElementById('demo').innerHTML = 'Paragraph changed.';
}

function resetFunction() {
	document.getElementById('demo').innerHTML = 'A paragraph.';
}

// The argument being passed in is which mathmatical function to be performed
// by one of the four functions listed below this one. 
function doMath(funcToInvoke){
	var color = '#33CC33';
	var a = parseInt(document.getElementById('numA').value);
	var b = parseInt(document.getElementById('numB').value);
	var z = funcToInvoke(a, b);
	document.getElementById('answerBox').value = z;
	document.getElementById('answerBox').style.backgroundColor = color;
}

function addNumTwo(a, b) {
	return a + b;
}

function subNumTwo(a, b) {
	return a - b;
}

function mulNumTwo(a, b) {
	return a * b;
}

function divNumTwo(a, b) {
	return a / b;
}

function addNum() {
	var a = parseInt(document.getElementById('numA').value);
	var b = parseInt(document.getElementById('numB').value);
	var z = a + b;
	document.getElementById('addOutput').innerHTML = z;
}

function subNum() {
	var a = document.getElementById('numA').value;
	var b = document.getElementById('numB').value;
	var z = a - b;
	document.getElementById('subOutput').innerHTML = z;
}

function mulNum() {
	var a = document.getElementById('numA').value;
	var b = document.getElementById('numB').value;
	var z = a * b;
	document.getElementById('mulOutput').innerHTML = z;
}

function divNum() {
	var a = document.getElementById('numA').value;
	var b = document.getElementById('numB').value;
	var z = a / b;
	document.getElementById('divOutput').innerHTML = z;
}

function parParagraph() {
  if(document.getElementById('london').checked){
    parLondon();
	
  }
  else if(document.getElementById('paris').checked){
    parParis();
  }
  else if(document.getElementById('tokyo').checked){
    parTokyo();
  }
}

function parLondon() {
	document.getElementById('cityh2').innerHTML = 'London'
    document.getElementById('cityp').innerHTML = 'London is the capital of England. It is the most populous city in the United Kingdom,' + 
	'with a metropolitan area of over 13 million inhabitants.<br><br> Standing on the River Thames,' +
	'London has been a major settlement for two millennia, its history going back to its ' +
	'founding by the Romans, who named it Londinium.'
	var urlString = 'url(london22.jpg)';
	document.getElementById('citypic').style.backgroundImage = urlString;
}


function parParis() {
	document.getElementById('cityh2').innerHTML = 'Paris'
    document.getElementById('cityp').innerHTML = 'Paris is the capital and most populous city of France. ' +
	'Situated on the Seine River, it is at the heart of the &#206le-de-France region, also known as the r&#233gion ' + 
	'parisienne.<br><br> ' +
	'Within its metropolitan area is one of the largest population centers in Europe, '   +
	'with over 12 million inhabitants.'
	var urlString = 'url(Paris.jpg)';
	document.getElementById('citypic').style.backgroundImage = urlString;
}

function parTokyo() {
	document.getElementById('cityh2').innerHTML = 'Tokyo'
    document.getElementById('cityp').innerHTML = 'Tokyo is the capital of Japan, the center of the Greater '     + 
	'Tokyo area, and the most populous metropolitan area in the world. It is the seat of the Japanese Imperial ' + 
	'Palace, and the home of the Japanese Imperial Family.<br><br> The Tokyo prefecture is part of the world\'s most '    +
	'populous metropolitan area with 38 million people and the world\'s largest urban economy.'
	var urlString = 'url(Tokyo.jpg)';
	document.getElementById('citypic').style.backgroundImage = urlString;
}

// This helps to show how a parameter can be used to select a function 
function colorChange(colorPicked) {
  
	if(colorPicked == 'green') {
		turnGreen();
	}
	else if(colorPicked == 'blue') {
		turnBlue();
	}
	else if(colorPicked == 'yellow') {
		turnYellow();
	}
	else if(colorPicked == 'red') {
		turnRed();
	}
}

function turnGreen() {
	document.getElementById('displayBox').style.backgroundColor = '#33CC33';
}

function turnBlue() {
	document.getElementById('displayBox').style.backgroundColor = '#0033CC';
}

function turnYellow() {
	document.getElementById('displayBox').style.backgroundColor = '#FFFF66';
}

function turnRed() {
	document.getElementById('displayBox').style.backgroundColor = '#FF3300';
}