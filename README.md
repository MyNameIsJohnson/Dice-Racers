Dice-Racer Game

Wireframe included in assets folder `assets.wireframe.png`

I made this game because I wanted to showcase my abilities to use HTML, CSS and Javascript to built a drag racing game. The user will win on chance by random dice rolls. that also includes a boost (benefit) and a flat tire no point gain. Multiple functions and DOM manipulations are used to create this game. It can still include many other features the improve the UI like more graphics and transitions and also better use of Objects. I only created two objects that contains the player score but feel that these objects could've been used to its full potential. My lack of understanding of how the OOP resorted me in used longer syntx with multiple global variables and functions instead. Multiple variables were defined for the same object just so I could manipulate them for different uses.  

Objective: Players will take turns rolling dice to reach the finish line. 

Board: Main screen shows two player icons and a track on the screen. The right side will show a finish line. Player 1 and Player 2 will take turns choosing there car. A button will initiate the race with images of dice being spun. 

Required: 2 player images, 6 dice image

Code: 
1. player object that has name and score
2. finish line is equal to score 1000 // dont need this
3. dice roll with Math.random()
4. Cars will move along the road on the DOM's x-axis depending on the dice roll
