//Goal is to have little to no global variables or functions

const gameBoard = (() => {
    const gameBoardArray = [];

    const addX = () => { gameBoardArray.unshift('X')};

    const addO = () => { gameBoardArray.unshift('O')};

    const showGameBoard = () => {
        for (let x = 0; x < gameBoardArray.length; x++) {
            console.log(`Index ${x} with value ${gameBoardArray[x]}`);
        }
    }
    return {
        addX: addX,
        addO: addO,
        showGameBoard: showGameBoard
    }

})();

const Player = () => {
    const score = 0;


};
