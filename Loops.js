    class LoopDeLoop {
        oneToTen(){
            let response = "";
            for (let i=1; i <= 10; i++){
              response += i+"\n";
            }
            return response;
        }
        loopsSquared(){
          let answer = "";
          for (let i =1; i <= 10; i++){
            answer += (i * i) + "\n";
          }
          return answer;
        }
        evenUnder(n){
          let output = "";
          for (let i = 2; i < n; i+=2){
            output += i+ "\n";
          }
          return output;
        }

        sumTo(n,m) {
            let sum = 0;

            for (let i = n; i < m; i++) {
                sum += i;
            }
            return sum;
        }

        triangle() {
            let tri = "";
            for (let i = 1; i <= rows; i++) {
                let stars = i;
                for (let j = 1; j <= stars; j++) {
                    tri += "*";
                }
                tri += "\n"; 
            }
            return tri;
        }

        multiplyTable() {
            let table = "";
            let tableBorder = "";
            for (let i = 1; i <= 4; i++) {
                for (let j = 1; j <= 4; j++){
                    tableBorder += ("| " + (i*j) + " ");
                }
                    tableBorder += "|\n";
                    table = tableBorder;
            }
            return table;
        }

        multiplicationTable() {
            let table = "";
            let tableBorder = "";
            for (let i = 1; i <= 6; i++) {
                for (let j = 1; j <= 6; j++){
                    tableBorder += ("| " + (i*j) + " ");
                }
                    tableBorder += "|\n";
                    table = tableBorder;
            }
            return table;
        }




    }




module.exports = LoopDeLoop;