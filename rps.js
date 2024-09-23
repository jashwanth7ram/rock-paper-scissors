
function updateScore()
{
    document.getElementById("js-score").innerHTML=`Score: Wins - ${result.win}, Losses - ${result.lose}, Ties - ${result.tie}`;
}
let result = { win: 0, lose: 0, tie: 0 };
result= JSON.parse(localStorage.getItem('score'));
updateScore();
function computerchoice() {
    let rand = Math.random();
    if (rand <= 1 / 3) {
        return "Rock";
    } else if (rand <= 2 / 3) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playGame(choice) {
    let comp = computerchoice();
    let message;
    let res;
   result= JSON.parse(localStorage.getItem('score'));
   if(result===null)
   {
    resetScore();
   }
    if (comp === choice) {
        result.tie++;
       res=` It's a tie!`;
    } else if (
        (choice === "Rock" && comp === "Scissors") ||
        (choice === "Scissors" && comp === "Paper") ||
        (choice === "Paper" && comp === "Rock")
    ) {
        result.win++;
        res=`You won!`
    } else {
        result.lose++;
        res=`You Lose!`;
    }
    message=`You <img src="./assets/${choice}-emoji.png" alt="" class="move-icon"> <img src="./assets/${comp}-emoji.png" alt="" class="move-icon">
Computer`
    localStorage.setItem(`score`,JSON.stringify(result));
   document.getElementById("whowon").innerHTML=res;
   document.getElementById("c").innerHTML=message;
   updateScore();
}

function resetScore() {
    result.win = 0;
    result.lose = 0;
    result.tie = 0;
    localStorage.setItem('score',JSON.stringify(result));
   document.getElementById("c").innerHTML='score has been reset';
    updateScore();
}