var dict = {};

class Words {
  count(sentence) {
    var words = sentence.toLowerCase().replace(/\s+/g, " ").trim().split(" ");
    words.forEach(function(w) {
      var count = words.filter(word => w === word).length
      dict[w] = count;
    });
    return dict;
  }
} export default Words
