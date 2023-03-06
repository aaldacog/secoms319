/* 
Abraham Aldaco
March 2, 2023
*/

// promise/then - resolve

function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(x * 2);
        console.log("In Promise after 2 secs:");
        }, 2000);
    });
}

console.log("\n\n\nSequential code before Asynchronous <- Start")
doubleAfter2Seconds(2)
    .then(resp1 => {console.log("R1 :",resp1);
        console.log(" - - - - - - - - - - Code running Asynchronous Part 1");
        doubleAfter2Seconds(resp1)
            .then(resp2 => {console.log("R2 :",resp2);
                console.log(" - - - - - - - - - - Code running Asynchronous Part 2");
                doubleAfter2Seconds(resp2)
                    .then(resp3 =>{console.log("R3 :",resp3,"  Total :",resp3);
                        console.log(" - - - - - - - - - - Code running Asynchronous Part 3");
                    });
            });
    });
console.log("Sequential running after Asynchronous <- Stop")



// Using async / await
function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2);
            console.log("After 2secs :",x*2);
        }, 2000);
    });
}

async function addAsync(x) {
    const a = await doubleAfter2Seconds(x);
    console.log(" - - - - - - - - - - Code running Asynchronous Part 1");
    const b = await doubleAfter2Seconds(a);
    console.log(" - - - - - - - - - - Code running Asynchronous Part 2");
    const c = await doubleAfter2Seconds(b);
    console.log(" - - - - - - - - - - Code running Asynchronous Part 3");
    return c;
}

console.log("\n\n\nSequential code before Asynchronous <- Start");
const x = 2;
addAsync(x)
    .then(result => console.log(result));
console.log("Sequential running after Asynchronous <- Stop");