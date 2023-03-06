function sleep (t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {reject("IamtheResult")}, t)
    });
}

sleep(3000)
    .then(
        result => console.log("Result in then:",result),
        error => console.log("Error in then :",error)
    );
