function wishHappyFathersDay () {
	console.log('Happy Fathers Day Pop!');
}

function wishHappyMD () {
	console.log('Happy Mothers Day Mom!');
}

wishHappyMD();

wishHappyFathersDay();

function sayHello() {
	var myString = 'Hello Andy';
	console.log (myString + ' you are 30. ');

	myString = 77;
	console.log(myString * 20 + 1 / 3);

	var dayPart = 'morning';

	var degrees= 65;

	console.log(myString + 'it is' + dayPart + '.');
	console.log(' It is ' + degrees + ' degrees outside ' + '.');
}

function addTwoNumbers (firstAddend, secondAddend){
	console.log(firstAddend+secondAddend);
}

function computeAreaTriangle(base, height){
	console.log( .5 * (base * height) );
}

function computeSimpleInterest(principal, rate, time){
	console.log(principal * rate * time);
}

function isUnderAge(age){
	if (age < 21){
		console.log('Go to kiddie pool.')
	} else if (age >= 65) {
		console.log('Come on in senior');
	} else{
		//they're bigger than 21 and also under 65
	}
}

function isFormValid(firstName, lastName){
	if (firstName == '' || lastName == '') {
		console.log('error');
	}
}

function playWithArray() {
	var salaries = [10000, 17000, 32000, 2231, 80223];
	console.log( salaries[1] );
	salaries [0]= 20000;
	console.log(salaries);


}

function playWithObject() {
	
	var president = {
		firstName: 'Barack',
		lastName: 'Obama',
		age:51,
		startYear:2008,

		children: ['Sasha', 'Malia'],

		address: {
			street: 'Pennsylvania',
			number: 1600,
			colors: ['red', 'white', 'blue']
		}

	};

	console.log( president['firstName']);
	console.log( president['children']);
	console.log( president['address'],['street']);
	console.log( president['children'] [0]);
	console.log( president.address.colors[2]);

	var address = president.address;
	var colors = address.colors;
	console.log(colors[0]);

	
}

function playWithLoops(){
	var children = ['Andy', 'Sasha', 'Malia'];
	//for(initialize; condition; update)
	for(var i = 0; i < children.length; i++){
		console.log(children[i]);

	}

	var salaries = [2000, 3000, 1000];
	//give everyone 25% raise
	for (var i = 0; i < salaries.length; i++) {
		salaries[i]= salaries[i] * 1.25;
	};

	console.log( salaries );
}






























