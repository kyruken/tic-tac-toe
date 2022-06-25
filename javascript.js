//Goal is to have little to no global variables or functions

//gameBoard contains the literal gameboard and functions for the gameboard
const gameBoard = (() => {
    const gameBoardArray = [];

    const addX = () => { gameBoardArray.unshift('X')};

    const addO = () => { gameBoardArray.unshift('O')};

    const displayGameBoard = () => {
        for (let x = 0; x < gameBoardArray.length; x++) {
            console.log(`Index ${x} with value ${gameBoardArray[x]}`);
        }
    }
        //not sure how to do the win function just yet, putting all winning index into if statements
        //is too much 
    const win = () => {
            for (let x  = 0; x < gameBoardArray.length; x++) {
                if ((gameBoardArray[0] && gameBoardArray[1] && gameBoardArray[2]) == "X") {
                    console.log("Player 1 wins!");
                }
            }
        }
    return {
        addX: addX,
        addO: addO,
        display: displayGameBoard
    }

})();

const displayController = (() => {

    const gamebox = document.getElementById("game-box");
    const turnContainer = document.getElementById("turn-display");

    let turnCounter = 1;

    const setTurn = () => {
        if (turnCounter === 1) {
            turnCounter = 2;
        }
        else {
            turnCounter = 1;
        }
    }
    const createPlayerTurn = () => {
        const turnDisplay = document.createElement('div');
        turnDisplay.classList.add('turn-display');
        turnDisplay.textContent = `It is Player ${turnCounter}'s turn`;
        turnContainer.appendChild(turnDisplay);
        
    }

    const changeTurnDisplay = () => {
        setTurn();
        turnContainer.textContent = `It is Player ${turnCounter}'s turn`;
    }


    const createBox = () => {
        const newBox = document.createElement('div');
        newBox.classList.add('ttt-box');

        newBox.addEventListener('click', () => {
            if (turnCounter === 1) {
                newBox.textContent = "X";
            }
            else {
                newBox.textContent = "O";
            }
            
            changeTurnDisplay();
        })

        gamebox.appendChild(newBox);
    }

    const setBoxes = () => {
        for (let x = 0; x < 9; x++) {
            createBox();
            console.log("x");
        }
    }  

    return {
        createPlayerTurn: createPlayerTurn,
        setBoxes: setBoxes,
        changeTurn: changeTurnDisplay
    }

})();

//Use an IIFE to initialize game
const initializeGame = (() => {
    displayController.createPlayerTurn();
    displayController.setBoxes();
})();

const Player = (tag) => {
    const name = `Player ${tag}`;

};
