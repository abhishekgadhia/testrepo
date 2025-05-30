// Question 3: Constants
const MAX_POINTS: u32 = 100_000;

fn main() {
    // Question 1: Basic Variables

    let x = 5;
    println!("x: {}", x);

    // x = 10; // This line will cause an error because `x` is immutable

    let mut y = 3;
    println!("y: {}", y);

    y = 7;
    println!("y after change: {}", y);

    let z = x + y;
    println!("z (x + y): {}", z);

    //////////////////////////////////////////////////////////////////////////////////////////////////

    // Question 2: Variable Shadowing

    let number = 5;
    println!("number: {}", number);

    let number = number * 2;
    println!("number after multiplying: {}", number);

    let number = "five";
    println!("number as string: {}", number);

    // let result = number + 10; // Error: cannot add integer to string

    //////////////////////////////////////////////////////////////////////////////////////////////////

    // Question 3: Constants

    println!("MAX_POINTS: {}", MAX_POINTS);

    // MAX_POINTS = 200_000; // Error: cannot assign to a constant

    const MIN_POINTS: u32 = 10;
    println!("MIN_POINTS: {}", MIN_POINTS);

    // Shadowing constant with let
    let MAX_POINTS = 50;
    println!("Shadowed MAX_POINTS: {}", MAX_POINTS);

    //////////////////////////////////////////////////////////////////////////////////////////////////

    // Question 4: Type Annotations

    let a: i32 = 42;
    let b: f64 = 3.14;
    let c: bool = true;
    let d: char = 'R';

    println!("a: {}", a);
    println!("b: {}", b);
    println!("c: {}", c);
    println!("d: {}", d);

    // let bad_assign: i32 = 3.14; // Error: mismatched types
    // let another_bad: f64 = 42; // This works because integers can be cast to float

    //////////////////////////////////////////////////////////////////////////////////////////////////

    // Question 5: Scope and Shadowing

    let outer = 10;
    println!("outer before block: {}", outer);

    {
        let inner = 5;
        println!("inner inside block: {}", inner);

        let outer = "ten";
        println!("shadowed outer in block: {}", outer);
    }

    println!("outer after block: {}", outer);
    // println!("inner outside block: {}", inner); // Error: `inner` is not in scope here
 
    //////////////////////////////////////////////////////////////////////////////////////////////////

    // Bonus Challenge

    let count = 0;
    println!("Initial count: {}", count);

    let count = count + 1;
    let count = count + 1;
    let count = count + 1;
    println!("Count after shadowing increments: {}", count);

    let mut count = count;
    count += 1;
    count += 1;
    println!("Count after mutable increments: {}", count);

    let count = "five";
    println!("Final count (as string): {}", count);
}
