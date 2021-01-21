const Adam = {
    age: 32,
    height: 74,
    job: 'programmer'
}

for (let attribute in Adam) {
    console.log(attribute)
}

//  ^ returns the keys
//  age
//  height
//  job

for (let attribute in Adam) {
    console.log(Adam[attribute])
}

//  ^ returns the properties
//  32
//  74
//  'programmer'

const proto1 = {
    morningGreeting: "Good morning",
    greet: function() {
        console.log(this.greeting)
    }
}

Object.setPrototypeOf(proto1, {eveningGreeting: "Good evening"})

const object1 = Object.create(proto1)
object1.greeting = "Hello"

console.log(object1)    //  returns {greeting: "Hello"}

const object2 = Object.create(proto1)
object2.greeting = "Hi"
object2.daytime = "Morning"
object2.type = "greeting"
object2.setGreeting = function() {
    if (this.daytime === "Morning") {
        this.greeting = morningGreeting
    } else {
        this.greeting = this.eveningGreeting
    }
}

for (let something in object2) {
    console.log(object2[something])
}

//  ^ returns 
//  Hi 
//  Morning
//  function() {if (this.daytime === "Morning") {this.greeting = morningGreeting} else {this.greeting = this.eveningGreeting}}
//  Good morning (from prototype)
//  function() {console.log(this.greeting)} (from prototype)
//  Good evening (from prototype)

//  In order to avoid checking the prototype chain
for (let something in object2) {
    if(object2.hasOwnProperty(something))
    console.log(object2[something])
}

//  ^ Now only Hi - Morning - greeting and the function are show are shown

for (let something in object2) {
    if(object2.hasOwnProperty(something) && typeof object2[something] !== "function")
    console.log(object2[something])
}