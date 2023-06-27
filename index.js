let btnRef = document.querySelectorAll('.button-option');
let popupRef = document.querySelector('.popup');
let newgameBtn = document.getElementById('new-game');
let restartBtn = document.getElementById('restart');
let msgRef = document.getElementById('message');

let winningPatten = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6]
];

const disableButtons = () => {
    btnRef.forEach((e) => {
        e.disabled = true;
        popupRef.classList.remove("hide");
    })
};

const enableButtons = () => {
    btnRef.forEach((e) => {
        e.innerText = "";
        e.disabled = false;
    });
    popupRef.classList.add('hide');
};

newgameBtn.addEventListener('click', (e) => {
    count = 0;
    enableButtons();
});

restartBtn.addEventListener('click', (e) => {
    count = 0;
    enableButtons();
});

const winFunction = (letter) => {
    disableButtons();
    if (letter == "X"){
        msgRef.innerHTML = "X wins!";
    } else {
        msgRef.innerHTML = "O wins!";
    }
};

const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "Draw!";
}

const winCheker = () => {
    for (let i of winningPatten) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText
        ];
        if(element1 != "" && element2 != "" && element3 != ""){
            if(element1 == element2 && element2 == element3){
                winFunction(element1);
            }
        }
    }
};

let xTurn = true;
let count = 0;

btnRef.forEach((el) => {
    el.addEventListener('click', (e) => {
        if(xTurn){
            xTurn = false;
            el.innerText = 'X';
            el.disabled = true;
        }
        else {
            xTurn = true;
            el.innerText = 'O';
            el.disabled = true;
        }
        count += 1;
        if(count == 9){
            drawFunction();
        }
        winCheker();
    })
});
