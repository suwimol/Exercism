export default class Anagram {
  constructor(word) {
    this.word = word;
  }

  isCharOfWord(w) {
    const lowerW = w.toLowerCase();
    const lowerGiven = this.word.toLowerCase();
    const alphas = lowerGiven.split("");

    for (let i = 0; i < alphas.length; i++) {
      const alphaReg = new RegExp(alphas[i], 'g');
      const countBefore = (lowerGiven.match(alphaReg) || []).length;
      const countAfter = (lowerW.match(alphaReg) || []).length;
      
      if (!lowerW.includes(alphas[i]) || countBefore !== countAfter) {
        return false;
      }
    }
    return true;
  }

  matches(listOfWords) {
    const anagrams = listOfWords.filter(w => (this.word.length == w.length) && (this.word.toLowerCase() != w.toLowerCase()) && this.isCharOfWord(w));
    return anagrams;
  }
}
