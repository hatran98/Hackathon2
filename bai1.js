let numArray = [3, 5, 88, 99, 76, 8, 4, 5, 85, 63];
let max = numArray.reduce(function (accumulator, element) {
  return accumulator > element ? accumulator : element;
});
console.log(numArray);
console.log("max = ", max);
