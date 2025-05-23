// task 1
function hollowSquare(n) {
    let pattern = '';
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
          pattern += '● ';
        } else {
          pattern += '  ';
        }
      }
      pattern += '\n';
    }
    console.log(pattern);
}

// task 2
function diamondPattern(n) {
    let pattern = '';
    for (let i = 1; i <= n; i++) {
      pattern += ' '.repeat(n - i) + '● '.repeat(i) + '\n';
    }
    for (let i = n - 1; i >= 1; i--) {
      pattern += ' '.repeat(n - i) + '● '.repeat(i) + '\n';
    }
    console.log(pattern);
}  

// task 3
function diamondPattern(n) {
    let pattern = '';
    for (let i = 1; i <= n; i++) {
      pattern += ' '.repeat(n - i) + '● '.repeat(i) + '\n';
    }
    for (let i = n - 1; i >= 1; i--) {
      pattern += ' '.repeat(n - i) + '● '.repeat(i) + '\n';
    }
    console.log(pattern);
}  

// task 4
function oddTriangle(n) {
    if (n % 2 === 0) {
        console.log('Only odd numbers are allowed.');
        return;
    }

    let pattern = '';
    for (let i = 1; i <= n; i += 2) {
        pattern += ' '.repeat((n - i)) + '● '.repeat(i) + '\n';
    }
    console.log(pattern);
}

  // task 5
function numberPyramid(n) {
let pattern = '';

// Top half
for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
    pattern += j + ' ';
    }
    pattern += '\n';
}

// Bottom half
for (let i = n - 1; i >= 1; i--) {
    for (let j = i; j <= n; j++) {
    pattern += j + ' ';
    }
    pattern += '\n';
}

console.log(pattern);
}

