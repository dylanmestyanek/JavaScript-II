// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.


let total = 0;
function yeehaw(){
 for (let i = 1; i < 10; i++){
  total += i;
 }
 return total;
}
yeehaw();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  let count = 1;

  return function counter(){
    return count++;
  }
};

const newCounter = counterMaker();

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
const counterMaker = (limit) => {
  let count = 1;

  return function counter(){
    return count <= limit ? count++ : count = 1;
  }
};

const newCounter = counterMaker(3);

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 1;

  return function(){
    return {
      increment: function(){ return count++; },
      decrement: function(){ return count--; }
    }
  }
};

const newCounter = counterFactory();






