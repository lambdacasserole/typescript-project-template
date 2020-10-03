/**
 * Greets the user by name.
 * @param name  the user's name
 */
function greetUser(name: string): void {
    console.log("Hello, " + name);
}

// Greet a user called Alicia.
greetUser("Alicia");

/**
 * Adds two numbers together.
 * @param x the first number
 * @param y the second number
 */
export function doSomeAddition(x: number, y: number): number {
    return x + y;
}

// Two numbers to add together.
let a: number = 8;
let b: number = 16;

// Print equation.
console.log("a + b = " + doSomeAddition(a, b));
