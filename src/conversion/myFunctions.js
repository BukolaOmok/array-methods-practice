//Definitions:
// In all of these example functions and their tests, the following definitions should be used:
//"long":  any string which has a length of 7 or more.
//"odd": any number n for which n % 2 !== 0

/** return the first "long" string in the given array, or undefined if none is found.
 * @param {string[]} inputStrings
 * @return {string|undefined}
 */
function findFirstLongString(inputStrings) {
    const isEqualToSeven = (element) => element.length === 7
   const result = inputStrings.find(isEqualToSeven);
   return result
} 

/** return the first odd number in the given array of numbers, or undefined if none is found.
 * @param {number[]} inputNumbers
 * @return {number|undefined}
 */
function findFirstOddNumber(inputNumbers) {
 const isOdd =  (n) => n % 2 === 1
    const result = inputNumbers.find(isOdd);
    return result
}

/** return the LAST "long" string in the given array of strings, or undefined if none is found.
 * @param {string[]} inputStrings
 * @return {string|undefined}
 */
function findLastLongString(inputStrings) {
    const isGreaterThanSeven = (element) => element.length > 7
    const result = inputStrings.findLast(isGreaterThanSeven);
    return result
}

/** Given an array of strings of various lengths,
 * return a new array containing only the "long" strings from the input array
 * @param {string[]} inputStrings
 * @returns {string[]}
 * */
function findAllLongStrings(inputStrings) {
    const isEqualToOrGreaterThanSeven = (element) => element.length >= 7;
    const result = inputStrings.filter(isEqualToOrGreaterThanSeven);
    return result
}

/** given an array of numbers, return a new array containing all the odd numbers in the input array.  Returns an empty array if none are found.
 * @param {number[]} inputNumbers
 * @return {number[]}
 */
function findAllOddNumbers(inputNumbers) {
    const isOdd = (element) => element % 2 === 1;
    const result = inputNumbers.filter(isOdd);
    return result
}

/** Given an array of mixed types of value
 * return a new array containing only those elements of type string.
 * @param {any[]} inputArray
 * @returns {string[]}
 * */
function findAllTheStrings(inputArray) {
    const isString = (element) => typeof element === "string"
    const result = inputArray.filter(isString)
    return result
}

/** Given an array of people objects,
 * return a new array containing only those people objects whose firstName OR secondName (or both) is long.
 * @param {{firstName: string, secondName:string}[]} inputObjects
 * @returns {{firstName: string, secondName:string}[]}
 * */
function findAllPeopleWithALongName(inputObjects) {
    const isLong = (authorObjects) => {
        const firstNameLong = authorObjects.firstName.length >= 7;
        const secondNameLong = authorObjects.secondName.length >= 7;
        return firstNameLong || secondNameLong
    }
    const result = inputObjects.filter(isLong) 
    return result
}

/** given an array of numbers return true if all of them are odd, else false.
 * @param {number[]} inputNumbers
 * @return {boolean}
 */
function areAllNumbersOdd(inputNumbers) {
    
}

/** Given an array of strings of various lengths,
 * return true if all of the strings are "long", else false
 * @param {string[]} inputStrings
 * @returns {boolean}
 * */
function areAllStringsLong(inputStrings) {}

export {
    findFirstLongString,
    findFirstOddNumber,
    findLastLongString,
    findAllLongStrings,
    findAllOddNumbers,
    findAllTheStrings,
    findAllPeopleWithALongName,
    areAllNumbersOdd,
    areAllStringsLong,
};
