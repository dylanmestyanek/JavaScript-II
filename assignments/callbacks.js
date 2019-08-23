// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, length => console.log(length));

function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}

last(items, lastItem => console.log(lastItem));

function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(1, 2, sum => console.log(sum));

function multiplyNums(x, y, cb) {
  return cb(x * y);
}

multiplyNums(3, 4, product => console.log(product));

function contains(item, list, cb) {
  return cb(list.includes(item) ? true : false);
}

contains('Gum', items, (response) => console.log(response))


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  let newArr = [];
  array.filter(item => newArr.includes(item) ? null : newArr.push(item))
  return cb(newArr);
}

removeDuplicates(items, (arr) => console.log(arr))
