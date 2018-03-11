'use strict';

//define arrays to push scores into to keep track of correct and incorrect
var numCorrect =[];
var numIncorrect =[];

//get userName so I can use it in the score message
function firstQuestion() {
  var noInput = true;
  var userName = prompt('What is your name?');
  //I now know that using window. can mess up my code and that it's generally a bad idea, but we haven't learned that in class and it works in this instance.
  window.userName = userName;
  while(noInput === true){
    if(userName.length < 1){
      //have to redefine userName or the promp will get stuck even if the user inputs something the next time it asks.
      userName = prompt('Please enter your name!');
    } else {
      alert('Hello, ' + userName + '!');
      console.log('Hello, ' + userName + '!');
      noInput = false;
      break;
    }
  }
}

//different answers for different responses. parseInt used to convert answer, which  is string, to a number so it can be evaluated.
//toLowerCase used so that different cases in the user's answer don't influence the program's response.
function secondQuestion() {
  var petQuestion = parseInt(prompt('How many pets do you think I have? Please enter a number.'));

  if(petQuestion === 2){
    alert('Correct! I have two kittens named Ruby and Sid, short for Obsidian! ');
    numIncorrect.push('Correct');
  }else if (petQuestion < 2) {
    alert('No, I have two crazy cats!');
    numIncorrect.push('Incorrect');
  } else {
    alert('I wish! I love animals.');
    numIncorrect.push('Incorrect');
  }
  console.log('Question 2: you have ' + numCorrect.length + ' correct and ' + numIncorrect.length + ' wrong.');
}

//When we're allowed to use fns in our labs, I will make most of this long message into one I can call instead of repeating long iterances
function thirdQuestion() {
  var myTravels = prompt('Have I been to Australia?').toLowerCase();
  if(myTravels === 'no') {
    alert('You are correct! Ever since the Lord of the Rings movies, I have wanted to go to Oceania! My favorite trip was probably to Copenhagen, but Australia and New Zealand are high on the list!' );
    numCorrect.push('Correct');
  } else{
    alert ('Unfortunately, I have not! Ever since the Lord of the Rings movies, I have wanted to go to Oceania! My favorite trip was probably to Copenhagen, but Australia and New Zealand are high on the list!');
    numIncorrect.push('Incorrect');
  }
  console.log('Question 3: you have ' + numCorrect.length + ' correct and ' + numIncorrect.length + ' wrong.');
}

function fourthQuestion() {
  var MyEducation = prompt('Do I have a bachelor\'s degree?').toLowerCase();
  if(MyEducation === 'yes') {
    alert ('Yes. I went to Whitman College where I studied Geology and minored in Anthropology. Can you tell from my cats\' names?');
    numCorrect.push('Correct');
  } else {
    alert('I actually do. I went to Whitman College where I studied Geology and minored in Anthropology. Can you tell from my cats\' names?');
    numIncorrect.push('Incorrect');
  }
  console.log('Question 4: you have ' + numCorrect.length + ' correct and ' + numIncorrect.length + ' wrong.');
}

function fifthQuestion() {
  var doILikeHorses = prompt('Do I like horses?').toLowerCase();
  if(doILikeHorses === 'yes') {
    alert ('Yes. Growing up, I rode horses and enjoyed jumping. Taking care of horses is a lot of work!');
    numCorrect.push('Correct');
  } else {
    alert ('I actually do like them. I particularly enjoyed jumping while I was growing up.');
    numIncorrect.push('Incorrect');
  }
  console.log('Question 5: you have ' + numCorrect.length + ' correct and ' + numIncorrect.length + ' wrong.');
}

function sixthQuestion() {
  var iCantSwim = prompt('Do you believe me when I say I cannot swim?').toLowerCase();
  if(iCantSwim === 'no') {
    alert('You are right not to believe me. On this one, at least!');
    numCorrect.push('Correct');
  } else {
    alert('Actually, I\'m just pulling your leg. I can swim!');
    numIncorrect.push('Incorrect');
  }
  console.log('Question 6: you have ' + numCorrect.length + ' correct and ' + numIncorrect.length + ' wrong.');
}

