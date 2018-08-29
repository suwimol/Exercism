class Triangle {
  constructor(first, second, third) {
    this.first = first;
    this.second = second;
    this.third = third;
  }

  kind() {
    var arr = [this.first, this.second, this.third];

    // check if this is a valid triangle
    if (!arr.every((val, i, arr) => val > 0)) {
      throw new Error('All sides have to be of length > 0 to be a triangle.')
    } else if (!(arr[0] <= arr[1] + arr[2]) || !(arr[1] <= arr[0] + arr[2]) || !(arr[2] <= arr[0] + arr[1])) {
      throw new Error('Violates triangle inequality.')
    }

    if (arr.every((val, i, arr) => val === arr[0])) {
      return 'equilateral'
    } else if (arr[0] != arr[1] && arr[1] != arr[2] && arr[0] != arr[2]) {
      return 'scalene'
    } else if (arr.some((val, i, arr) => val === arr[i])) {
      return 'isosceles'
    }
  }
}
export default Triangle
