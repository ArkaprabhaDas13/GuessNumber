'use strict';

console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = "Please enter a no ❤️"

// document.querySelector('.number').textContent = "23";
// document.querySelector('.score').textContent = "100";

// Input field has to be indicated with VALUE

//document.querySelector('.guess').value = 13;
//console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click', function(){
//     console.log(document.querySelector('.guess').value);
// })


// ----------------------------^^^---learning---^^^-------------------------------------------

let highscore = 0;

let random = Math.floor(Math.random()*10);
console.log(random);

//initialise the score with 20
let score = 20;

// when clicking the again button
document.querySelector('.again').addEventListener('click',function ()
        {
            score = 20;
            random = Math.floor(Math.random()*10)+1;
            console.log(random);
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = "Start Guessing";
            document.querySelector('body').style.backgroundColor = '#222';
        });

document.querySelector('.check').addEventListener('click', function(){
    
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess);


    // Condition for an empty space. This is basically when the box is empty and the value is 0.
    // Here 0 means false, so in IF condtion !0 means true. Thus,  the conditon will
    // be executed.
    if(!guess)
    {
        document.querySelector('.message').textContent = "Enter a number first😥"; 
    }
    else if(guess<random)
    {
        if(score > 1)
        {
            document.querySelector('.message').textContent = "Guess higher⬆️";
            document.querySelector('.score').textContent = document.querySelector('.score').value-1;
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = "You Lose😓😓 Try Again."
        }
    }

    // when guess is too high

    else if(guess>random)
    {
        if(score>1)
        {
            document.querySelector('.message').textContent = "Guess Lower⬇️";
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.guess').value = 0;
        }
        else{
            document.querySelector('.message').textContent = "You Lose😓😓 Try Again."
        }
    }

    // when player wins

    else if(random === guess)
    {
        document.querySelector('.message').textContent = "Congrats!!!😊It's the number."
        document.querySelector('.number').textContent = guess;
        score++;
        document.querySelector('.score').textContent = score;
        
        if(score>=highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        document.querySelector('body').style.backgroundColor = '#60b347';
    }
    
    //document.querySelector('.message').textContent = "WELL DONE!";

})