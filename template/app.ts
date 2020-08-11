/**
 * Sample
 */
console.log("******** Sample **********");
console.log("Your TypeScript code goes here");
console.log("******** ### **********");

/**
 * Using types
 * Key difference: JavaScript uses "dynamic types" (resolved at runtime), 
 * TypeScript uses "static types" (set during development)
 */
console.log("******** Using Types **********");
function add(numberOne: number, numberTwo: number, showResult: boolean, phrase: string) {
    if (showResult) {
        console.log(phrase, numberOne + numberTwo);
    } else {
        return numberOne + numberTwo;
    }
    
}

/**
 * Core types
 * TS does use type inference 
 */ 
const numberOne = 5;
const numberTwo = 3.8;
const printResult = true;
const resultPhrase = 'Result is: '

add(numberOne, numberTwo, printResult, resultPhrase);

console.log("******** ### **********");