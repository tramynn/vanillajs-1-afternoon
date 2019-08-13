var board = []; // set up an array to store the variables


function play(clickedId) {
    let playerSpan = document.getElementById('player');
    let clickedElement = document.getElementById(clickedId);

    //check if board is already clicked
    if (board[clickedId] === 'X' || board[clickedId] === 'O') {
        alert('The box has been marked, choose another box!');
        if (board[clickedId] === 'X') {
            board[ClickedId] = 'O';
        } else {
            board[clickedId] = 'X';
        }
    } 

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    } 
    
    //Set up variables for each box
    var topLeft = board[0];
    var topMiddle = board[1];
    var topRight = board[2];
    var middleLeft = board[3];
    var middleMiddle = board[4];
    var middleRight = board[5];
    var bottomLeft = board[6];
    var bottomMiddle = board[7];
    var bottomRight = board[8];

    //Check who is the winner and alert winner
    if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
        alert(`The winner is ${topLeft}`);
        resetBoard();
        return;
    }
    if (middleLeft !== undefined && middleLeft === middleMiddle && middleLeft === middleRight) {
        alert(`The winner is ${middleLeft}`);
        resetBoard();
        return;
    }
    if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomMiddle) {
        alert(`The winner is ${bottomLeft}`);
        resetBoard();
        return;
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`The winner is ${topLeft}`);
        resetBoard();
        return;
    }
    if (topMiddle !== undefined && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        alert(`The winner is ${topMiddle}`);
        resetBoard();
        return;
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`The winner is ${topRight}`);
        resetBoard();
        return;
    }
    if (topLeft !== undefined && topLeft === middleMiddle && topLeft === bottomRight) {
        alert(`The winner is ${topLeft}`);
        resetBoard();
        return;
    }
    if (topRight !== undefined && topRight === middleMiddle && topRight === bottomLeft) {
        alert(`The winner is ${topRight}`);
        resetBoard();
        return;
    } 

    //Check to see if the board is filled

    const boardFull = true;
    for (let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
            return boardFull = false;
        }  
    }
    if (boardFull === true) {
        alert("It was a CAT'S game!");
    }

}

 //clear the board
function resetBoard() {
    for (let i = 0; i <= board.length; i++) { //loop through the array
        document.getElementById(i).innerText = ''; //clearing out the innerText tag
        board[i] = undefined; //clearing the array
    }
}