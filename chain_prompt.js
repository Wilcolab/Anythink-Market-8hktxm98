function toKebabCase(input) {
    if (typeof input !== 'string') return '';

    // Replace underscores and hyphens with spaces for easier splitting
    let str = input.replace(/[_\-]+/g, ' ');

    // Insert spaces before camelCase or PascalCase boundaries
    str = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
    str = str.replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1 $2');

    // Replace any non-alphanumeric character (except space) with space
    str = str.replace(/[^a-zA-Z0-9 ]+/g, ' ');

    // Split by spaces, filter out empty, join with hyphens
    let words = str
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    // Join and lowercase
    return words.join('-').toLowerCase();
}

// Example usages:
// console.log(toKebabCase("Hello World")); // "hello-world"
// console.log(toKebabCase("helloWorld")); // "hello-world"
// console.log(toKebabCase("HelloWorld")); // "hello-world"
// console.log(toKebabCase("already-kebab-case")); // "already-kebab-case"
// console.log(toKebabCase("snake_case_example")); // "snake-case-example"
// console.log(toKebabCase("___multiple---separators___")); // "multiple-separators"
// console.log(toKebabCase("")); // ""
// console.log(toKebabCase(12345)); // ""
// console.log(toKebabCase("Symbols!@#and$%^numbers123")); // "symbols-and-numbers123"