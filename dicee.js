// generating random number between (1 to 6) to display random Dice Image for player 1

var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage1 = "Dice" + randomNumber1 + ".png";

var player1 = "images/" + randomDiceImage1;

document.querySelectorAll("img")[0].setAttribute("src",player1);

// generating random number between (1 to 6) to display random Dice Image for player 2

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage2 = "Dice" + randomNumber2 + ".png";

var player2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src",player2);

// result

if(randomDiceImage1 > randomDiceImage2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if(randomDiceImage1 < randomDiceImage2)
{
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}

