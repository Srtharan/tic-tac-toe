let count = 0;
let val = 'X';
let arrx = [];
let arro = [];

function select(user) {
    if (count % 2 == 0) {
        val = 'X';
        arrx.push(user);

        document.getElementById('print').textContent = 'User O Play';
        let bt = document.getElementById(user);
        bt.disabled = true;
    }
    else {
        val = 'O';
        arro.push(user);

        document.getElementById('print').textContent = 'User X Play';
        let bt = document.getElementById(user);
        bt.disabled = true;
    }

    count++;
    document.getElementById(user).innerHTML = val;
    console.log(user); // prints current user

    console.log('arrx: ' + arrx);
    console.log('arro: ' + arro);

    let flag = false;
    if (count >= 5) {
        if ( // arrx
            // row-wise
            (arrx.includes('b1') && arrx.includes('b2') && arrx.includes('b3')) ||
            (arrx.includes('b4') && arrx.includes('b5') && arrx.includes('b6')) ||
            (arrx.includes('b7') && arrx.includes('b8') && arrx.includes('b9')) ||

            // col-wise
            (arrx.includes('b1') && arrx.includes('b4') && arrx.includes('b7')) ||
            (arrx.includes('b2') && arrx.includes('b5') && arrx.includes('b8')) ||
            (arrx.includes('b3') && arrx.includes('b6') && arrx.includes('b9')) ||

            // diagonals
            (arrx.includes('b1') && arrx.includes('b5') && arrx.includes('b9')) ||
            (arrx.includes('b7') && arrx.includes('b5') && arrx.includes('b3'))
        ) {
            flag = true;
            document.getElementById('print').textContent = ' X Wins!';
            alert('X Wins!')
        }

        else if ( // arro
            // row-wise
            (arrx.includes('b1') && arrx.includes('b2') && arrx.includes('b3')) ||
            (arrx.includes('b4') && arrx.includes('b5') && arrx.includes('b6')) ||
            (arrx.includes('b7') && arrx.includes('b8') && arrx.includes('b9')) ||

            // col-wise
            (arrx.includes('b1') && arrx.includes('b4') && arrx.includes('b7')) ||
            (arrx.includes('b2') && arrx.includes('b5') && arrx.includes('b8')) ||
            (arrx.includes('b3') && arrx.includes('b6') && arrx.includes('b9')) ||

            // diagonals
            (arrx.includes('b1') && arrx.includes('b5') && arrx.includes('b9')) ||
            (arrx.includes('b7') && arrx.includes('b5') && arrx.includes('b3'))
        ) {
            flag = true;
            document.getElementById('print').textContent = 'O Wins!';
            alert('O Wins!')
        }
    }
    if ((~flag) && (count == 9)) {
        document.getElementById('print').textContent = 'Match Draw';
    }

    if (count >= 9) {
        document.getElementById('print').textContent = 'Start a New Game';
    }
}

function restart() {
    // reloads the page
    location.reload();
}