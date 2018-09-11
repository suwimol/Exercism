const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function generateRandomKey() {
  return Array(...Array(100)).map(() => ALPHABET[Math.floor(Math.random() * ALPHABET.length)])
        .join('');
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
    // handle messages with length longer than the key
    if (this.key.length < text.length) {
      var keyLength = this.key.length;
      for (var i = 0; i < text.length - keyLength; i++) {
        this.key += this.key[i];
      }
    }

    var letters = text.split("");
    var keyChars = this.key.split("");
    var allPoss = ALPHABET.split("");

    var after = letters.map(function(letter, ind) {
      var newInd = ALPHABET.indexOf(letter) + ALPHABET.indexOf(keyChars[ind]);
      if (newInd >= ALPHABET.length) {
        newInd -= ALPHABET.length;
      }
      return newInd;
    });

    var result = after.map(ind => ALPHABET[ind]);

    return result.join('');
  
  }

  decode(encoded_text) {
    var letters = encoded_text.split("");
    var keyChars = this.key.split("");

    var after = letters.map(function(letter, ind) {
      var newInd = ALPHABET.indexOf(letter) - ALPHABET.indexOf(keyChars[ind]);
      if (newInd < 0) {
        newInd += ALPHABET.length;
      }
      return newInd;
    });

    var result = after.map(ind => ALPHABET[ind]);

    return result.join('');
  }
}
export default Cipher
