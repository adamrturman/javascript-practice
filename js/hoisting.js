const a = "First";
const b = "Second";
const c = "Third";

console.log(a + ' ' + b + ' ' + c)  // returns 'First Second Third"

console.log(d) //   Will return undefined instead of a reference error
                //  since the variable declaration will be pulled to the top of the file
                // or hoisted and read before the code is executed

var d


e = 'Fourth'

console.log(e)  //  will return 'Fourth' - we can actually instantiate the variable before we
                //  declare it, since the declaration will be hoisted to the top of the file

var e


console.log(randomInteger()) //  This will return a random integer, despite being called before the 
                            //  named function is declared, because named function declarations are also hoisted

function randomInteger() {
    return Math.floor(Math.random() * 10);    
}

console.log(twoDigitNumber())           //  this will throw a reference error because it is not yet defined

const twoDigitNumber = function() {         //  unnamed functions are not hoisted, which saves space and improves speed 
    return Math.floor(Math.random() * 100)
}

console.log(twoDigitNumber())           //  this will work because it's after the declaration