function askQuestions(){

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;
	console.log('User is called ' + fullName);

	var age = prompt ('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('user is an adult');

	} else {
		console.log('User is a child');
	}

	// if (
	// 	(firstName == 'Antonio' || firstName == 'Valentina')
	// 	&&
	// 	(topic == 'JS' || topic == 'Javascript'){
	// 		//HELLO! 
	// 	} else {
	// 		//IS ANTONIO OR TOM
	// 		//BUT NOY JS OR JAVASCRIPT
	// 	}

	// }else{
	// 	//NOT ANTONIO OR TOM
	// }
	if (firstName.toLowerCase().trim() == 'general' && lastName.toLowerCase().trim() !== 'assembly') 
	{
			console.log('Greetings, General!');

		}
		var faveColour = prompt ('What is your favourite colour?');
		faveColour = faveColour.toLowerCase().trim();
		if (faveColour == 'red'||
			faveColour == 'green'||
			faveColour == 'blue' || 
			faveColour == 'yellow') {
			$ ('h1').css('color',faveColour);
		}
		// {
		// console.log('user is not Assembly')
		// }
}
//When the page has loaded 
$(function()  {
	$('img').on('click', askQuestions);
	
	//when the user cikcs an h3
	$('H3').on('click',function(){

		// Toggle the next element 
		$(this).next().slideToggle(500);	
	
	});


});

