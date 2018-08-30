class Hamming {
  compute(first, second) {
    // validate the given DNAs
    if (first.length != second.length) {
      throw new Error('left and right strands must be of equal length');
    }

    var distance = 0;
    for(var i = 0; i < first.length; i++) {
      if (first[i] != second[i]) {
        distance++;
      }
    }
    return distance;
  }
}
export default Hamming
