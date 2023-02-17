// add all the arguments received

function sum(a, b){
    let total = 0;
    for (let value of arguments)
        total += value;
        return total;
    }
    
console.log(sum(10,20,30,40));
