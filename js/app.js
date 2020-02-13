// set const for elements 
const car1 = {
    score: 0
};
const car2 = {
    score: 0
};
const btn = document.createElement('button');
const showCar = document.querySelector('.showCar');
const road = document.querySelector('#road');
const h2 = document.createElement('h2');
const resetBtn = document.createElement('button');
resetBtn.innerHTML = 'RESET';
resetBtn.style.margin = 'auto';
resetBtn.style.background = 'red';

// cached elements
let h1 = document.querySelector('h1');
let p1 = document.querySelector('.player1');
let p2 = document.querySelector('.player2');

// button elements 
let pick1Btn = document.querySelector('.car1');
let pick2Btn = document.querySelector('.car2');
let race1Btn = document.querySelector('.race1');
let race2Btn = document.querySelector('.race2');

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
let dice = document.querySelectorAll('.dice');
let d0 = document.querySelector('.d0');
let d1 = document.querySelector('.d1');
let d2 = document.querySelector('.d2');
let d3 = document.querySelector('.d3');
let d4 = document.querySelector('.d4');
let d5 = document.querySelector('.d5');
let d6 = document.querySelector('.d6');
let d7 = document.querySelector('.d7');


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
btn.addEventListener('click', hideShowCar);
resetBtn.addEventListener('click', reset);

race1Btn.addEventListener('click', race1);
race2Btn.addEventListener('click', race2);

// Functions    
// hide show car 
function hideShowCar(){
    showCar.style.backgroundImage = '';
    showCar.innerHTML = '';
    p1CarImages.style.display = 'none'
    p2CarImages.style.display = 'none'
};

// reset 
function reset(){
    pick1Btn.style.display = 'grid';
    pick2Btn.style.display = 'grid';
    h1.innerHTML = `Dice Racer Game`;
    road.setAttribute('class', '');
    car1.score = 0;
    p1.style.disp = '0px';
    p1.style.marginLeft = '0px';
    car2.score = 0;
    p2.style.marginLeft = '0px';
    race1Btn.style.display = 'none';
    race2Btn.style.display = 'none';
    h1.style.fontSize = '';
    d0.style.display = 'none';
    d1.style.display = 'none';
    d2.style.display = 'none';
    d3.style.display = 'none';
    d4.style.display = 'none';
    d5.style.display = 'none';
    d6.style.display = 'none';
    d7.style.display = 'none';
    resetBtn.remove();
};

// Car picked needs to be added to the track
function p1PickCar(event){
    p1CarImages.style.display = 'block';
    showCar.style.display = 'block';
    h2.innerHTML = 'Player 1 Choose your Car!';
    showCar.appendChild(h2);
    pick1Btn.style.display = 'none';
};
function p2PickCar(event){
    p2CarImages.style.display = 'block';
    showCar.style.display = 'block';
    h2.innerHTML = 'Player 2 Choose your Car!'
    showCar.appendChild(h2);
    pick2Btn.style.display = 'none';
};

// Add p1 car to player1 line
function p1racer1Choice(event){
    showCar.innerHTML = '';
    p1.style.backgroundImage = 'url(images/red.png)';
    showCar.appendChild(btn).setAttribute('class', 'choice');
    btn.innerHTML = 'Do you want this Car?'; 
    showCar.style.backgroundImage = 'url(images/red.png)';
    showCar.style.display = 'block';
    race1Btn.style.display = 'grid';
};
function p1racer2Choice(event){
    showCar.innerHTML = '';
    p1.style.backgroundImage = 'url(images/yellow.png)';
    showCar.appendChild(btn).setAttribute('class', 'choice');
    btn.innerHTML = 'Do you want this Car?';
    showCar.style.backgroundImage = 'url(images/yellow.png)';
    showCar.style.display = 'block';
    race1Btn.style.display = 'grid';
};
function p1racer3Choice(event){
    showCar.innerHTML = '';
    p1.style.backgroundImage = 'url(images/blue.png)';
    showCar.appendChild(btn).setAttribute('class', 'choice');
    btn.innerHTML = 'Do you wnat this Car?';
    showCar.style.backgroundImage = 'url(images/blue.png)';
    showCar.style.display = 'block';
    race1Btn.style.display = 'block';
};
function p1racer4Choice(event){
    showCar.innerHTML = '';
    p1.style.backgroundImage = 'url(images/grey.png)';
    showCar.appendChild(btn).setAttribute('class', 'choice');
    btn.innerHTML = 'Do you wnat this Car?';
    showCar.style.backgroundImage = 'url(images/grey.png)';
    showCar.style.display = 'block';
    race1Btn.style.display = 'block';
};

