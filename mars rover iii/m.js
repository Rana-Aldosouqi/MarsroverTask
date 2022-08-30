function moveRover(x,y){
  

    const rover ={

        direction: "East",
        x: 0,
        y: 2,
        xt:0,
        yt:2,
        abst:"false",
        instruc:"",
    };
    while(rover.x < x || rover.y < y ){


        switch (rover.direction) {
            case "North": 
              rover.yt++;
              break;
            case "East": 
              rover.xt++;
              break;
          }
            
            isobstacles(rover)
            if(rover.abst==="true"){
                switch (rover.direction) {
                    case "North": 
                      turnRight(rover);
                      rover.x++;
                      rover.instruc=rover.instruc + "rf";
                      break;
                    case "East": 
                      turnLeft(rover);
                      rover.y++;
                      rover.instruc=rover.instruc + "lf";
                      break;
                  }
            }else{

                if(rover.y==y && rover.x<x){

                    switch (rover.direction) {
                        case "North": 
                          turnRight(rover);
                          rover.x++;
                          rover.instruc=rover.instruc + "rf";
                          break;
                        case "East": 
                          rover.x++;
                          rover.instruc=rover.instruc + "f";
                          break;
                      }
                    
                }else if(rover.x==x && rover.y<y){

                    switch (rover.direction) {
                        case "North": 
                          rover.y++;
                          rover.instruc=rover.instruc + "f";
                          break;
                        case "East": 
                          turnLeft(rover);
                          rover.y++;
                          rover.instruc=rover.instruc + "lf";
                          break;
                    }

                }else if(rover.x==x && rover.y==y){

                    console.log(`it is the point`);
                     break;


                }else{

                    switch (rover.direction) {
                        case "North": 
                          rover.y++;
                          rover.instruc=rover.instruc + "f";
                          break;
                        case "East": 
                          rover.x++;
                          rover.instruc=rover.instruc + "f";
                          break;
                      }

                };

            
            
          };

    };
    

  //   console.log(`${rover.instruc} `);
  // console.log(`${x} + ${y}`);
  // console.log(`${rover.x} + ${rover.y}`);
 
      return rover.instruc;  


};

function isobstacles(rover){

    const obstacles = [
        { x: 1, y: 2 },
    //    { x: 3, y: 5 },
    //    { x: 7, y: 4 }
      ];
    obstacles.forEach(position => {
        if (rover.xt==position.x && rover.yt==position.y){
            // console.log('it is obstacle');
            // console.log(` ${rover.xt}, ${rover.yt}`);
            // console.log(`direction is ${rover.direction}`)
            rover.abst="true";
            rover.xt=rover.x;
            rover.yt=rover.y;

        }else{
            console.log('it is not obstacle');
            rover.abst="false";
            // console.log(` ${rover.xt}, ${rover.yt}`);
            // console.log(` ${rover.x}, ${rover.y}`);
            // console.log(`direction is ${rover.direction}`)
        //    console.log(`i ${position.x}, ${position.y}`);
        }
        
    });
};


function turnRight(rover) {

    switch(rover.direction){
        case"North":
             rover.direction="East";
             break;
   
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
module.exports= moveRover;
//moveRover(2,3);