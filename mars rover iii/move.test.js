const move = require("./m.js");


test("string to move from point(0,2)E to point (2,3) and avoid obstacle at (1,2)", ()=>{
    expect(move(2,3)).toBe("lfrff");
});
