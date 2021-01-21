const Adam = {
    age: 32,
    height: 74,
    job: 'programmer'
}

function processedPerson1(person){
    console.log(Object.keys(person))
}

processedPerson1(Adam)   //  returns an array of all keys ["age", "height", "job"]


function processedPerson2(person) {
    let list = []
    Object.keys(person).forEach((key) => {
        if (key.length === 3){
            list.push(key)
        }
    })
    return list;
}

function processedPerson3(person) {
    return Object.keys(person).map((key) => {
        return person[key]
        }
    )}



console.log(processedPerson2(Adam)) //  returns an array of keys that satisfy conditional within callback ["age", "job"]
console.log(processedPerson3(Adam)) //  returns an array of values ["32", 74, "programmer"]