//This function limits the number of tries the user has to get the correct answer
function seventhQuestion() {
  var lasagnaServings = parseInt(prompt('How many servings of Lasagna did I make this weekend?'));
  var counter = 0;
  var lasagnaQuestionCorrect = false;
  while(lasagnaQuestionCorrect === false && counter < 3) {
    if(lasagnaServings === 8) {
      alert('You\'re good at guessing! I\'m still eating it four days later and have more in my freezer!');
      numCorrect.push('Correct');
      lasagnaQuestionCorrect = true;
      break;
    } else if (lasagnaServings < 8) {
      //you need the parseInt each time you reassign the variable to the prompt, which you need to do for the loop to work. If not, the function will never be able to evaluate if lasagnaServings === 8.
      lasagnaServings = parseInt(prompt('Actually, more. Keep guessing! How many servings of Lasagna did I make this weekend?'));
      counter ++;
      numIncorrect.push('Incorrect');
    } else {
      lasagnaServings = parseInt(prompt('Okay, not that much! Keep guessing! How many servings of Lasagna did I make this weekend?'));
      counter ++;
      numIncorrect.push('Incorrect');
    }
    console.log('Question 7: you have ' + numCorrect.length + ' correct and ' + numIncorrect.length + ' wrong.');
  }
}

//this question limits the number of tries the user has to guess items in an array, myPets
function eighthQuestion() {
  var myPets=['guinea pig', 'guinea pigs', 'cat', 'cats', 'dog', 'dogs', 'horse', 'horses', 'hamster', 'hamsters','lizard', 'lizards', 'bunny', 'bunnies'];
  var counter = 0;
  var myPetsQuestion = prompt('Can you guess a type of animal I have owned?').toLowerCase();
  var myPetsResponseCorrect = false;
  while(myPetsResponseCorrect === false && counter < 6) {
    if(myPets.includes(myPetsQuestion)) {
      alert('Correct!');
      numCorrect.push('Correct');
      myPetsResponseCorrect = true;
      break;

    }else{
      myPetsQuestion = prompt('Not quite! Try again. What types of animals have I owned?');
      counter++;
      numIncorrect.push('Incorrect');
    }
  }
  console.log('Question 8: you have ' + numCorrect.length + ' correct and ' + numIncorrect.length + ' wrong.');
}

function ninthQuestion() {
  var myAge = prompt('Do you think I am older than 25?').toLowerCase();
  if(myAge === 'no') {
    alert('You are correct! I am 24.');
    numCorrect.push('Correct');
  } else {
    alert('No, I am younger than 25!');
    numIncorrect.push('Incorrect');
  }
  console.log('Question 9: you have ' + numCorrect.length + ' correct and ' + numIncorrect.length + ' wrong.');
}
//changes alert to make sense for all three possible combinations of sinular and plural answer and answers in the prompt
function scoreAlert(){
  if(numCorrect.length < 2 && numIncorrect.length >= 2) {
    alert('Good job ' + window.userName + ', you got ' + numCorrect.length + ' answer correct, and only ' + numIncorrect.length + ' answers wrong.');
  } else if(numCorrect.length >=2 && numIncorrect.length < 2) {
    alert('Good job ' + window.userName + ', you got ' + numCorrect.length + ' answers correct, and only ' + numIncorrect.length + ' answer wrong.');
  } else {
    alert('Good job ' + window.userName + ', you got ' + numCorrect.length + ' answers correct, and only ' + numIncorrect.length + ' answers wrong.');
  }
}

//call all my new functions
firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();
sixthQuestion();
seventhQuestion();
eighthQuestion();
ninthQuestion();
scoreAlert();
