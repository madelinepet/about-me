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
  console.log('Keep trying!');
}


var myAge = prompt('Do you think I am older than 25?').toLowerCase();
//many ways to say yes, check for lots. || matches one or other, && matches both
if(myAge === 'yes') {
  alert ('No, I am younger than 25!')
} else {
alert ('You are correct! I am 24.');
}

// if( first condition) {
//   do this;
// } else if (second condition) {
//   do this;
// } else {
//     do this;
// }

