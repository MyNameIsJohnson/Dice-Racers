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
let dices = document.querySelectorAll('.dice');
let d1 = document.querySelector('.d1');
let d2 = document.querySelector('.d2');
let d3 = document.querySelector('.d3');
let d4 = document.querySelector('.d4');
let d5 = document.querySelector('.d5');
let d6 = document.querySelector('.d6');
let d7 = document.querySelector('.d7');
let d8 = document.querySelector('.d8');
let carPick1 = document.querySelector('.car1');
let carPick2 = document.querySelector('.car2');
let raceBtn = document.querySelector('.race');
let rollBtn = document.querySelector('.roll');

// Eventlisteners
car1.addEventListener('click', pickCar);
car2.addEventListener('click', pickCar);
raceBtn.addEventListener('click', race);
rollBtn.addEventListener('click', diceRoll);

// Functions



