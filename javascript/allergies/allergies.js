const allergens = [
  'eggs','peanuts',
  'shellfish','strawberries',
  'tomatoes','chocolate',
  'pollen','cats',];

class Allergies {
  constructor(score) {
    this.score = score;
  }

  // return an array of allergens that a person is allergic to
  list() {
    return allergens.filter((allergy, i) => this.score & Math.pow(2, i));
  }

  // check whether the given object is an allegy
  allergicTo(obj) {
    return this.list().some(allergy => allergy === obj);
  }
}
export default Allergies;
