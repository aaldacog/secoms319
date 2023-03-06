/* 
Abraham Aldaco
March 2, 2023
*/

// promise/then - resolve

function sleep (t) {
    let mypromise = new Promise((resolve, reject) => {
      setTimeout(() => {resolve("IamtheResult")}, t)
    });
    mypromise.then(
        result => console.log("R:",result),
        error => console.log("E",error)
    );
}

sleep(3000);


// promise / then - reject

function nosleep (t) {
    let mypromise = new Promise((resolve, reject) => {
      setTimeout(() => {reject("IamtheResult")}, t)
    });
    mypromise.then(
        result => console.log("R:",result),
        error => console.log("E",error)
    );
}

nosleep(3000);