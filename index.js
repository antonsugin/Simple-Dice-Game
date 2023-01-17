
window.onload = () => {
    disabled();
    document.getElementById("roll").onclick = () => {rollDice()};
    document.getElementById("start").onclick = () => {setNames()};
    document.getElementById("restart").onclick = () => {restart()};
}


let firstPersonScore = 0;
let secondPersonScore = 0;
let drawScore = 0;

let playerName = "Player 1";
let personName = "Player 2";



let setNames = () => {

    enabled();
    restart();
    
    document.getElementById("header").innerHTML = "Good Luck!!!";

    let capitalizeFirstLetter = (name) => name.charAt(0).toUpperCase() + name.slice(1);

    let player = prompt("Please enter your name", "Player 1");
    let person = prompt("Please enter your name", "Player 2");

    if (player !== null && person !== null) {
    document.getElementById("prompt-name1").innerHTML = capitalizeFirstLetter(player);
    document.getElementById("prompt-player1").innerHTML = capitalizeFirstLetter(player);
    document.getElementById("prompt-name2").innerHTML = capitalizeFirstLetter(person);
    document.getElementById("prompt-player2").innerHTML = capitalizeFirstLetter(person);
    }

    playerName = capitalizeFirstLetter(player);
    personName = capitalizeFirstLetter(person);
}



let rollDice = () => {

    let diceArray = [1,2,3,4,5,6];

    let firstDice = Math.floor(Math.random() * diceArray.length + 1);
    let secondDice = Math.floor(Math.random() * diceArray.length + 1);

    document.getElementById("firstDice").src="photos/dice-" + firstDice + ".png";
    document.getElementById("secondDice").src="photos/dice-" + secondDice + ".png";

    score(firstDice,secondDice);
}


let score = (scoreOne, scoreTwo) => {


    if (scoreOne > scoreTwo) {
        firstPersonScore++;
        document.getElementById("header").innerHTML = "&#9733 Wins";
    }
    else if (scoreOne < scoreTwo) {
        secondPersonScore++;
        document.getElementById("header").innerHTML = "Wins &#9733";
    } 
    else {
        drawScore++;
        document.getElementById("header").innerHTML = "&#9733 Draw &#9733"
    }

    endGame(firstPersonScore, secondPersonScore, drawScore)
    
}



let endGame = (scoreOne, scoreTwo, scoreThree) => {
    

    if (scoreOne + scoreTwo + scoreThree === 10) {
        document.getElementById("roll").onclick = () => {exit = () => {}};

        if (scoreOne > scoreTwo) {
            document.getElementById("header").innerHTML = playerName + " Wins!!!"
        }
        else if (scoreOne < scoreTwo) {
            document.getElementById("header").innerHTML = personName + " Wins!!!"
        }
        else document.getElementById("header").innerHTML = "Draw, Play Again!!!"
    }

    document.getElementById("win1").innerHTML = scoreOne;
    document.getElementById("win2").innerHTML = scoreTwo;
    document.getElementById("windraw").innerHTML = scoreThree;

}


let restart = () => {
    firstPersonScore = 0;
    secondPersonScore = 0;
    drawScore = 0;

    document.getElementById("win1").innerHTML = firstPersonScore;
    document.getElementById("win2").innerHTML = secondPersonScore;
    document.getElementById("windraw").innerHTML = drawScore;
    document.getElementById("header").innerHTML = "Good Luck!!!";
    document.getElementById("roll").onclick = () => {rollDice()};
    
}

let disabled = () => {
    document.getElementById("roll").classList.add("disabled");
    document.getElementById("restart").classList.add("disabled");
    document.getElementById("start").classList.add("is-active");
}

let enabled = () => {
    document.getElementById("roll").classList.add("enabled");
    document.getElementById("restart").classList.add("enabled");
    document.getElementById("roll").classList.remove("disabled");
    document.getElementById("restart").classList.remove("disabled");
    document.getElementById("start").classList.remove("is-active");
}

