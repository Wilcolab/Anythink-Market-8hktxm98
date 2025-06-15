function toCamelCase(str) {
  return str
    .replace(/[_\-\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
    .replace(/^[A-Z]/, c => c.toLowerCase());
}

// Examples:
console.log(toCamelCase('first name')); // firstName
console.log(toCamelCase('user_id'));    // userId
console.log(toCamelCase('Last-Login')); // lastLogin      