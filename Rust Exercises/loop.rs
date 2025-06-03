//1
fn main() {
    let mut counter = 0;
    loop {
        println!("{}", counter);
        counter += 2;
    }
        if counter > 10 {
            break;
    }
}

//2
fn main() {
    let mut countdown = 5;
    while countdown >= 1 {
        println!("{}", countdown);
        countdown -= 1;
    }
    println!("Liftoff!");
}


//3
fn main() {
    for n in 1..=100 {
        if n % 15 == 0 {
            println!("FizzBuzz");
        } else if n % 3 == 0 {
            println!("Fizz");
        } else if n % 5 == 0 {
            println!("Buzz");
        } else {
            println!("{}", n);
        }
    }
}


//4
fn main() {
    'outer: for outer in 1..=3 {
        for inner in ['a', 'b', 'c'] {
            println!("{} {}", outer, inner);
            if outer == 2 && inner == 'b' {
                break 'outer;
            }
        }
    }
}


//5
use std::io;

fn main() {
    loop {
        println!("Enter a number:");

        let mut input = String::new();
        if io::stdin().read_line(&mut input).is_err() {
            println!("Failed to read input.");
            continue;
        }

        let trimmed = input.trim();
        match trimmed.parse::<i32>() {
            Ok(0) => {
                println!("Goodbye!");
                break;
            }
            Ok(n) => {
                match n % 2 {
                    0 => println!("Even"),
                    _ => println!("Odd"),
                }
            }
            Err(_) => println!("Invalid input!"),
        }
    }
}


//bonus
fn main() {
    let result: Vec<i32> = (1..=20)
        .filter(|x| x % 2 == 0)
        .skip(3)
        .take(2)
        .collect();

    println!("{:?}", result);
}
