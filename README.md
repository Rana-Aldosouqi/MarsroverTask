# MarsroverTask

###### This project is working on translates the commands sent from earth to instructions that are understood by the rover.
###### It contains two Folders __MarsRover1 and marsroveriii__ .
###### **MarsRover1** contains the MarsRover.js file and the test file (MarsRover.test.js).
![d](https://user-images.githubusercontent.com/33006064/187456621-a957bddf-c57e-4577-bfa0-3115464192a6.PNG)
###### There are 6 Functions in `MarsRover.js`
##### 1.command()

This is the main Funcion it receive initial value of  (x,y) point and direction of the rover the 
instruction to move and then return the current coordinates and direcion . 

```js
function command(xr,yr,dirc, instruction) {
if(rover.abst=="true"){
    return `(${rover.x} , ${rover.y}) ${rover.direction} STOPPD`;
   }else{
    return `(${rover.x} , ${rover.y}) ${rover.direction}`;
   };
}
```

##### 2.turnLeft()

It is called in the `command()` if instrucion = 'l' to Rotate left by 90 degrees 

```js
 function turnLeft(rover) {
    
    switch(rover.direction){
        case"North":
             rover.direction="West";
             break;
        case"West":
             rover.direction="South";
             break;
        case"South":
             rover.direction="East";
             break;
        case"East":
             rover.direction="North";
             break;
   
    }
  
}   
```
##### 3.turnRight()

It is called in the `command()` if instrucion = 'r' to Rotate right by 90 degrees 

```js
  function turnRight(rover) {

    switch(rover.direction){
        case"North":
             rover.direction="East";
             break;
        case"East":
             rover.direction="South";
             break;
        case"South":
             rover.direction="West";
             break;
        case"West":
             rover.direction="North";
             break;
   
    }
 
  }

```
##### 4.moveBackward(rover)
##### 5.moveForward(rover)
It is called in the `command()` if instrucion = 'f' or 'b';
##### 6.isobstacles(rover)

It is called in the `command()` and check if (x,y) point is obstacles befor move the rover and return true or false 

```js
  const obstacles = [
        { x: 1, y: 4 },
        { x: 3, y: 5 },
        { x: 7, y: 4 }
      ];
    obstacles.forEach(position => {
        if (rover.x==position.x && rover.y==position.y){
            console.log('it is obstacle');
            rover.abst="true";
        }else{
            console.log('it is not obstacle');
            console.log(`i ${rover.x}, ${rover.y}`);
            console.log(`i ${position.x}, ${position.y}`);
        }
        
    });
}

```



