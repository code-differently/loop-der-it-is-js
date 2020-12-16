class LoopDeLoop {
  oneToTen() {
    let response = "";
    for (let i = 1; i <= 10; i++) {
      response += i + "\n";
    }
    return response;
  }
  loopsSquared() {
    let answer = "";
    for (let i = 1; i <= 10; i++) {
      answer += (i * i) + "\n";
    }
    return answer;
  }
  evenUnder(n) {
    let output = "";
    for (let i = 2; i < n; i += 2) {
      output += i + "\n";
    }
    return output;
  }

  sum(n, m) {
    let total = 0;
    for (let i = n; i < m; i++) {
      total = (total + i);
    }
    return total;

  }
  triangle() {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      for (let j = 0; j < i; j++) {
        stars += "*";
      }
      stars += "\n";
    }
    return stars;
    /*
   for (let i = 1; i <= 5; i++) {
       for (let j = 1; j <= i; j++) {
         document.write("*");
       }
       document.write("<br />");
     }
   */
  }
  tableSquare() {
    let rows = 4
    let columns = 4
    let num = ""
    for (let currentRow = 1; currentRow <= rows; currentRow++) {
      for (let currentCol = 1; currentCol <= columns; currentCol++) {
        let product = ""
        product += currentCol * currentRow
        if (currentCol === 1) {
          num += `|`
        }
        if (product < 10 && currentCol > 1) {
          num += ` ${product} |`
        } else {
          num += ` ${product} |`
        }
      }
      num += "\n"
    }
    return num
  }
  tableSquareSix() {
    let rows = 6
    let columns = 6
    let num = ""
    for (let currentRow = 1; currentRow <= rows; currentRow++) {
      for (let currentCol = 1; currentCol <= columns; currentCol++) {
        let product = ""
        product += currentCol * currentRow
        if (currentCol === 1) {
          num += `|`
        }
        if (product < 10 && currentCol > 1) {
          num += ` ${product} |`
        } else {
          num += ` ${product} |`
        }
      }
      num += "\n"
    }
    return num
  }

}

module.exports = LoopDeLoop;