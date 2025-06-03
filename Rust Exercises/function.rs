//1
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

fn main() {
    let message = greet("Aditya");
    println!("{}", message);
}


//2
fn calculate_area(width: f64, height: f64) -> f64 {
    if width < 0.0 || height < 0.0 {
        0.0
    } else {
        width * height
    }
}

fn main() {
    println!("Area: {}", calculate_area(3.5, 4.2));
    println!("Area (negative): {}", calculate_area(-1.0, 5.0));
}


//3
fn is_even(n: i32) -> bool {
    n % 2 == 0
}

fn main() {
    println!("Is 4 even? {}", is_even(4));
    println!("Is 7 even? {}", is_even(7));
}


//4
fn factorial(n: u32) -> u32 {
    if n == 0 {
        1
    } else {
        n * factorial(n - 1)
    }
}

fn main() {
    println!("5! = {}", factorial(5));
    println!("0! = {}", factorial(0));
}


//5
fn find_max<T: PartialOrd>(slice: &[T]) -> Option<&T> {
    if slice.is_empty() {
        None
    } else {
        let mut max = &slice[0];
        for item in slice.iter() {
            if item > max {
                max = item;
            }
        }
        Some(max)
    }
}

fn main() {
    let numbers = vec![34, 12, 78, 3];
    let words = vec!["apple", "banana", "cherry"];

    println!("Max number: {:?}", find_max(&numbers));
    println!("Max word: {:?}", find_max(&words));
}


//bonus
fn apply_twice(f: impl Fn(i32) -> i32, x: i32) -> i32 {
    f(f(x))
}

fn main() {
    let increment = |x| x + 1;
    println!("Apply twice: {}", apply_twice(increment, 5)); // Output: 7
}
