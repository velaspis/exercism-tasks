// @ts-nocheck

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
    const arrJoin=Number(array1.join(''))
    const arrJoin2=Number(array2.join(''))
    
      return arrJoin+arrJoin2
    }
    
    /**
     * Checks whether a number is a palindrome.
     *
   
     * @returns {boolean} whether the number is a palindrome or not
     */
    export function luckyNumber(num) {
      var numString = num.toString();
        // reverse the string
        var reversedNumString = numString.split('').reverse().join('');
        // compare the original string to the reversed string
        if (numString === reversedNumString) {
            return true;
        } else {
            return false;
        }
      
    
    }
    
    /**
     * Determines the error message that should be shown to the user
     * for the given input value.
     *
     * @param {string|null|undefined} input
     * @returns {string} error message
     */
    export function errorMessage(input) {
     if (!input) {
        return 'Required field';
      }else if(isNaN(input)||input==='0'){
        return 'Must be a number besides 0';
      }else  return '';
    }
    