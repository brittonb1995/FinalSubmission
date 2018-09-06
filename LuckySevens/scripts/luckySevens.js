

//Helper functions
function rollDice(){
    var roll = Math.floor(Math.random()*6)+1;
    return roll;
}


function findMax(testArray) {
    var max = testArray[0];
    for(var i=0;i <= testArray.length-1;i++){
        var currentElement = testArray[i];

        if(currentElement>max){
            max = currentElement;
        }
    }
    return max;
}


function resetForm () {
    document.forms["betting-form"]["bet"].value = "";
    document.getElementById("results-table").style.display = "none"

    document.getElementById("playButton").style.display = "block";
    document.getElementById("resetButton").style.display = "none";
}



function playTheGame(){
    var userBet = Number(document.getElementById("bet").value)
    const userBet_start = userBet;
    var playCount = 0;
    var numWins = 0;

    var userMoney = [userBet_start];


    if (userBet <= 0 ){
        alert("Error! Can't bet zero or negative dollars!");
        document.forms["betting-form"]["bet"].parentElement.className = "form-group has-error";
        document.forms["betting-form"]["bet"].value="";
        return false;
        playTheGame();
    }

    else { //Now play the game

        while (userBet > 0){
            var roll1 = rollDice();
            var roll2 = rollDice();
            var sum = roll1+roll2;

            if (sum != 7){
                userBet --; //decrement by 1 if you lose
                userMoney.push(userBet);
            }
            else if (sum == 7){
                userBet += 4; //unary operator add by 4 if you win
                numWins ++; //increment the number of wins by 1. Will be used in the data table
                userMoney.push(userBet);
            }
            playCount ++;

        }

        var the_max = findMax(userMoney); //find where we had the most amount of money after while loop runs


        //Swap out displays of play and play again button
        document.getElementById("playButton").style.display = "none";
        document.getElementById("resetButton").style.display = "block";

        //Show the table and information about the game
        document.getElementById("results-table").style.display = "block";
        document.getElementById("starting-bet").innerText = userBet_start;
        document.getElementById("rolls-to-broke").innerText = playCount;
        document.getElementById("highest-won").innerText = userMoney[userMoney.indexOf(the_max)] - userBet_start;
        document.getElementById("roll-at-highest").innerText = userMoney[the_max];
        return false;

    }

    return false;
}

