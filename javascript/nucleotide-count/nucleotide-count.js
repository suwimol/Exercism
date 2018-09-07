var result = '';
const nucleotides = [/A/g, /C/g, /G/g, /T/g];

class NucleotideCounts {
  static parse(strand) {
    if (strand.replace(/A|C|G|T/g, '').length) {
      throw new Error('Invalid nucleotide in strand');
    }

    for (var i = 0; i < nucleotides.length; i++) {
      var count = 0;
      if (strand.match(nucleotides[i]) != null) {
        count = strand.match(nucleotides[i]).length;
      }
      result += count + ' ';
    }
    // remove space at the end of the result string
    result = result.substring(0, result.lastIndexOf(' '));
    return result;
  }
}
export default NucleotideCounts;
