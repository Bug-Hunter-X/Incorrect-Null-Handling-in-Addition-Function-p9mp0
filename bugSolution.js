function foo(a, b) {
  if (a === null) {
    return b;
  } else if (b === null) {
    return a;
  } else if (a === null && b === null){
    return null; 
  } else {
    return a + b;
  }
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(null, null)); // Output: null