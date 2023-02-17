// Using Rest operator

function sum(...args){
    return args.reduce(
        (previousValue,currentValue)=>
        previousValue+currentValue);
    }
    
console.log(sum(10,20,30,40));
