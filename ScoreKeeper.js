const p1Button = document.querySelector('#btn1');
const p2Button = document.querySelector('#btn2');
const play1Score = document.querySelector('#score1');
const play2Score = document.querySelector('#score2');
const resetButton = document.querySelector('#reset');
const playTo = document.querySelector('#playTo');

// let's have p1 and p2 score start and zero
let p1score = 0;
let p2score = 0;
//if we set the winning score to 3, which is the starting point of the list of winning scores
let winningScore = 3;
//means game is not over
let isGameOver = false;

p1Button.addEventListener('click', function(e){
    // if game is not over yet
    if(!isGameOver){
        // this code increment the score for player one by 1
        p1score += 1;
        //if p1 score is not 5 yet, the keep incrementing, otherwise nothing happens
        if(p1score === winningScore){
            //so if a player reaches 5, then gameOver is true; this will prevent player 1 from clicking again once player 2 gets to 5, meaning game is over
            isGameOver = true;
            //adding te css class of winner if p1 gets to winning score, so the score text changes to green(check css) when he wins
            play1Score.classList.add('winner');
            //adding te css class of loser to p2 if p1 gets to winning score first, so the score text changes to red(check css) because he lost
            play2Score.classList.add('loser');
            // these lines disable the buttons but they're from Bulma
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        play1Score.innerText = p1score;
    }
})



p2Button.addEventListener('click', function(e){
    // if game is not over yet
    if(!isGameOver){
        // this code increment the score for player one by 1
        p2score += 1;
        //if p1 score is not 5 yet, the keep incrementing, otherwise nothing happens
        if(p2score === winningScore){
            //so if a player reaches 5, then gameOver is true; this will prevent player 2 from clicking again once player 1 gets to 5, meaning game is over
            isGameOver = true;
            //adding te css class of winner if p2 gets to winning score, so the score text changes to green(check css) when he wins
            play2Score.classList.add('winner');
            //adding te css class of loser to p1 if p2 gets to winning score first, so the score text changes to red(check css) because he lost
            play1Score.classList.add('loser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        play2Score.innerText = p2score;
    }
})

//here we are using a change event beacuse for this element, we're chnaging the values of the different winning score
playTo.addEventListener('change', function(){
    // we can use 'this.value keyword' to access the value of the event we're listening on and updating it to the 'winningScore'
    //because this.value returns as a string, parseInt converts it to a number
    winningScore = parseInt(this.value); // this can also work - const playToScore = parseInt(playTo.value);
                                                                     //winningScore = playToScore;
    
})

// this will execute the reset function we made under on clicking, since we are already passing the reset function as the call back
resetButton.addEventListener('click', reset);


//putting the reset logic into a function
function reset(){
    //to make the reset button work, we have to set isGameOver back to false, meaning that game is not over, we just want to reset it to  default
    isGameOver = false;
    //then also set both players scores to zero, meaning that reset click, both scores should go back to 0
    p1score = 0;
    p2score = 0;
    //also to update the h1 display when we clicck on the reset button, so it will show 0 to 0 again
    play1Score.innerText = 0;
    play2Score.innerText = 0;
    //removing the class list(colors this time around) after the reset button as been clicked for p1
    play1Score.classList.remove('winner', 'loser');
    //removing the class list(colors this time around) after the reset button as been clicked for p2
    play2Score.classList.remove('winner', 'loser');
    // enables the buttons again after reset
    p1Button.disabled = false;
    p2Button.disabled = false;
    
}

 
