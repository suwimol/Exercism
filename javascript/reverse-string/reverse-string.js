
// reverse the given string 
function reverseString(string) {
  var result = "";
  for (var i = string.length - 1; i >= 0; i--) {
    if (string != "") {
      result += string.charAt(i)
    }
  }
  return result
}
export default reverseString
