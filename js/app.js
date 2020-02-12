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

// button elements 
let pick1Btn = document.querySelector('.car1');
let pick2Btn = document.querySelector('.car2');
let raceBtn = document.querySelector('.race');
let rollBtn = document.querySelector('.roll');

// image element
let p1CarImages = document.querySelector('.p1CarImages');
let p2CarImages = document.querySelector('.p2CarImages');


// car images for line
let p1Racer1 = document.querySelector('.p1racer1');
let p1Racer2 = document.querySelector('.p1racer2');
let p1Racer3 = document.querySelector('.p1racer3');
let p1Racer4 = document.querySelector('.p1racer4');
let p2Racer1 = document.querySelector('.p2racer1');
let p2Racer2 = document.querySelector('.p2racer2');
let p2Racer3 = document.querySelector('.p2racer3');
let p2Racer4 = document.querySelector('.p2racer4');

// dice 
let dices = document.querySelectorAll('.dice');
let d1 = document.querySelector('.d1');
let d2 = document.querySelector('.d2');
let d4 = document.querySelector('.d4');
let d5 = document.querySelector('.d5');
let d6 = document.querySelector('.d6');
let d7 = document.querySelector('.d7');
let d8 = document.querySelector('.d8');

// Eventlisteners
pick1Btn.addEventListener('click', p1PickCar);
pick2Btn.addEventListener('click', p2PickCar);
p1Racer1.addEventListener('click', p1racer1Choice, );
p1Racer2.addEventListener('click', p1racer2Choice);
p1Racer3.addEventListener('click', p1racer3Choice);
p1Racer4.addEventListener('click', p1racer4Choice);

p2Racer1.addEventListener('click', p2racer1Choice, );
p2Racer2.addEventListener('click', p2racer2Choice);
p2Racer3.addEventListener('click', p2racer3Choice);
p2Racer4.addEventListener('click', p2racer4Choice);
btn.addEventListener('click', hideShowCar)
// may have to create duplicate for p2Racer1-4

// raceBtn.addEventListener('click', race);
// rollBtn.addEventListener('click', diceRoll);

// Functions    
function p1PickCar(event){
    p1CarImages.style.display = 'block';
    showCar.innerHTML = 'Player 1 Choose your Car!'
};
function p2PickCar(event){
    p2CarImages.style.display = 'block';
    showCar.innerHTML = 'Player 1 Choose your Car!'
};

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

// add p2 car to player 2 line
function p2racer1Choice(event){
    showCar.innerHTML = '';
    pick2Btn.style.display = 'none';
    p2.style.backgroundImage = 'url(assets/red.png)';
    showCar.appendChild(btn).setAttribute('class', 'choice');
    btn.innerHTML = 'Do you wnat this Car?'; 
    showCar.style.backgroundImage = 'url(assets/red.png)';
    showCar.style.display = 'block';
};
function p2racer2Choice(event){
    showCar.innerHTML = '';
    pick2Btn.style.display = 'none';
    p2.style.backgroundImage = 'url(assets/yellow.png)';
    showCar.appendChild(btn).setAttribute('class', 'choice');
    btn.innerHTML = 'Do you wnat this Car?';
    showCar.style.backgroundImage = 'url(assets/yellow.png)';
    showCar.style.display = 'block';
};
function p2racer3Choice(event){
    showCar.innerHTML = '';
    pick2Btn.style.display = 'none';
    p2.style.backgroundImage = 'url(assets/blue.png)';
    showCar.appendChild(btn).setAttribute('class', 'choice');
    btn.innerHTML = 'Do you wnat this Car?';
    showCar.style.backgroundImage = 'url(assets/blue.png)';
    showCar.style.display = 'block';
};
function p2racer4Choice(event){
    showCar.innerHTML = '';
    pick2Btn.style.display = 'none';
    p2.style.backgroundImage = 'url(assets/grey.png)';
    showCar.appendChild(btn).setAttribute('class', 'choice');
    btn.innerHTML = 'Do you wnat this Car?';
    showCar.style.backgroundImage = 'url(assets/grey.png)';
    showCar.style.display = 'block';
};

// hide show car 
function hideShowCar(){
    showCar.style.backgroundImage = '';
    showCar.innerHTML = '';
    p1CarImages.style.display = 'none'
};

// add click to display car 


