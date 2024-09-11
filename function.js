// regular/normal function
// arrow function

function functionName() {
  console.log("first");
  return "1";
}

// invoke/call the function

var result = functionName(); // 1
console.log(result);

function add(x, y) {
  // definition => parameter
  var result = x + y; // 1 + 2
  return result; // 3
}
console.log(
  add(1, 2), // calling => argument
  add(2, 3),
  add(3, 4),
  add(4, 5)
);
