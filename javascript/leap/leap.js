class Leap {
  isLeap(year) {
    // the given year is a leap year only if it is divisible by 4 or 
    // if it is both divisible by 100 and 400
    return (year % 4) || (year % 100 == 0 && year % 400 == 0)
  }
}

export default Leap
