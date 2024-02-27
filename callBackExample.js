function filter(intArray , func){
    let result = [];
    for( let num of intArray){
        if(func(num)){
            result.push(num)
        }
    }
    return result;
}

function odd(num){
    return num % 2 != 0;
}

function even(num){
    return num % 2 == 0;
}

let intArray = [5,9,7,4,6,5,89,698,75123,78,587,474,753,646,234]
let op = filter(intArray, even)
console.log(op)
