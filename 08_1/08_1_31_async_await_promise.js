/*
Abraham Aldaco
March 4th, 2023
Async / await
*/

async function someAsyncFunction() { 
  // pause execution until the promise is resolved or rejected 
  console.log("entering to promise");
  const result = await someAsyncOperation(); 
  console.log(result); 
} 

function someAsyncOperation() { 
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
      // after some time, 
      // the promise will be resolved with value "Hello World!" 
      resolve('Hello World!'); 
    }, 3000); 
  }); 
} 

someAsyncFunction();
console.log("This executes while someOperation waits to complete.");