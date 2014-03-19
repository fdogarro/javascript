function init() {
	var firstName = document.getElementById('fname');
	firstName.value = 'Dog';
	console.log(firstName.value);

	var pickList = document.getElementById('industry');
	console.log(pickList.options[0].value);
}

window.onload = processForm;

function processForm() {  
	var firstName = document.getElementById('fname');
	var lastName = document.getElementById('lname');
	var age = document.getElementById('age');
  console.log(' Hello ' + firstName.value + '' + lastName.value + ' you are ' + age.value + ' years old! ')
}

function init () {
	var myButton = document.getElementById('btnProcess');
	myButton.addEventListener('click', processForm)
}

// Call init function after document loads.
window.onload = init;

