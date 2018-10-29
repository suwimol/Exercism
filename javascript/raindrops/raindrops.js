export default class Raindrops {
  convert(number) {
    var string = '';
    const factors = {3:'Pling', 5:'Plang', 7:'Plong'};
    for (let i = 0; i < Object.keys(factors).length; i++) {
      if (number % Object.keys(factors)[i] === 0) {
        string += Object.values(factors)[i];
      }
    }
    const result = (string === '') ? string += number : string;
    
    return result;
  }
}
