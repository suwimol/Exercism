var nSteps = 0; // to keep track of the current no. of steps

function steps(n) {
  // check if input is valid
  if (n <= 0) {
    throw new Error('Only positive numbers are allowed'); 
  }

  while (n != 1) {
    if (n % 2 == 0) {
      n = n / 2;
    } else {
      n = (n * 3) + 1;
    }
    nSteps++;
  }
  return nSteps;
}
export { steps }
