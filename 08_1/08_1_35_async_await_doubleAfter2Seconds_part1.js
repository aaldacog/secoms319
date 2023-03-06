/* 
Abraham Aldaco
March 2, 2023
*/

console.log("\n\n\nSequential code before Asynchronous <- Start");
const x = 2;
addAsync(x)
    .then(result => console.log(result));
console.log("Sequential running after Asynchronous <- Stop");