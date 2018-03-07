'use strict';

var userName = prompt('What is your name?');
var numCorrect =[];
var numIncorrect =[];

var petQuestion = parseInt(prompt('How many pets do you think I have? Please enter a number.'));
if(petQuestion === 2){
  console.log('Correct');
  alert('Correct! I have two kittens named Ruby and Sid, short for Obsidian! ');
  numIncorrect.push('Correct');
}else if (petQuestion < 2) {
  console.log('Keep trying! The user probably cannot see this, but the answer is 2.');
  alert('No, I am an amimal lover!');
  numIncorrect.push('Incorrect');
} else {
  alert('I wish!');
  numIncorrect.push('Incorrect');
}

var myAge = prompt('Do you think I am older than 25?').toLowerCase();
if(myAge === 'no') {
  console.log('Correct.');
  alert('You are correct! I am 24.');
  numCorrect.push('Correct');
} else {
  console.log('The answer here should be no.');
  alert('No, I am younger than 25!');
  numIncorrect.push('Incorrect');
}

var myTravels = prompt('Have I been to Australia?').toLowerCase();
if(myTravels === 'no') {
  console.log('Ever since the Lord of the Rings movie, I have wanted to go to Oceania!');
  alert('You are correct! My favorite trip was probably to Copenhagen, but I would love to go to Australia and New Zealand, though!' );
  numCorrect.push('Correct');
} else{
  console.log(numIncorrect.length);
  alert ('Unfortunately, no! I would love to go, though!');
  numIncorrect.push('Incorrect');
}

var MyEducation = prompt('Do I have a bachelor\'s degree?').toLowerCase();
if(MyEducation === 'yes') {
  alert ('Yes. I went to Whitman College where I studied Geology and minored in Anthropology. Can you tell from my cats\' names?');
  console.log('I liked Eastern Washington and would go back on a vacation, but I much prefer living here in Western Washington!');
  numCorrect.push('Correct');
} else {
  console.log('Incorrect.');
  alert('I actually do. I went to Whitman College where I studied Geology and minored in Anthropology. Can you tell from my cats\' names?');
  numIncorrect.push('Incorrect');
}

var doILikeHorses = prompt('Do I like horses?').toLowerCase();
if(doILikeHorses === 'yes') {
  console.log('Taking care of horses is a lot of work!');
  alert ('Yes. Growing up, I rode horses and enjoyed jumping.');
  numCorrect.push('Correct');
} else {
  console.log('Incorrect.');
  alert ('I actually do like them. I particularly enjoyed jumping while I was growing up.');
  numIncorrect.push('Incorrect');
}

var iCantSwim = prompt ('Do you believe me when I say I cannot swim?').toLowerCase();
if(iCantSwim === 'no') {
  console.log ('You are right not to believe me. On this one, at least!');
  alert('You are right not to believe me. On this one, at least!');
  numCorrect.push('Correct');
} else {
  console.log('I actually can.');
  alert('Actually, I\'m just pulling your leg. I can swim!');
  numIncorrect.push('Incorrect');
}

var lasagnaServings = parseInt(prompt('How many servings of Lasagna did I make this weekend?'));
if(lasagnaServings === 8) {
  console.log('Wow, good job guessing! I\'m still eating it four days later and have more in my freezer!');
  alert('You\'re good at guessing!');
  numCorrect.push('Correct');
} else if (lasagnaServings < 8) {
  console.log('Actually, more!');
  alert('Actually, more!');
  numIncorrect.push('Incorrect');
} else {
  console.log('Okay, not quite that much!');
  alert('Thankfully, not that much!');
  numIncorrect.push('Incorrect');
}

alert ('Good job ' + userName + ' you got ' + numCorrect.length + ' answer(s) correct, and only ' + numIncorrect.length + ' answer(s) wrong. ');