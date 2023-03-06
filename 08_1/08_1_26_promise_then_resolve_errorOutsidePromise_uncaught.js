function sleep (t) {
    if (t <= 3000)
        throw new Error("Timer is invalid");
        
    return new Promise((resolve, reject) => {
            
        setTimeout(() => {resolve("IamtheResult")}, t)
    });
}

sleep(3000)
    .then(
        result => console.log("Result in then:",result),
        error => console.log("Error in then :",error)
    );
