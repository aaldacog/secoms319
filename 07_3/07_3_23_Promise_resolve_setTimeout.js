/* 
Abraham Aldaco
March 2, 2023
*/

function sleep (t) {
    return new Promise((resolve, reject) => {
   
      console.log("running promise");
   
     setTimeout(() => {
      console.log("running timer");
      resolve()
     }, t)
  })
}
  
sleep(3000);
  