// add p2 car to player 2 line
function p2racer1Choice(event){
    showCar.innerHTML = '';
    p2.style.backgroundImage = 'url(images/red.png)';
    showCar.appendChild(btn).setAttribute('class', 'choice');
    btn.innerHTML = 'Do you wnat this Car?'; 
    showCar.style.backgroundImage = 'url(images/red.png)';
    showCar.style.display = 'block';
    race2Btn.style.display = 'block';
};
function p2racer2Choice(event){
    showCar.innerHTML = '';
    p2.style.backgroundImage = 'url(images/yellow.png)';
    showCar.appendChild(btn).setAttribute('class', 'choice');
    btn.innerHTML = 'Do you wnat this Car?';
    showCar.style.backgroundImage = 'url(images/yellow.png)';
    showCar.style.display = 'block';
    race2Btn.style.display = 'block';
};
function p2racer3Choice(event){
    showCar.innerHTML = '';
    p2.style.backgroundImage = 'url(images/blue.png)';
    showCar.appendChild(btn).setAttribute('class', 'choice');
    btn.innerHTML = 'Do you wnat this Car?';
    showCar.style.backgroundImage = 'url(images/blue.png)';
    showCar.style.display = 'block';
    race2Btn.style.display = 'block';
};
function p2racer4Choice(event){
    showCar.innerHTML = '';
    p2.style.backgroundImage = 'url(images/grey.png)';
    showCar.appendChild(btn).setAttribute('class', 'choice');
    btn.innerHTML = 'Do you wnat this Car?';
    showCar.style.backgroundImage = 'url(images/grey.png)';
    showCar.style.display = 'block';
    race2Btn.style.display = 'block';
};

// dice
function random(){
    return  Math.floor(Math.random() * Math.floor(dice.length));
}

