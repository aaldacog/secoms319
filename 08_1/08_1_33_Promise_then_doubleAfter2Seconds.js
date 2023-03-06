/* 
Abraham Aldaco
March 2, 2023
*/

// promise/then - resolve

function doubleAfter2Seconds(x) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
}

doubleAfter2Seconds(10)
   .then((r) => {console.log(r);}
);

// promise/then - reject

function doubleAfter2Seconds(x) {
    return new Promise((resolve,reject) => {
        if (x <= 0 )
            throw new Error("Division by zero");
        else
            setTimeout(() => {reject(1000 / x);}, 2000);
    });
}

try {
doubleAfter2Seconds(10)
   .then(
    // here when you resolve
    (result) => {console.log("Result:",result);}
   )
   .catch(
    // here when reject
    (error) => {console.error("Error in catch method:",error);}
   );
} catch (error){
    console.log(`Caught by try/catch ${error}`);
}