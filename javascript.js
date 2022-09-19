//Goal is to have little to no global variables or functions

//gameBoard contains the literal gameboard and functions for the gameboard

//gameBoard will be an object with an array of objects to display each square
//when a square is clicked, player will mark it and will turn it into isMarked
// when a pattern of isMarked is true, look for a winner

const Player = marker => {
    const getMarker = () => {
        return marker;
    }

    return {getMarker};

};
const gameBoard = ((playerMarker) => {
    const gameBoardArray = [];
    const gamebox = document.getElementById("game-box");

    gamebox.querySelectorAll('div').forEach(box => {
        box.addEventListener('click', () => {
            box.textContent = playerMarker;
        })
    })

})();

const player1 = Player('X');
console.log(player1.getMarker);
const player2 = Player('O');

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
