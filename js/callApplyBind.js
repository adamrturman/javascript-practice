const obj = {
	num:2
  };
  
 const obj2 = {
	num:5
  };

const addToThis = function(a) {
	return this.num + a;
}

//	call is used for function arguments
console.log(addToThis.call(obj, 3));    //	functionName.call(object, functionArgs) returns 5

const array = [1,2,3];
const addMoreToThis = function(a,b,c) {
	return this.num + a + b +c;
}

//	apply is used for array values
console.log(addMoreToThis.apply(obj, array));	//	returns 8
console.log(addMoreToThis.apply(obj2, array));	//	returns 11
console.log(addToThis.bind(obj, array));	//	returns a function, but it is not executed

const bound = addMoreToThis.bind(obj);

console.log(bound(1,2,3));	//	now the function is called and returns 8 

//  Objects to manipulate
const person1 = {
    name: "Adam",
    birthYear: 1988,
    isHungry: true
}

const person2 = {
    name: "Joey",
    birthYear: 1993,
    isHungry: false
}

//  Methods to manipulate data
const ageOnEvent = function(year) {
    return year - this.birthYear;
}
const agesOnEvent = function(year1, year2, year3) {
    return [year1 - this.birthYear, year2 - this.birthYear, year3 - this.birthYear]
}

const ateMeal = function() {
    return this.isHungry = false;
}
//  Add a job to a list
const singleResume = function(job) {
    const list = [];
    list.push(job);
    return list;
}

//  Add multiple jobs to a list
const multipleResume = function(...jobs) {
    const list = [];
    list.push(...jobs);
    return list;
}

//  Array of arguments to pass to apply
const dateArray = [2007, 2011, 2015]

//  Bind the resume methods to the person objects
const boundSingleResume = singleResume.bind(person1);
const boundMultipleResume = multipleResume.bind(person2)

console.log("How old was I in 2013?", ageOnEvent.call(person1, 2013))   //  returns 25
console.log("How old was I in 1993, 1997 and 2016?", agesOnEvent.call(person1, 1993, 1997, 2016))   //  returns 25
console.log("Am I hungry?", ateMeal.call(person1))  //  returns false
console.log("How old was Joey in 2007, 2011, and 2015?", agesOnEvent.apply(person2, dateArray)) //  returns 14, 18, 22
console.log("What jobs are on my resume?", boundSingleResume("teacher"))    //  returns ["teacher"]
console.log("What jobs are on Joey's resume?", boundMultipleResume("marketing director", "salesperson"))     //   returns ["marketing director", "salesperson"]