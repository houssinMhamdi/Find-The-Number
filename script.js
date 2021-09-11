'use strict';

let cuompnum = Math.floor(Math.random()*20);
let score  = 20;
console.log(score);
console.log(cuompnum);


document.querySelector('.check').addEventListener('click',function(){
    let guess = Number(document.querySelector('.guess').value);
    let heightScore = 0;
     
    //check if the input is not empty 
    if (!guess) {
        document.querySelector('.message').textContent = '🚫 No value';
    }
    //the player win
    else if(guess === cuompnum){
        document.querySelector('.message').textContent = '✨ you win';
        document.querySelector('.number').textContent = cuompnum ;
        document.querySelector('body').style.backgroundColor = '#60b347';
        //check the heigth score 
        if (score > heightScore) {
            heightScore = score;
            document.querySelector('.highscore').textContent = heightScore;
        }
    
    }
    // the number is low
    else if (guess < cuompnum) {
        document.querySelector('.message').textContent = '⏬ too low';
        score--;
        document.querySelector('.score').textContent = score;
        if (score <= 0) {
            document.querySelector('.score').textContent = 'you lose';
        }
    }
    //the number is height
    else if(guess > cuompnum){
        document.querySelector('.message').textContent = '⏫ too height';
        score--;
        document.querySelector('.score').textContent = score;
        if (score <= 0) {
            document.querySelector('.score').textContent = 'you lose';
        }
    }

    //document.querySelector('.guess').value = '';
});


//restart the game without restart the page
document.querySelector('.again').addEventListener('click',function(){
    // location.reload()
    cuompnum = Math.floor(Math.random()*20);
     score  = 20;
    
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?" ;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
})
