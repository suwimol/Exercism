const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      NUM = "0123456789",
      usedNames = {};

const generateRandomName = () => {
  var randomName = "";
  var alphaCount = 0;
  var numCount = 0;

  while (alphaCount < 2) {
    // first generate random alphabet
    randomName += ALPHA.charAt(Math.floor(Math.random() * ALPHA.length));
    alphaCount++;
  }

  while (numCount < 3) {
    // next generate random digit
    randomName += NUM.charAt(Math.floor(Math.random() * NUM.length));
    numCount++;
  }
  // check if generated name is unique
  usedNames[randomName] ? randomName = generateRandomName() : usedNames[randomName] = true;

  return randomName;
};

class Robot {
  constructor() {
    this.robName = generateRandomName();
  }

  get name() {
    return this.robName;
  }

  reset() {
    this.robName = generateRandomName();
  }
} export default Robot
