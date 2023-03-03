/* 
Abraham Aldaco
March 2, 2023
*/
function nosleep(t){
    return new Promise((resolve, reject) => {
    console.log("running promise");
    setTimeout(() => {
        console.log("running timer");
        reject(new Error("Whoops!"));
    }, t);
    }).catch(error => alert(error.message));
}

nosleep(3000);