// START
function race1(){
    road.setAttribute('class', 'roadStart');
if (car1.score >= 1400){
    h1.style.fontSize = '100px';
    h1.innerHTML =`Player 1 WON!!! Better luck next time Player 2.`;
    h1.appendChild(resetBtn);
    h1.after(resetBtn);
    } else if (random() === 0){
        d0.style.display = 'block';
        h1.innerHTML = 'Player 1 got a flat tire! Lose turn Player 2 race!';
        race1Btn.style.display = 'none'; 
        race2Btn.style.display = 'grid'; 
        d1.style.display = 'none'
        d2.style.display = 'none'
        d3.style.display = 'none'
        d4.style.display = 'none'
        d5.style.display = 'none'
        d6.style.display = 'none'
        d7.style.display = 'none'
    }else if(random() === 1){
        d1.style.display = 'block';
        h1.innerHTML ='Player 1 rolled a 1 and gained a 10 yard lead! Player 2 race!';
        car1.score += 10;
        p1.style.marginLeft = car1.score +'px';
        race1Btn.style.display = 'none';    
        race2Btn.style.display = 'grid';  
        d0.style.display = 'none'
        d2.style.display = 'none'
        d3.style.display = 'none'
        d4.style.display = 'none'
        d5.style.display = 'none'
        d6.style.display = 'none'
        d7.style.display = 'none'    
    }else if(random() === 2){
        d2.style.display = 'block';
        h1.innerHTML ='Player 1 rolled a 2 and gained a 20 yard lead! Player 2 race!';
        car1.score += 20;
        p1.style.marginLeft = car1.score +'px';
        race1Btn.style.display = 'none';    
        race2Btn.style.display = 'grid';
        d0.style.display = 'none'
        d1.style.display = 'none'
        d3.style.display = 'none'
        d4.style.display = 'none'
        d5.style.display = 'none'
        d6.style.display = 'none'
        d7.style.display = 'none'    
    }else if(random() === 3){
        d3.style.display = 'block';
        h1.innerHTML ='Player 1 rolled a 3 and gained a 30 yard lead! Player 2 race!';
        car1.score += 30;
        p1.style.marginLeft = car1.score +'px';
        race1Btn.style.display = 'none';    
        race2Btn.style.display = 'grid';
        d0.style.display = 'none'
        d1.style.display = 'none'
        d2.style.display = 'none'
        d4.style.display = 'none'
        d5.style.display = 'none'
        d6.style.display = 'none'
        d7.style.display = 'none'    
    }else if(random() === 4){
        d4.style.display = 'block';
        h1.innerHTML ='Player 1 rolled a 4 and gained a 40 yard lead! Player 2 race!';
        car1.score += 40;
        p1.style.marginLeft = car1.score +'px';
        race1Btn.style.display = 'none';    
        race2Btn.style.display = 'grid';
        d0.style.display = 'none'
        d1.style.display = 'none'
        d2.style.display = 'none'
        d3.style.display = 'none'
        d5.style.display = 'none'
        d6.style.display = 'none'
        d7.style.display = 'none'    
    }else if(random() === 5){
        d5.style.display = 'block';
        h1.innerHTML ='Player 1 rolled a 5 and gained a 50 yard lead! Player 2 race!';
        car1.score += 50;
        p1.style.marginLeft = car1.score +'px';
        race1Btn.style.display = 'none';    
        race2Btn.style.display = 'grid';
        d0.style.display = 'none'
        d1.style.display = 'none'
        d2.style.display = 'none'
        d3.style.display = 'none'
        d4.style.display = 'none'
        d6.style.display = 'none'
        d7.style.display = 'none'      
    }else if(random() === 6){
        d6.style.display = 'block';
        h1.innerHTML ='Player 1 rolled a 6 and gained a 60 yard lead! Player 2 race!';
        car1.score += 60;
        p1.style.marginLeft = car1.score +'px';
        race1Btn.style.display = 'none';    
        race2Btn.style.display = 'grid';
        d0.style.display = 'none'
        d1.style.display = 'none'
        d2.style.display = 'none'
        d3.style.display = 'none'
        d4.style.display = 'none'
        d5.style.display = 'none'
        d7.style.display = 'none'      
    }else {
        d7.style.display = 'block';
        h1.innerHTML ='Player 1 rolled a BOOST and gained a 80 yard lead! Player 2 race!';
        car1.score += 80;
        p1.style.marginLeft = car1.score +'px';
        race1Btn.style.display = 'none';    
        race2Btn.style.display = 'grid'; 
        d0.style.display = 'none'
        d1.style.display = 'none'
        d2.style.display = 'none'
        d3.style.display = 'none'
        d4.style.display = 'none'
        d5.style.display = 'none'
        d6.style.display = 'none'
    }
};
function race2(){
    road.setAttribute('class', 'roadStart');
    if (car2.score >= 1400){
        h1.style.fontSize = '100px';
        h1.innerHTML = `Player 2 WON!!! Better luck next time Player 1.`
        h1.appendChild(resetBtn);
        h1.after(resetBtn);
    } else if (random() === 0){
        d0.style.display = 'block';
        h1.innerHTML = 'Player 2 got a flat tire! Lose turn Player 1 race!';
        race2Btn.style.display = 'none';    
        race1Btn.style.display = 'grid';
        d1.style.display = 'none'
        d2.style.display = 'none'
        d3.style.display = 'none'
        d4.style.display = 'none'
        d5.style.display = 'none'
        d6.style.display = 'none'
        d7.style.display = 'none'    
    }else if(random() === 1){
        d1.style.display = 'block';
        h1.innerHTML ='Player 2 rolled a 1 and gained a 10 yard lead! Player 1 race!';
        car2.score += 10;
        p2.style.marginLeft = car2.score +'px';
        race2Btn.style.display = 'none';    
        race1Btn.style.display = 'grid'; 
        d0.style.display = 'none'
        d2.style.display = 'none'
        d3.style.display = 'none'
        d4.style.display = 'none'
        d5.style.display = 'none'
        d6.style.display = 'none'
        d7.style.display = 'none'     
    }else if(random() === 2){
        d2.style.display = 'block';
        h1.innerHTML ='Player 2 rolled a 2 and gained a 20 yard lead! Player 1 race!'; 
        car2.score += 20;
        p2.style.marginLeft = car2.score +'px';
        race2Btn.style.display = 'none';    
        race1Btn.style.display = 'grid';  
        d0.style.display = 'none'
        d1.style.display = 'none'
        d3.style.display = 'none'
        d4.style.display = 'none'
        d5.style.display = 'none'
        d6.style.display = 'none'
        d7.style.display = 'none'   
    }else if(random() === 3){
        d3.style.display = 'block';
        h1.innerHTML ='Player 2 rolled a 3 and gained a 30 yard lead! Player 1 race!';
        car2.score += 30;
        p2.style.marginLeft = car2.score +'px';
        race2Btn.style.display = 'none';    
        race1Btn.style.display = 'grid'; 
        d0.style.display = 'none'
        d1.style.display = 'none'
        d2.style.display = 'none'
        d4.style.display = 'none'
        d5.style.display = 'none'
        d6.style.display = 'none'
        d7.style.display = 'none'     
    }else if(random() === 4){
        d4.style.display = 'block';
        h1.innerHTML ='Player 2 rolled a 4 and gained a 40 yard lead! Player 1 race!';
        car2.score += 40;
        p2.style.marginLeft = car2.score +'px';
        race2Btn.style.display = 'none';    
        race1Btn.style.display = 'grid';         
        d0.style.display = 'none'
        d1.style.display = 'none'
        d2.style.display = 'none'
        d3.style.display = 'none'
        d5.style.display = 'none'
        d6.style.display = 'none'
        d7.style.display = 'none'     
    }else if(random() === 5){
        d5.style.display = 'block';
        h1.innerHTML ='Player 2 rolled a 5 and gained a 50 yard lead! Player 1 race!';
        car2.score += 50;
        p2.style.marginLeft = car2.score +'px';
        race2Btn.style.display = 'none';    
        race1Btn.style.display = 'grid';  
        d0.style.display = 'none'
        d1.style.display = 'none'
        d2.style.display = 'none'
        d3.style.display = 'none'
        d4.style.display = 'none'
        d6.style.display = 'none'
        d7.style.display = 'none' 
    }else if(random() === 6){
        d6.style.display = 'block';
        h1.innerHTML ='Player 2 rolled a 6 and gained a 60 yard lead! Player 1 race!';
        car2.score += 60;
        p2.style.marginLeft = car2.score +'px';
        race2Btn.style.display = 'none';    
        race1Btn.style.display = 'grid';
        d0.style.display = 'none'
        d1.style.display = 'none'
        d2.style.display = 'none'
        d3.style.display = 'none'
        d4.style.display = 'none'
        d5.style.display = 'none'
        d7.style.display = 'none'    
    }else {
        d7.style.display = 'block';
        h1.innerHTML ='Player 2 rolled a BOOST and gained a 80 yard lead! Player 1 race!';
        car2.score += 80;
        p2.style.marginLeft = car2.score +'px';
        race2Btn.style.display = 'none';    
        race1Btn.style.display = 'grid';  
        d0.style.display = 'none'
        d1.style.display = 'none'
        d2.style.display = 'none'
        d3.style.display = 'none'
        d4.style.display = 'none'
        d5.style.display = 'none'
        d6.style.display = 'none' 
    }
};

