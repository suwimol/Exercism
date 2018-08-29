var result = []; // is what to be returned

// find out what is at the given position (mine or empty space)
function currPosIs(r, c, board) {
  try {
    var val = board[r][c];
    if (val == '*') {
      return val;
    }
  } catch(e) {
    return '';
  }
}

class Minesweeper {
  constructor() {
    // empty for now
  }

  // counts the number of mines adjacent to a square and transforms the given board into one with
  // the counts as described
  annotate(board) {
    var rows = board.length;

    if (rows != 0) {
      for (var r = 0; r < rows; r++) {
        var string = '';
        for (var c = 0; c < board[r].length; c++) {
          var count = 0;
          if (board[r][c] == ' ') { // if current position is blank
            // check if there is a mine in each direction (TODO: needs factorization for this part)
            // check 'up'
            if (currPosIs(r-1, c, board) == '*') {
              count++;
            }
            // check 'rgiht'
            if (currPosIs(r, c+1, board) == '*') {
              count++;
            }
            // check 'down'
            if (currPosIs(r+1, c, board) == '*') {
              count++;
            }
            // check 'left'
            if (currPosIs(r, c-1, board) == '*') {
              count++;
            }
            // check all the diagonals...
            if (currPosIs(r-1, c-1, board) == '*') {
              count++;
            }

            if (currPosIs(r-1, c+1, board) == '*') {
              count++;
            } 

            if (currPosIs(r+1, c+1, board) == '*') {
              count++;
            }

            if (currPosIs(r+1, c-1, board) == '*') {
              count++;
            }
            // if there are no mines around the current position, add a space to the string
            // otherwise, concat the count to the string
            if (count == 0) {
              string += ' '
            } else {
              string += count;
            }
          } else {
            string += '*'
          }
        }
        result[r] = string;
      }
      return result;
     }
    return board;
  }
}
export default Minesweeper
