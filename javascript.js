//Goal is to have little to no global variables or functions

//gameBoard contains the literal gameboard and functions for the gameboard
const gameBoard = (() => {
    const gameBoardArray = [];

    const addX = () => { gameBoardArray.unshift('X')};

    const addO = () => { gameBoardArray.unshift('O')};

    //add checkWin function that checks winning patterns
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

//Module for controlling player turn and the game
const gameFlow = () => {
    //turnCounter = 1 means player 1's turn, turnCounter = 2 means player 2's turn 
    let turnCounter = 1;

    const displayPlayerTurn = () => {console.log(`It is Player ${turnCounter}'s turn`)}

    const playerMove = () => {
        if (turnCounter === 1) {
            gameBoard.addX();
            changeTurn();
        }
        else {
            gameBoard.addO();
            changeTurn();
        }
    }
    const changeTurn = () => {
        if (turnCounter === 1) {
            turnCounter = 2;
        }
        else {
            turnCounter = 1;
        }
    }

    return {
        display: displayPlayerTurn,
        move: playerMove
    }

};

const displayController = (() => {
    const {display} = gameFlow();
       

})();

const Player = (tag) => {
    const name = `Player ${tag}`;

};
