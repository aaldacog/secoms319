/* 
Abraham Aldaco
March 2, 2023
*/

async function addAsync(x) {
    const a = await doubleAfter2Seconds(x);
    console.log(" - - - - - - - - - - Code running Asynchronous Part 1");
    const b = await doubleAfter2Seconds(a);
    console.log(" - - - - - - - - - - Code running Asynchronous Part 2");
    const c = await doubleAfter2Seconds(b);
    console.log(" - - - - - - - - - - Code running Asynchronous Part 3");
    return c;
}