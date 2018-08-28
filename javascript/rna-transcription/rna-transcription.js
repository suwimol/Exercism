class Transcriptor {
  constructor() {
    // empty constructor
  }

  // Given a DNA strand, return its RNA complement (per RNA transcription)
  toRna(dna) {
    var rna = '';
    for (var i = 0; i < dna.length; i++) {
      switch (dna[i]) {
      case '':
        break;
      case 'A':
        rna += 'U';
        break;
      case 'C':
        rna += 'G';
        break;
      case 'G':
        rna += 'C';
        break;
      case 'T':
        rna += 'A';
        break;
      default:
        throw new Error("Invalid input DNA.");
      }
    }
    return rna;
  }
}
export default Transcriptor
