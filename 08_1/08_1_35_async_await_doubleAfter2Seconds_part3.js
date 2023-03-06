/* 
Abraham Aldaco
March 2, 2023
*/

// Using async / await
function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2);
            console.log("After 2secs :",x*2);
        }, 2000);
    });
}