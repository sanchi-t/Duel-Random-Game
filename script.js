'use strict';
const player0Score = document.getElementById('score--0');
const player1Score = document.getElementById('score--1')
const player0CurrentScore = document.getElementById('current--0');
const player1CurrentScore = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const img = document.querySelector('.dice');
let turn,currentScore,allScore,playing;

function reset(){
    currentScore=0;
    allScore=[0,0];
    playing=true;
    turn=0;
    player0CurrentScore.textContent=0;
    player1CurrentScore.textContent=0;
    player0Score.textContent=0;
    player1Score.textContent=0;
    img.classList.add('hidden');
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');

}


function rollDice(){
    if(playing){
        let score = Math.trunc(Math.random() * 6)+1;
        img.src=`dice-${score}.png`;
        img.classList.remove('hidden');
        currentScore+=score;
        if(score===1){

            currentScore=0;
            document.getElementById(`current--${turn}`).textContent=0;
            turn = (turn ? 0 :1);
            player1.classList.toggle('player--active');
            player0.classList.toggle('player--active');
            currentScore=0;
            
        }


        else if(score!==1){
            document.getElementById(`current--${turn}`).textContent = currentScore;
        }
    
    }
}


function holdDice(){
    

    if(playing){

        allScore[turn]+=currentScore;
        document.getElementById(`score--${turn}`).textContent=allScore[turn];
        console.log(allScore[turn]);
        document.getElementById(`current--${turn}`).textContent=0;

        if(allScore[turn]>=50){
            document.querySelector(`.player--${turn}`).classList.add('player--winner');
            img.classList.add('hidden');
            playing=false;

        }

        turn = (turn ? 0 :1);
        player1.classList.toggle('player--active');
        player0.classList.toggle('player--active');
        currentScore=0;


    
    }
}





reset();
document.querySelector('.btn--roll').addEventListener('click',rollDice);
document.querySelector('.btn--hold').addEventListener('click',holdDice);
document.querySelector('.btn--new').addEventListener('click',reset);