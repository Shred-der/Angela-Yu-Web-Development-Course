function rollDice() {
    var diceWords = ["one", "two", "three", "four", "five", "six"];
    var player1Dice = Math.floor(Math.random() * 6) + 1;
    var player2Dice = Math.floor(Math.random() * 6) + 1;
    var word1 = diceWords[player1Dice - 1];
    var word2 = diceWords[player2Dice - 1];
    var imagePath1 = "./assets/images/dice-" + word1 + ".png";
    var imagePath2 = "./assets/images/dice-" + word2 + ".png";
    if (sessionStorage.getItem("visited")) {
        document.querySelector(".player1").src = imagePath1;
        document.querySelector(".player2").src = imagePath2;

        if (player1Dice > player2Dice) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (player1Dice === player2Dice) {
        document.querySelector("h1").innerHTML = "It's a Tie!";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    } else {
        sessionStorage.setItem("visited", "true");
    }
    
}
rollDice();