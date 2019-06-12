// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function closureOuter() {
    var x = "Hi";
    function closureInner() {
        console.log(x);
    }
    console.log('test', x);
    return closureInner;   
}
closureOuter();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0
  const myFunction = () => {
    count = ++count
    return count
  }
  return myFunction
};

const increment = counter()
const c1 = increment()
const c2 = increment()
const c3 = increment()

console.log('increment:', c1, c2, c3);
// Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
