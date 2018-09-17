const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

export const isPangram = input => {
    if (input == "") {
      return false;
    }
    var sentence = input.replace(/[^a-z]+/gi, "").toLowerCase().split("");
    var temp = "";
    sentence.forEach(function(letter) {
      if (!temp.includes(letter)) {
        temp += letter;
      }
    });
    return temp.length === ALPHABET.length;
}
