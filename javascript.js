//Goal is to have little to no global variables or functions

const Player = marker => {

    const getMarker = () => {
        return marker;
    }

    const winGame = () => {
        //All win conditions
        if (gameBoard.gameBoardArray[0].textContent === marker && gameBoard.gameBoardArray[1].textContent === marker &&
        gameBoard.gameBoardArray[2].textContent === marker) {
            console.log(`Player ${marker} wins!`);
        }

        if (gameBoard.gameBoardArray[3].textContent === marker && gameBoard.gameBoardArray[4].textContent === marker &&
            gameBoard.gameBoardArray[5].textContent === marker) {
                console.log(`Player ${marker} wins!`);
            }

        if (gameBoard.gameBoardArray[6].textContent === marker && gameBoard.gameBoardArray[7].textContent === marker &&
            gameBoard.gameBoardArray[8].textContent === marker) {
                console.log(`Player ${marker} wins!`);
            }
        if (gameBoard.gameBoardArray[0].textContent === marker && gameBoard.gameBoardArray[3].textContent === marker &&
            gameBoard.gameBoardArray[6].textContent === marker) {
                console.log(`Player ${marker} wins!`);
            }
    
        if (gameBoard.gameBoardArray[1].textContent === marker && gameBoard.gameBoardArray[4].textContent === marker &&
            gameBoard.gameBoardArray[7].textContent === marker) {
                console.log(`Player ${marker} wins!`);
            }

        if (gameBoard.gameBoardArray[2].textContent === marker && gameBoard.gameBoardArray[5].textContent === marker &&
            gameBoard.gameBoardArray[8].textContent === marker) {
                console.log(`Player ${marker} wins!`);
            }
        
        if (gameBoard.gameBoardArray[0].textContent === marker && gameBoard.gameBoardArray[4].textContent === marker &&
            gameBoard.gameBoardArray[8].textContent === marker) {
                console.log(`Player ${marker} wins!`);
            }

        if (gameBoard.gameBoardArray[2].textContent === marker && gameBoard.gameBoardArray[4].textContent === marker &&
            gameBoard.gameBoardArray[6].textContent === marker) {
                console.log(`Player ${marker} wins!`);
            }

    }

    return {getMarker, winGame};

};
const gameBoard = (() => {
    const gamebox = document.getElementById("game-box");
    let gameBoardArray = gamebox.querySelectorAll('div');


    return {gameBoardArray}
    
})();


//gameController object is dependent on player and gameBoard object
const gameController = (() => {
    const player1 = Player('X');
    const player2 = Player('O');
    let playerTurn = 0;

    const changePlayerTurn = () => playerTurn === 0 ? playerTurn = 1 : playerTurn = 0;

    const markBoard = () => {
        gameBoard.gameBoardArray.forEach(box => {
            box.addEventListener('click', function addEvent() {
            if (playerTurn === 0) {
                box.textContent = player1.getMarker();
                player1.winGame();
            }
    
            else {
                box.textContent = player2.getMarker();
                player2.winGame();
            
            }

            changePlayerTurn();
            box.removeEventListener('click', addEvent);

            })
        })
    }

    markBoard();

})();

// const displayController = (() => {

//     const gamebox = document.getElementById("game-box");
//     const turnContainer = document.getElementById("turn-display");
//     const resetButton = document.getElementById("reset");

//     let turnCounter = 1;

//     const resetBoard = () => {
//         for (let x = 0; x < gameBoard.gameBoardArray.length; x++) {
//             console.log(x);
//             console.log("what the dog doin");
//         }

//     }

//     const setTurn = () => {
//         if (turnCounter === 1) {
//             turnCounter = 2;
//         }
//         else {
//             turnCounter = 1;
//         }
//     }
//     const createPlayerTurn = () => {
//         const turnDisplay = document.createElement('div');
//         turnDisplay.classList.add('turn-display');
//         turnDisplay.textContent = `It is Player ${turnCounter}'s turn`;
//         turnContainer.appendChild(turnDisplay);
        
//     }

//     const changeTurnDisplay = () => {
//         setTurn();
//         turnContainer.textContent = `It is Player ${turnCounter}'s turn`;
//     }


//     const createBox = () => {
//         const newBox = document.createElement('div');
//         newBox.classList.add('ttt-box');
//         newBox.textContent = " ";

//         const removeEvent = () => {
//             newBox.removeEventListener('click', setEvent);
//         }

//         const setEvent = () => {
//             if (turnCounter === 1) {
//                 newBox.textContent = "X";
//                 removeEvent();
//             }
//             else {
//                 newBox.textContent = "O";
//                 removeEvent();
//             }
//             changeTurnDisplay();
//         }

//         newBox.addEventListener('click', setEvent);
//         gamebox.appendChild(newBox);
//     }

//     const setBoxes = () => {
//         for (let x = 0; x < 9; x++) {
//             createBox();
//             console.log("x");
//         }
//     }  

//     return {
//         createPlayerTurn: createPlayerTurn,
//         setBoxes: setBoxes,
//         changeTurn: changeTurnDisplay,
//         reset: resetBoard
//     }

// })();

// //Use an IIFE to initialize game
// const initializeGame = (() => {
//     displayController.createPlayerTurn();
//     displayController.setBoxes();
//     displayController.reset();
// })();

// const Player = (tag) => {
//     const name = `Player ${tag}`;

// };
