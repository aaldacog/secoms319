/* 
Abraham Aldaco
March 2, 2023
*/

new Promise(function(resolve, reject) {

    // the function is executed automatically when the promise is constructed

      setTimeout(() => reject(new Error("Whoops!")), 1000);
});
    
    