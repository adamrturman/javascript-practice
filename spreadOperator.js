
const printSentence = function (string) {
    console.log(string);
}

//  This is not efficient. We are converting from an array, to a string, back to an array, then back to a string!

const arrayOfStrings1 = ['is', 'Andrew'];
//  Insert the elements of the array into a new array
const arrayOfStrings2 = ['Your', 'name', ...arrayOfStrings1, 'Dolan'];
//  Convert the array into a string (which will contain commas)
const stringSentence = arrayOfStrings2.toString();
//  Split the string at the the commas and form a new array
const splitSentence = stringSentence.split(',');
//  Convert that array back into a string with an empty string between each element
const joinedSentence = splitSentence.join(' ')

console.log(joinedSentence)

//  This is much more efficient. We are converting from an array to a string and then using a regex to replace
//  the commas with an empty string

const arrayOfStrings3 = ['is', 'Adam'];
//  Insert the elements of the array into a new array
const arrayOfStrings4 = ['My', 'name', ...arrayOfStrings3, 'Turman'];
//  Convert the array into a string
const sentenceWithCommas2 = arrayOfStrings4.toString()
//  The commas will still be there, so instead of
const normalSentence2 = sentenceWithCommas2.replaceAll(/,/gm, ' ');

console.log(printSentence(normalSentence2));
