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
      answer += i * i + "\n";
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

  getSum(n, m) {
    let sum = 0;
    for (let i = n; i < m; i++) {
      sum += i;
    }
    return sum;
  }

  areWeThereYet() {
    const computerResponse = "Good!";
    const areThere = false;
    while (areThere == false) {
      if (prompt("Are we there yet?").toLowerCase() == "yes") {
        areThere = true;
        alert(computerResponse);
      }
    }
    return computerResponse;
  }

  makeTriangle(columns) {
    let stars = "";
    for (let i = 1; i <= columns; i++) {
      let numOfStars = i;
      for (let i = 1; i <= numOfStars; i++) {
        stars += "*";
      }
      stars += "\n";
    }
    return stars;
  }
}

module.exports = LoopDeLoop;
