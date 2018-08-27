class Leap {
  Leap(year) {
    this.year = year;
  }

  isLeap() {
    // the given year is a leap year only if it is divisible by 4 or 
    // if it is both divisible by 100 and 400
    return (this.year % 4) || (this.year % 100 == 0 && this.year % 400 == 0)
  }
}

export default Leap
