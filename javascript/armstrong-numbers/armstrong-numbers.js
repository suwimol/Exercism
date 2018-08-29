// Determines whether the given number is an Armstrong number
function validate(input) {
  var number = '' + input;
  var total = 0;
  for (var i = 0; i < number.length; i++) {
    total += Math.pow(number[i], number.length);
  }
  return input === total;
}
export { validate }
