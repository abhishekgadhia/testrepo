// Exercise 1
fn main() {
    let triple = |x: i32| x * 3;

    println!("5 tripled: {}", triple(5));
    println!("-2 tripled: {}", triple(-2));
}
// Output: 15, -6



// Exercise 2
fn main() {
    let n = 10;
    let add_n = |x: i32| x + n;

    println!("5 + {} = {}", n, add_n(5));

    let n = -3;
    println!("5 + {} = {}", n, add_n(5)); 
}
// Output: 15, 2



// Exercise 3
fn apply_operation(f: impl Fn(i32) -> i32, x: i32) -> i32 {
    f(x)
}

fn main() {
    let add_five = |x| x + 5;
    let double = |x| x * 2;

    println!("{}", apply_operation(add_five, 10)); 
    println!("{}", apply_operation(double, 10)); 
}



// Exercise 4
fn main() {
    let result = (1..=20)
        .filter(|x| x % 2 == 0)
        .map(|x| x * x)
        .sum::<i32>();

    println!("Sum of squares of even numbers: {}", result);
}
// Output: 1540



// Bonus exercise
fn main() {
    // FnOnce example (consumes a value)
    let name = "Alice".to_string();
    let greet_once = move || {
        println!("Hello {}", name);
    };
    greet_once();
    

    // FnMut example (modifies counter)
    let mut counter = 0;
    let mut increment = || {
        counter += 1;
        println!("Counter: {}", counter);
    };
    increment();
    increment();

    // Fn example (reads but doesn't modify)
    let read_only = |x| x + counter;
    println!("Read: {}", read_only(5));
}
