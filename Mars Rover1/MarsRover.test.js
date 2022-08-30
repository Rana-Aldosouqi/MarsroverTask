//import
const command = require("./MarsRover.js");

test("position and direction for (turn left function)", ()=>{
    expect(command(0,0,"East","ll")).toBe("(0 , 0) West");
})

test("position and direction for (turn right function)", ()=>{
    expect(command(0,0,"East","r")).toBe("(0 , 0) South");
})

test("position and direction for (moveBackward function)", ()=>{
    expect(command(0,0,"East","b")).toBe("(-1 , 0) East");
})
test("position and direction for (moveForward function)", ()=>{
    expect(command(0,0,"East","f")).toBe("(1 , 0) East");
})

test("position and direction for (All functions)", ()=>{
    expect(command(4,2,"East","flfffrflb")).toBe("(6 , 4) North");
})
// set (0) if no given coordinat and set North if no given direction
test("position and direction if no given x or y or direction", ()=>{
    expect(command("undefined","undefined","undefined","l")).toBe("(0 , 0) West");
})
test("position and direction if obstacle", ()=>{
    expect(command(1,3,"North","f")).toBe("(1 , 3) North STOPPD");
})
// if no abstacle it will be (1,4 )
test("position and direction if obstacle at (1,4)", ()=>{
    expect(command(2,4,"East","b")).toBe("(2 , 4) East STOPPD");
})
test("position and direction if obstracls at (1,4)", ()=>{
    expect(command(3,4,"East","bb")).toBe("(2 , 4) East STOPPD");
})
// will stop at (2,4) and not inter (1,4) then rotate right
test("position and direction if obstacle at (1,4) but rotate Right 90d", ()=>{
    expect(command(3,4,"East","bbr")).toBe("(2 , 4) South");
})
