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
function add(numberOne, numberTwo, showResult, phrase) {
    if (showResult) {
        console.log(phrase, numberOne + numberTwo);
    }
    else {
        return numberOne + numberTwo;
    }
}
/**
 * Core types
 * TS does use type inference
 */
var numberOne = 5;
var numberTwo = 3.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(numberOne, numberTwo, printResult, resultPhrase);
console.log("******** ### **********");
