// set const for elements 
const car1 = {
    score: 0
};
const car2 = {
    score: 0
};

// cached elements
let p1 = document.querySelector('.player1');
let p2 = document.querySelector('.player2');
let pick1Btn = document.querySelector('.car1');
let pick2Btn = document.querySelector('.car2');
let carChoice = document.querySelector('.carChoice');
let p1Racer1 = document.querySelector('.racer1');
let p1Racer2 = document.querySelector('.racer2');
let p1Racer3 = document.querySelector('.racer3');
let p1Racer4 = document.querySelector('.racer4');


let dices = document.querySelectorAll('.dice');
let d1 = document.querySelector('.d1');
let d2 = document.querySelector('.d2');
let d4 = document.querySelector('.d4');
let d5 = document.querySelector('.d5');
let d6 = document.querySelector('.d6');
let d7 = document.querySelector('.d7');
let d8 = document.querySelector('.d8');

let raceBtn = document.querySelector('.race');
let rollBtn = document.querySelector('.roll');


// Eventlisteners
pick1Btn.addEventListener('click', pickCar);
pick2Btn.addEventListener('click', pickCar);
p1Racer1.addEventListener('click', racer1Choice);
p1Racer2.addEventListener('click', racer1Choice);
p1Racer3.addEventListener('click', racer1Choice);
p1Racer4.addEventListener('click', racer1Choice);
// may have to create duplicate for p2Racer1-4

// raceBtn.addEventListener('click', race);
// rollBtn.addEventListener('click', diceRoll);

// Functions
function pickCar(event){
    carChoice.style.display = 'block';
// car picked needs to be added to the track
}

function racer1Choice(event){
    pick1Btn.style.display = 'none';

}

