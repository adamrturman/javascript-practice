const numbers = {
    even: [2,4,6,8],
    odd: [1,3,5,7],
    zero: 0
}

console.log(Object.getOwnPropertyNames(numbers))    //  returns an array of all properties ["even", "odd", "zero"]

function noEven(object){
    let list = []
    Object.getOwnPropertyNames(object).forEach((key) => {
        if (key !== "even") {
            list.push(key)
        }
    })
    return list;
}

console.log(noEven(numbers))