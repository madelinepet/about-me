'use strict';


var petQuestion = parseInt(prompt('How many pets do you think I have? Please enter a number.'));
if(petQuestion === 2){
  alert('Correct! I have two kittens named Ruby and Sid, short for Obsidian! ');
}else {
  console.log('Keep trying! The user probably cannot see this, but the answer is 2.');
  alert('Keep trying!');
}

var myAge = prompt('Do you think I am older than 25?').toLowerCase();
if(myAge === 'yes') {
  console.log('The answer here should be no.');
  alert('No, I am younger than 25!');
} else {
  alert('You are correct! I am 24.');
}

var myTravels = prompt('Have I been to Australia?').toLowerCase();
if(myTravels === 'yes') {
  alert ('Unfortunately, no! I would love to go, though!');
} else{
  console.log('Ever since the Lord of the Rings movie, I have wanted to go to Oceania!');
  alert('You are correct! My favorite trip was probably to Copenhagen, but I would love to go to Australia and New Zealand, though!' );
}

var MyEducation = prompt('Do I have a bachelor\'s degree?').toLowerCase();
if(MyEducation === 'yes') {
  alert ('Yes. I went to Whitman College where I studied Geology and minored in Anthropology. Can you tell from my cats\' names?');
  console.log('I liked Eastern Washington and would go back on a vacation, but I much prefer living here in Western Washington!');
} else {
  alert('I actually do. I went to Whitman College where I studied Geology and minored in Anthropology. Can you tell from my cats\' names?');
}

var doILikeHorses = prompt('Do I like horses?').toLowerCase();
if(doILikeHorses === 'yes') {
  console.log('Taking care of horses is a lot of work!');
  alert ('Yes. Growing up, I rode horses and enjoyed jumping.');
} else {
  alert ('I actually do like them. I particularly enjoyed jumping while I was growing up.');
}


