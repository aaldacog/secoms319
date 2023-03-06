function sleep (t) {
    return new Promise((resolve, reject) => {
        if (t <= 3000)
            throw new Error("Timer is invalid");
            
        setTimeout(() => {resolve("IamtheResult")}, t)
    });
}

sleep(3000)
    .then(result => console.log("Result in then:",result))
    .catch(error => console.log("Error in CATCH :",error));
        