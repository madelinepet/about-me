'use strict';

//if/else
//pseudocode
//if (some condition is met) {
// do this
// } else {
// do something different
// }

var petQuestion = parseInt(prompt('How many pets do you think I have? Please enter a number.'));
if(petQuestion === 2){
  alert('Correct! I have two kittens named Ruby and Sid, short for Obsidian! ');
} else {
  alert ('Nope!');
  console.log('Keep trying! The user probably cannot see this, but the answer is 2.');
}


var myAge = prompt('Do you think I am older than 25?').toLowerCase();
// many ways for user to say type yes, check for lots. || matches one or other, && matches both
if(myAge === 'yes') {
  alert ('No, I am younger than 25!')
  console.log('The answer here should be no');
} else {
alert ('You are correct! I am 24.');
}

var myTravels = prompt('Have I been to Autralia?').toLowerCase();
if(myTravels === 'yes') {
alert ('Unfortunately, no! I would love to go, though!');
}else{
alert('You are correct! My favorite trip was probably to Copenhagen, but I would love to go to Australia and New Zealand, though!' )
}

var MyEducation = prompt('Do I have a bachelor\'s degree?').toLowerCase();
if(MyEducation === 'yes') {
  alert ('Yes. I went to Whitman College where I studied Geology and minored in Anthropology. Can you tell from my cats\' names?');
} else {
  alert('I actually do. I went to Whitman College where I studied Geology and minored in Anthropology. Can you tell from my cats\' names?');
}


