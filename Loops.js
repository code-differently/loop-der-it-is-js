
    class LoopDeLoop {
        oneToTen(){
            let response ="";
            for (let i=1; i <= 10; i++){
              response += i+"\n";
            }
            return response;
        }
  //loopsSquared
        loopsSquared(){
          let answer ="";
          for (let i =1; i <= 10; i++){
            answer += (i * i) + "\n";
          }
          return answer;
        }
  //evenUnder
        evenUnder(n){
          let output = "";
          for (let i = 2; i < n; i+=2){
            output += i+ "\n";
          }
          return output;
        }
//numberSum
        numberSum(n,m) {
          let total = 0;
            for (let i = n; i < m; i++){
                  total += i;
          }
            return total;
        }
//triangle
        getRow(sizeOfRow){
          let triangle = "";
          for (let i = 0; i < sizeOfRow; i++){
            triangle += "*";
           }
          return triangle;
       }
        triangle(){
        let output = "";
        for (let k=1; k<6; k++) { 
          output += this.getRow(k);
          output += "\n";
          }
          return output;
       }
//SmallmultiplicationTable
     makeSmallMultiplicationTable(){
        // print columns and row numbers
        const maxTotalRows = 4;
        const maxTotalColumns = 4;
        let completedTable = "";
        for (let row = 1; row <= maxTotalRows; row++) {
          //OUTER LOOP
        for (let column = 1; column <= maxTotalColumns; column++) {
            //INNER LOOP
            completedTable = completedTable + `|${row * column}`;
      }
          // end  first outer loop
            completedTable = completedTable + "|\n";
      }
              return completedTable;
      }

//multiplicationTable
          makeMediumMultiplicationTable() {
            const maxTotalRows = 6;
            const maxTotalColumns = 6;
            let completedTable = "";
            for (let row = 1; row <= maxTotalRows; row++) {
              //OUTER LOOP
              for (let column = 1; column <= maxTotalColumns; column++) {
                //INNER LOOP
                completedTable = completedTable + `|${row * column}`;
              }
              completedTable += "|\n";
            }
            return completedTable;
          }
  }

      
    module.exports = {Loops:LoopDeLoop};

  

