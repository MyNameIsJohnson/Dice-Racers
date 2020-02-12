// set const for elements 
const car1 = {
    score: 0
};
const car2 = {
    score: 0
};
const btn = document.createElement('button');
const showCar = document.querySelector('.showCar');

// cached elements
let p1 = document.querySelector('.player1');
let p2 = document.querySelector('.player2');
let pick1Btn = document.querySelector('.car1');
let pick2Btn = document.querySelector('.car2');
let carChoice = document.querySelector('.carImages');
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
pick1Btn.addEventListener('click', p1PickCar);
pick2Btn.addEventListener('click', p2PickCar);
p1Racer1.addEventListener('click', p1racer1Choice, );
p1Racer2.addEventListener('click', p1racer2Choice);
p1Racer3.addEventListener('click', p1racer3Choice);
p1Racer4.addEventListener('click', p1racer4Choice);
// may have to create duplicate for p2Racer1-4

// raceBtn.addEventListener('click', race);
// rollBtn.addEventListener('click', diceRoll);

// Functions    
function p1PickCar(event){
    carChoice.style.display = 'block';
    showCar.innerHTML = 'Player 1 Choose your Car!'

}
function p2PickCar(event){
    carChoice.style.display = 'block';
    pick1Btn.setAttribute('class', 'carPromt');
}

// Car picked needs to be added to the track
// Add p1 car to player1 line
function p1racer1Choice(event){
    showCar.innerHTML = '';
    pick1Btn.style.display = 'none';
    p1.style.backgroundImage = 'url(assets/red.png)';
    showCar.appendChild(btn).setAttribute('class', 'choice');
    btn.innerHTML = 'Do you wnat this Car?'; 
    showCar.style.backgroundImage = 'url(assets/red.png)';
    showCar.style.display = 'block';
};
function p1racer2Choice(event){
    showCar.innerHTML = '';
    pick1Btn.style.display = 'none';
    p1.style.backgroundImage = 'url(assets/yellow.png)';
    showCar.appendChild(btn).setAttribute('class', 'choice');
    btn.innerHTML = 'Do you wnat this Car?';
    showCar.style.backgroundImage = 'url(assets/yellow.png)';
    showCar.style.display = 'block';
};
function p1racer3Choice(event){
    showCar.innerHTML = '';
    pick1Btn.style.display = 'none';
    p1.style.backgroundImage = 'url(assets/blue.png)';
    showCar.appendChild(btn).setAttribute('class', 'choice');
    btn.innerHTML = 'Do you wnat this Car?';
    showCar.style.backgroundImage = 'url(assets/blue.png)';
    showCar.style.display = 'block';
};
function p1racer4Choice(event){
    showCar.innerHTML = '';
    pick1Btn.style.display = 'none';
    p1.style.backgroundImage = 'url(assets/grey.png)';
    showCar.appendChild(btn).setAttribute('class', 'choice');
    btn.innerHTML = 'Do you wnat this Car?';
    showCar.style.backgroundImage = 'url(assets/grey.png)';
    showCar.style.display = 'block';
};

// add click to display car 
