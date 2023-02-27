
// Pass a function as an argument

function doubleEven(n){
    if (n % 2 === 0){
        return n * 2
    } else {
        return n
    }
}

function execSome(myFunc){
    myFunc()
}

// execSome(function() {
//     console.log(doubleEven(11));
// });

execSome(() => console.log(doubleEven(11)));
