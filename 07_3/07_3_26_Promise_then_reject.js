/* 
Abraham Aldaco
March 2, 2023
*/

function myreject(t) {
    return new Error("Whoops! after "+t+"ms");
}
function nosleep(t){
    let mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {reject(myreject(t));}, t);
    });
    mypromise.then(
        result => alert(result),
        error => alert("Ultra-"+error)
    );
}
nosleep(3000);
    