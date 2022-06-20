const gameBoard = ((player1, player2) => {
    const gameBoardArray = [];
    //currentPlayer will be 0, other player will be 1 and they switch based on turn
    var currentPlayer = 0;
    const addToGameBoard = () => {
        if (currentPlayer === player1) {
            gameBoardArray.push('X');
            
        }

        else {
            gameBoardArray.push('O');
        }
    }

})();

const Player = () => {
    const score = 0;


};
