var board = []; // set up an array to store the variables


function play(clickedId) {
    let playerSpan = document.getElementById('player');
    let clickedElement = document.getElementById(clickedId);

    //check if board is mixed
    if (board[clickedId] === 'X' || board[clickedId] === 'O') {
        alert('The box has been marked, choose another box!');
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
        return alert(`The winner is ${topLeft}`);
    }
    if (middleLeft !== undefined && middleLeft === middleMiddle && middleLeft === middleRight) {
        return alert(`The winner is ${middleLeft}`);
    }
    if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomMiddle) {
        return alert(`The winner is ${bottomLeft}`);
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        return alert(`The winner is ${topLeft}`);
    }
    if (topMiddle !== undefined && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        return alert(`The winner is ${topMiddle}`);
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        return alert(`The winner is ${topRight}`);
    }
    if (topLeft !== undefined && topLeft === middleMiddle && topLeft === bottomRight) {
        return alert(`The winner is ${topLeft}`);
    }
    if (topRight !== undefined && topRight === middleMiddle && topRight === bottomLeft) {
        return alert(`The winner is ${topRight}`);
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
    for (let i = 0; i < board.length; i++) {
        board[i] = " ";
        }
    }
