const ALPHABET = "abcdefghijklmnopqrstuvwxyz"

function generateRandomKey() {
  return Array(...Array(100)).map(() => ALPHABET[Math.floor(Math.random() * ALPHABET.length)])
        .join('');
}

function findMod(n, m) {
  return (n % m + m) % m;
}

class Cipher {
  constructor(key) {
    if (key === undefined) {
      this.key = generateRandomKey();
    } else if (key.length === 0 || key.match(/[^a-z]/, 'g')) {
      throw new Error('Bad key');
    } else {
      this.key = key;
    }
  }

  encode(text) {
    // console.log(this.key)
    var letters = this.key.split("");
    var allPoss = ALPHABET.split("");
    // console.log(letters)
    var arr = [...text].map(letter => ALPHABET.indexOf(letter));
    // console.log(arr)
    var after = letters.map(letter => 
      allPoss.indexOf(letter) - arr.indexOf(0));
    console.log(after)
    var result = after.map(ind => ALPHABET[ind]);

    return result.join('').substring(0, text.length)
    
  }

  decode(encoded_text) {

  }
}
export default Cipher
