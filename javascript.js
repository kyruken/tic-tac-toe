//Goal is to have little to no global variables or functions

const Player = marker => {

    const getMarker = () => {
        return marker;
    }

    const playerMove = (box) => {
        box.textContent = marker;
        return box.textContent;
    }

    return {getMarker, playerMove};

};
const gameBoard = (() => {
    const gamebox = document.getElementById("game-box");
    let gameBoardArray = gamebox.querySelectorAll('div');


    return {gameBoardArray}
    
})();

const gameController = (() => {
    const player1 = Player('X');
    const player2 = Player('O');
    let playerTurn = 0;
    let isEnded = false;
    let playerWinner = '';

    const turnContainer = document.getElementById("turn-display");
    const resetButton = document.getElementById("reset");

    const setResetButton = () => {
        resetButton.addEventListener('click', resetGame);
    }

    const resetGame = () => {
        gameBoard.gameBoardArray.forEach(box => {
            box.textContent = '';
        })
        isEnded = false;
        playerWinner = '';
        playerTurn = 0;
        displayTurn(player1);
        playGame();

    }

    const displayTurn = (player) => {
        turnContainer.textContent = `Player ${player.getMarker()}'s turn`;
        if (isEnded === true) {
            turnContainer.textContent = `Player ${playerWinner} wins!`;
        }
    }

    const changePlayerTurn = () => playerTurn === 0 ? playerTurn = 1 : playerTurn = 0;

    const checkWinGame = (player) => {
        //All win conditions
        if (gameBoard.gameBoardArray[0].textContent === player.getMarker() && gameBoard.gameBoardArray[1].textContent === player.getMarker() &&
        gameBoard.gameBoardArray[2].textContent === player.getMarker()) {
            playerWinner = player.getMarker();
            isEnded = true;
            
        }

        if (gameBoard.gameBoardArray[3].textContent === player.getMarker() && gameBoard.gameBoardArray[4].textContent === player.getMarker() &&
            gameBoard.gameBoardArray[5].textContent === player.getMarker()) {
                playerWinner = player.getMarker();
                isEnded = true;
            }

        if (gameBoard.gameBoardArray[6].textContent === player.getMarker() && gameBoard.gameBoardArray[7].textContent === player.getMarker() &&
            gameBoard.gameBoardArray[8].textContent === player.getMarker()) {
                playerWinner = player.getMarker();
                isEnded = true;
            }
        if (gameBoard.gameBoardArray[0].textContent === player.getMarker() && gameBoard.gameBoardArray[3].textContent === player.getMarker() &&
            gameBoard.gameBoardArray[6].textContent === player.getMarker()) {
                playerWinner = player.getMarker();
                isEnded = true;
            }
    
        if (gameBoard.gameBoardArray[1].textContent === player.getMarker() && gameBoard.gameBoardArray[4].textContent === player.getMarker() &&
            gameBoard.gameBoardArray[7].textContent === player.getMarker()) {
                playerWinner = player.getMarker();
                isEnded = true;
            }

        if (gameBoard.gameBoardArray[2].textContent === player.getMarker() && gameBoard.gameBoardArray[5].textContent === player.getMarker() &&
            gameBoard.gameBoardArray[8].textContent === player.getMarker()) {
                playerWinner = player.getMarker();
                isEnded = true;
            }
        
        if (gameBoard.gameBoardArray[0].textContent === player.getMarker() && gameBoard.gameBoardArray[4].textContent === player.getMarker() &&
            gameBoard.gameBoardArray[8].textContent === player.getMarker()) {
                playerWinner = player.getMarker();
                isEnded = true;
            }

        if (gameBoard.gameBoardArray[2].textContent === player.getMarker() && gameBoard.gameBoardArray[4].textContent === player.getMarker() &&
            gameBoard.gameBoardArray[6].textContent === player.getMarker()) {
                playerWinner = player.getMarker();
                isEnded = true;
            }

    }

    const playGame = () => {
        gameBoard.gameBoardArray.forEach(box => {
            box.addEventListener('click', function addEvent() {

            if (isEnded === false) {
                playerTurn === 0 ? player1.playerMove(box) : player2.playerMove(box);
                playerTurn === 0 ? checkWinGame(player1) : checkWinGame(player2);
                playerTurn === 1 ? displayTurn(player1) : displayTurn(player2);
                changePlayerTurn();
            }

            box.removeEventListener('click', addEvent);

            })
        })
    }

    playGame();
    setResetButton();

})();

