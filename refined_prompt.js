/**
 * Converts a given string to camelCase format.
 *
 * The function replaces all non-alphanumeric characters (such as spaces, underscores, and hyphens)
 * with spaces, splits the string into words, lowercases all words, and then capitalizes the first
 * letter of each word except the first. The resulting words are concatenated without spaces.
 *
 * @param {string} input - The input string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} Throws an error if the input is undefined, null, or not a string.
 *
 * @example
 * camelCase('first name'); // returns 'firstName'
 * camelCase('user_id'); // returns 'userId'
 * camelCase('SCREEN_NAME'); // returns 'screenName'
 * camelCase('mobile-number'); // returns 'mobileNumber'
 */

/**
 * Converts a given string to dot.case format.
 *
 * The function replaces all non-alphanumeric characters (such as spaces, underscores, and hyphens)
 * with spaces, splits the string into words, lowercases all words, and then joins them with dots.
 *
 * @param {string} input - The input string to convert to dot.case.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} Throws an error if the input is undefined, null, or not a string.
 *
 * @example
 * dotCase('first name'); // returns 'first.name'
 * dotCase('user_id'); // returns 'user.id'
 * dotCase('SCREEN_NAME'); // returns 'screen.name'
 * dotCase('mobile-number'); // returns 'mobile.number'
 */
function camelCase(input) {
    if (input === undefined || input === null) {
        throw new Error('Input cannot be undefined or null.');
    }
    if (typeof input !== 'string') {
        throw new Error('Input must be a string.');
    }

    // Replace all non-alphanumeric characters with spaces
    let str = input.replace(/[_\-\s]+/g, ' ');

    // Split by spaces, filter out empty strings
    let words = str.trim().split(' ').filter(Boolean);

    if (words.length === 0) {
        return '';
    }

    // Lowercase all words
    words = words.map(word => word.toLowerCase());

    // Capitalize first letter of each word except the first
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join('');
}

// Example usage:
// console.log(camelCase('first name')); // firstName
// console.log(camelCase('user_id')); // userId
// console.log(camelCase('SCREEN_NAME')); // screenName
// console.log(camelCase('mobile-number')); // mobileNumber
function dotCase(input) {
    if (input === undefined || input === null) {
        throw new Error('Input cannot be undefined or null.');
    }
    if (typeof input !== 'string') {
        throw new Error('Input must be a string.');
    }

    // Replace all non-alphanumeric characters with spaces
    let str = input.replace(/[_\-\s]+/g, ' ');

    // Split by spaces, filter out empty strings
    let words = str.trim().split(' ').filter(Boolean);

    if (words.length === 0) {
        return '';
    }

    // Lowercase all words
    words = words.map(word => word.toLowerCase());

    return words.join('.');
}

// Example usage:
// console.log(dotCase('first name')); // first.name
// console.log(dotCase('user_id')); // user.id
// console.log(dotCase('SCREEN_NAME')); // screen.name
// console.log(dotCase('mobile-number')); // mobile.number
