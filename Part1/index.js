const board = []; // set up an array to store the variables

function play(clickedId) {
    let playerSpan = document.getElementById('player');
    let clickedElement = document.getElementById(clickedId);

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
        isBoxMarked();
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
        isBoxMarked();
    } 

    // if box is marked, then alert that box is marked
    function isBoxMarked() {
        if (board[clickedId] === 'X' || board[clickedId] === 'O') {
            alert('The box has been marked, choose another box!');
        }
    }
    

    //Set up variables for each box
    const topLeft = board[0];
    const topMiddle = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middleMiddle = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomMiddle = board[7];
    const bottomRight = board[8];

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
    
}

