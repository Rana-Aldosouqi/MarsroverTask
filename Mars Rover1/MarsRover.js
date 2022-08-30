

  function command(xr,yr,dirc, instruction) {

    const rover ={

        direction: dirc,
        x: xr,
        y: yr,
        abst:"false",
    };

    rover.direction= (dirc==="undefined") ? "North": dirc;
    rover.y=(yr==="undefined") ? "0": yr;
    rover.x=(xr==="undefined") ? "0" : xr;


    
    for (let i = 0; i < instruction.length; i++) {

      if(rover.abst=="true"){

        rover.abst="false"

        let instruct = instruction[i];
        switch (instruct) {
          case "l": 
            turnLeft(rover);
            break;
          case "r": 
            turnRight(rover);
            break;
          case "f": 
           moveForward(rover);
            break;
          case "b": 
           moveBackward(rover);
            break;
          default: 
            continue;
        }
       // break;

      }else{
        console.log(rover.abst);

        let instruct = instruction[i];
        switch (instruct) {
          case "l": 
            turnLeft(rover);
            break;
          case "r": 
            turnRight(rover);
            break;
          case "f": 
           moveForward(rover);
            break;
          case "b": 
           moveBackward(rover);
            break;
          default: 
            continue;
        }
      }

    }
   if(rover.abst=="true"){
    return `(${rover.x} , ${rover.y}) ${rover.direction} STOPPD`;
   }else{
    return `(${rover.x} , ${rover.y}) ${rover.direction}`;
   }
    

  }


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


  
  function moveBackward(rover) {
    switch (rover.direction) {
      case "North":
        isobstacles(rover);
        b=rover.y--;
        isobstacles(rover);
        rover.y=(rover.abst==="true") ? b : rover.y;
        break;
      case "West":
        isobstacles(rover);
        b=rover.x++;
        isobstacles(rover);
        rover.x=(rover.abst==="true") ? b : rover.x;
        break;
      case "South":
        isobstacles(rover);
        b=rover.y++
        isobstacles(rover);
        rover.y=(rover.abst==="true") ? b : rover.y;
        break;
      case "East":
        isobstacles(rover);
        b=rover.x--;
        isobstacles(rover);
        rover.x=(rover.abst==="true") ? b : rover.x;
        break;
    }
    
  }


  function moveForward(rover) {
    switch (rover.direction) {
      case "North":
        isobstacles(rover);
        b= rover.y++
        isobstacles(rover);
        rover.y=(rover.abst==="true") ? b : rover.y;
        break;
      case "West":
        isobstacles(rover);
        b=rover.x--;
        isobstacles(rover);
        rover.x=(rover.abst==="true") ? b : rover.x;
        break;
      case "South":
        isobstacles(rover);
        b=rover.y--;
        isobstacles(rover);
        rover.y=(rover.abst==="true") ? b : rover.y;
  
        break;
      case "East":
        isobstacles(rover);
        b=rover.x++;
        isobstacles(rover);
        rover.x=(rover.abst==="true") ? b : rover.x;
        break;
    }
}

function isobstacles(rover){

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
 module.exports=command;


