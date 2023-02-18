const words = ['PYTHON', 'KOTLIN', 'PHP', 'JAVA', 'SWIFT'];
const randomNum = Math.floor(Math.random() * words.length);
const buttons = document.querySelectorAll('.btn');
let score = document.querySelector("#score");
let img = document.querySelector("img");
let h1 = document.querySelector('h1');
let winCard = document.querySelector('#win');
let card = document.querySelector('.card');
const randomWord = words[randomNum];
let arr = [];
let checkerArr = [];
let counter = 0;

for (let x of randomWord) {
    arr.push(' _');
}

for (let x of randomWord) {
    checkerArr.push(x);
}

for (let x of arr) {
    h1.innerText += x;
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (counter < 5) {
            let letter = button.innerText;
            let indicesOfLetter = [];
            for (let i = 0; i < checkerArr.length; i++) {
                if (checkerArr[i] === letter) {
                    indicesOfLetter.push(i);
                }
            }
            if (indicesOfLetter.length > 0) {
                for (let index of indicesOfLetter) {
                    arr[index] = letter;
                }
                h1.innerText = '';
                for (let x of arr) {
                    h1.innerText += x;
                }
                checkForWin()
            } else {
                counter += 1;
                if (counter === 5) {
                    card.style.top = '10%';
                }
                img.src = `img/${counter}.svg`;
                score.innerText = `Wrong ${counter}/5`;
                e.target.style.backgroundColor = 'red';
            }
        }
    })
});

function checkForWin(){
    if(h1.innerText === randomWord){
        winCard.style.top = '10%';
    }
}