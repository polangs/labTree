'use strict';

var correctResponses = 0;


var userName = prompt ('Hi! I\'m Paula! What\'s your name?');
alert('Hi ' + userName + ' I\'m glad you\'re here today! Let\'s play a little getting to know me!');
console.log ('The user\'s name is ' + userName );





//////////////////////////////////////////////////////////////
//q1



function philippinesQuestion(){

  var questionOne = prompt ('Did I grew up in the Philippines? Sure is a warm country!').toLowerCase();

  if(questionOne === 'y' || questionOne === 'yes' ){
    alert ('You nailed it! ' + userName + ' I kinda miss the weather especially during winter season!');
    console.log ('Users answer is' + questionOne);
    correctResponses++;

  }else {
    alert('Sorry ' + userName + ' That is a NO noes!');
    console.log('Users answer is ' + questionOne);
  }

}

philippinesQuestion();





////////////////////////////////////////////////////////////////////////////
// q2




function catDog(){

  var questionTwo = prompt ('Do I like cats?').toLowerCase();

  if(questionTwo === 'n' || questionTwo === 'no'){
    alert ('You nailed it! ' + userName + ' Actually if I will get one, she will be a Serval!!!!');
    console.log ('Users answer is ' + questionTwo);
    correctResponses++;

  }else {
    alert('Sorry ' + userName + ' That is a NO noes!');
    console.log('User answer is' + questionTwo);
  }

}

catDog();




/////////////////////////////////////////////////////////////////////////
//q3



function childGen(){


  var questionThree = prompt ('Do I have a Princess or a Prince?').toLowerCase();

  if(questionThree === 'p' || questionThree=== 'princess' ){
    alert ('You nailed it! ' + userName + ' She is a handful!');
    console.log ('Users answer is ' + questionThree);
    correctResponses++;

  }else {
    alert('Sorry ' + userName + ' That is a NO noes!');
    console.log('Users answer is' + questionThree);
  }

}


childGen();





/////////////////////////////////////////////////////////////////////////
//q4





function favColor(){



  var questionFour = prompt ('Do I love teal color?').toLowerCase();

  if(questionFour === 'y' || questionFour=== 'yes' ){
    alert ('Way to go! ' + userName + ' I am addicted to teal!');
    console.log ('Users answer is '+ questionFour);
    correctResponses++;

  }else {
    alert('Sorry ' + userName + ' That is a NO noes!');
    console.log('Users answer is' + questionFour);
  }

}


favColor();





/////////////////////////////////////////////////////////////////////////
//q5




function bubblyGirl(){


  var questionFive = prompt ('Do I love to giggle??? Be careful with your answer!!!! I am watching you!').toLowerCase();

  if(questionFive === 'y' || questionFive === 'yes' ){
    alert ('Bet you are too!!!! ' + userName + 'That\'s why I tend to be gassy!!! LOL');
    console.log ('Users answer is' + questionFive);
    correctResponses++;

  }else {
    alert('Sorry ' + userName + ' I giggle with everything!');
    console.log('Users answer is' + questionFive);
  }

}

bubblyGirl();



///////////////////////////////////////////////////////////////////////////
///guess1

function questionSix(){

  var attemptTwo = 4;

  while (attemptTwo > 0 && attemptAnswer !== 5){

    var attemptAnswer = Number (prompt ('How many years do we have to keep our medical records? Choices is from 1-10 years!'));
    attemptTwo--;
    console.log (typeof attemptAnswer);

    // if user guess the right answer{

    if (attemptAnswer === 5){
      alert ('You got it, you got it right!');
      console.log('User got it right!');
      correctResponses++;

    // if the guess is too low
    } else if (attemptAnswer < 5 && attemptTwo > 0){
      alert ('Too low, guess again!');
      console.log ('User guess too low');

    // if the guess is too high
    } else if (attemptAnswer > 5){
      alert ('Too high!');
      console.log ('User guess too high!');

    // user didnt get the right answer
    }else if(attemptAnswer === 0){
      alert ('Peace Out! ' + userName);

    }
  }
}
questionSix();

///////////////////////////////////////////////////////////////////////////
///question7

function questionSeven(){
  var favoriteColors = ['teal', 'mustard yellow','black'];
  var attempsRemaining = true;
  var attemps = 6;

  while (attempsRemaining && attemps > 0){
    var answerSeven = prompt ('What is my favorite color?').toLowerCase();
    console.log (answerSeven);

    for (var i = 0; i < favoriteColors.length; i++){
      if(answerSeven === favoriteColors[i]){
        alert ('Correct, you guessed right!');
        correctResponses++;
        console.log('User got the answer!');
        attempsRemaining = false;
      }
    }
    if (attempsRemaining && attemps > 0){
      //incorrect and guesses remaining
      alert (`${userName} You answered incorrectly but have ${attemps} tries left!`);
      attemps--;
    }
    if (attemps === 0){
      //incorrect and no guesses remaining
      alert (`${userName} You have no more guesses left!`);
    }
  }
}

questionSeven();

alert (`${userName} You got ${correctResponses} out of seven answers correct!`);

















