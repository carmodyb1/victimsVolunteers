// Prompt user for how many disaster victims exist; then create an array for each victim, 
// and then loop through the same 3 questions for each victim

// Questions:
//Create arrays; create loop that loops 3 times; then populate an arrya with dummy data;
// then populate array with responses to prompts re. name, number street



// Victims
var vicNumber = prompt("How many disaster victims are there?");
var vicName = [];
var vicPhone = [];
var vicStreet = [];


for (var i = 0; i<vicNumber; i++) {
	vicName.push(prompt("Victim name"));
	vicPhone.push(prompt("Victim telephone number"));
	vicStreet.push(prompt("Victim street name"));
};


console.log("Here are the victims: " + vicName);
console.log("Here are their telephone numbers: " + vicPhone);
console.log("Here are their street names: " + vicStreet);




// Volunteers
var volNumber = prompt("How many volunteers are there?");
var volName = [];
var volPhone = [];
var volStreet = [];


for (var i = 0; i<volNumber; i++) {
	volName.push(prompt("Volunteer name"));
	volPhone.push(prompt("Volunteer telephone number"));
	volStreet.push(prompt("Volunteer street name"));
};


console.log("Here are the volunteers: " + volName);
console.log("Here are their telephone numbers: " + volPhone);
console.log("Here are their street names: " + volStreet);



// Display information
alert("There are " + vicNumber + " victims and " + volNumber + 
	" volunteers.\nVictims are as follows: " + vicName.join(", ") + "\nVolunteers are as follows: " + volName.join(", "));




// Object approach - not used
// var victims {
//   name:     ,
//   phoneNumber:    , 
//   street:      ,
// }
