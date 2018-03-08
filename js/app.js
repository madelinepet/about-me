'use strict';

//define arrays to push scores into to keep track of correct and incorrect
var numCorrect =[];
var numIncorrect =[];

//get userName so I can use it in the score message
var userName = prompt('What is your name?');

//different answers for different responses. parseInt used to convert answer, which  is string, to  number to be evaluated
//toLowerCase used so that different cases in the user's answer don't influence the program's response
var petQuestion = parseInt(prompt('How many pets do you think I have? Please enter a number.'));
if(petQuestion === 2){
  alert('Correct! I have two kittens named Ruby and Sid, short for Obsidian! ');
  numIncorrect.push('Correct');
}else if (petQuestion < 2) {
  alert('No, I am an amimal lover!');
  numIncorrect.push('Incorrect');
} else {
  alert('I wish!');
  numIncorrect.push('Incorrect');
}
//When we're allowed to use fns in our labs, I will make most of this long message into one I can call instead of repeating long iterances
console.log('Question 1: you have ' + numCorrect.length + ' correct and ' + numIncorrect.length + ' wrong.');

var myAge = prompt('Do you think I am older than 25?').toLowerCase();
if(myAge === 'no') {
  alert('You are correct! I am 24.');
  numCorrect.push('Correct');
} else {
  alert('No, I am younger than 25!');
  numIncorrect.push('Incorrect');
}
console.log('Question 2: you have ' + numCorrect.length + ' correct and ' + numIncorrect.length + ' wrong.');

var myTravels = prompt('Have I been to Australia?').toLowerCase();
if(myTravels === 'no') {
  alert('You are correct! Ever since the Lord of the Rings movies, I have wanted to go to Oceania! My favorite trip was probably to Copenhagen, but Australia and New Zealand are high on the list!' );
  numCorrect.push('Correct');
} else{
  alert ('Unfortunately, I have not! Ever since the Lord of the Rings movies, I have wanted to go to Oceania! My favorite trip was probably to Copenhagen, but Australia and New Zealand are high on the list!');
  numIncorrect.push('Incorrect');
}
console.log('Question 3: you have ' + numCorrect.length + ' correct and ' + numIncorrect.length + ' wrong.');


var MyEducation = prompt('Do I have a bachelor\'s degree?').toLowerCase();
if(MyEducation === 'yes') {
  alert ('Yes. I went to Whitman College where I studied Geology and minored in Anthropology. Can you tell from my cats\' names?');
  numCorrect.push('Correct');
} else {
  alert('I actually do. I went to Whitman College where I studied Geology and minored in Anthropology. Can you tell from my cats\' names?');
  numIncorrect.push('Incorrect');
}
console.log('Question 4: you have ' + numCorrect.length + ' correct and ' + numIncorrect.length + ' wrong.');


var doILikeHorses = prompt('Do I like horses?').toLowerCase();
if(doILikeHorses === 'yes') {
  alert ('Yes. Growing up, I rode horses and enjoyed jumping. Taking care of horses is a lot of work!');
  numCorrect.push('Correct');
} else {
  alert ('I actually do like them. I particularly enjoyed jumping while I was growing up.');
  numIncorrect.push('Incorrect');
}
console.log('Question 5: you have ' + numCorrect.length + ' correct and ' + numIncorrect.length + ' wrong.');


var iCantSwim = prompt('Do you believe me when I say I cannot swim?').toLowerCase();
if(iCantSwim === 'no') {
  alert('You are right not to believe me. On this one, at least!');
  numCorrect.push('Correct');
} else {
  alert('Actually, I\'m just pulling your leg. I can swim!');
  numIncorrect.push('Incorrect');
}
console.log('Question 6: you have ' + numCorrect.length + ' correct and ' + numIncorrect.length + ' wrong.');


var lasagnaServings = parseInt(prompt('How many servings of Lasagna did I make this weekend?'));
if(lasagnaServings === 8) {
  alert('You\'re good at guessing! I\'m still eating it four days later and have more in my freezer!');
  numCorrect.push('Correct');
} else if (lasagnaServings < 8) {
  alert('Actually, more!');
  numIncorrect.push('Incorrect');
} else {
  alert('Okay, not that much!');
  numIncorrect.push('Incorrect');
}
console.log('Question 7: you have ' + numCorrect.length + ' correct and ' + numIncorrect.length + ' wrong.');

// var myPets=['guinea pig', 'cat', 'dog', 'horse', 'hamster','lizard', 'bunny'];
// var myPetsQuestion = prompt('What types of animals have I owned?').toLowerCase();
// var myPetsResponseIncorrect = false;
// while(myPetsResponseIncorrect === false) {
//   if(myPets.includes(myPetsQuestion)) {
//     alert('Correct!');
//     numCorrect.push('Correct');
//     var myPetsResponseIncorrect = true;
//   }else{
//     myPetsQuestion = prompt('Not quite! Try again. What types of animals have I owned?');
//     numIncorrect.push('Incorrect');
// }

console.log('Question 7: you have ' + numCorrect.length + ' correct and ' + numIncorrect.length + 'wrong.');

//changes prompt to make sense for all three possible combinations of sinular and plural answer and answers in the prompt
if(numCorrect.length < 2 && numIncorrect.length >= 2) {
  alert('Good job ' + userName + ', you got ' + numCorrect.length + ' answer correct, and only ' + numIncorrect.length + ' answers wrong. ');
} else if(numCorrect.length >=2 && numIncorrect.length < 2) {
  alert('Good job ' + userName + ', you got ' + numCorrect.length + ' answers correct, and only ' + numIncorrect.length + ' answer wrong. ');
} else {
  alert('Good job ' + userName + ', you got ' + numCorrect.length + ' answers correct, and only ' + numIncorrect.length + ' answers wrong. ');
}