class LoopDeLoop {
    // Problem 1

    oneToTen(){
        let response ="";
        for (let i=1; i <= 10; i++){
          response += i + "\n";
        }
        return response;
    }

    // Problem 2

    loopsSquared(){
      let answer ="";
      for (let i =1; i <= 10; i++){
        answer += (i * i) + "\n";
      }
      return answer;
    }

    // Problem 3

    evenUnder(n){
      let output = "";
      for (let i = 2; i < n; i+=2){
        output += i+ "\n";
      }
      return output;
    }

    // Problem 4

    sumTo(n, m) {

        let sum = 0;

        while (n < m) {
            sum += n;
            n++;
        }
        return sum
    }

    // Problem 6

    triangle() {
    let rows = 5;
    let stars = ""
    for (let currentRow = 1; currentRow <= rows; currentRow++) {
        for (let j = 1; j <= currentRow; j++) {
            stars += "*";
        }
        stars += "\n"
    }
    return stars
    }

// Problem 7

  tableSquare() {
  let rows = 4
  let columns = 4
  let num = ""
  for (let currentRow = 1; currentRow <= rows; currentRow++) {
      
      for (let currentCol = 1; currentCol <= columns; currentCol++){
          let product = ""
          product += currentCol * currentRow
          if (currentCol === 1){
              num += `|`
          }
          if (product < 10 && currentCol > 1) {
              num += `  ${product} |`
          } else {
              num += ` ${product} |`
          }
      }
      num += "\n"
  }
    return num
  }

// Problem 8 

  sixBySix() {
    let num = ""
    for (let currentRow = 1; currentRow <= 6; currentRow++) {
        for (let currentCol = 1; currentCol <= 6; currentCol++){
            let product = ""
            product += currentCol * currentRow
            if (currentCol === 1){
                num += `|`
            }
            if (product < 10 && currentCol > 1) {
                num += `  ${product} |`
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