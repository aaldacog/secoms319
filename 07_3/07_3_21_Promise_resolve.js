/* 
Abraham Aldaco
March 2, 2023
*/

new Promise(function(resolve, reject) {

      // the function is executed automatically when the promise is constructed
     
      // after 1 second signal that the job is done with the result "done“
    
      setTimeout(() => resolve("done"), 1000);
    });
    