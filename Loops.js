class LoopDeLoop {
    oneToTen(){
        let response ="";
        for (let i=1; i <= 10; i++){
        response += i + "\n";
        }
        return response;
    }

    loopsSquared(){
        let answer ="";
        for (let i =1; i <= 10; i++){
            answer += (i * i) + "\n";
        }
        return answer;
    }

    evenUnder(n){
        let output = "";
        for (let i = 2; i < n; i += 2){
            output += i + "\n";
        }
        return output;
    }

    sumOfNum(n) {
        let numSum = "";
        for (let i = 5; i < 10; i++){
            numSum += i + "\n"; 
        }
        return(numSum);
    }

    /*AreWeThereYet( ){
        let weAreThere = false;
        while (!weAreThere) {
        let userResponse = prompt ("Are we there yet?");
            if (userResponse == "yes") {
            weAreThere = true;
      }
    }
        return("Good!"); 
    }*/
    
    triangle() {
        let line = ""; 
        let triangle = "";
        
        for (let row = 1; row <= 5; row++) {
        line = "";
        for (let x = 0; x < row; x++) {
            line += "*";
        }
        triangle += line + "\n";
        }
        return(triangle);
    }

    tableSquare() {
        // print columns and row numbers
        const maxTotalRows = 4;
        const maxTotalColumns = 4;
            let tableSquare = "";
            for (let row = 1; row <= maxTotalRows; row++) {
            //OUTER LOOP
            for (let column = 1; column <= maxTotalColumns; column++) {
            //INNER LOOP
            tableSquare = tableSquare + `|${row * column}`;
            }
            tableSquare += "|\n";
            }
            return tableSquare;
            }
            
    tableSquare2() {
        // print columns and row numbers
        const maxTotalRows = 6;
        const maxTotalColumns = 6;
            let tableSquare2 = "";
            for (let row = 1; row <= maxTotalRows; row++) {
            //OUTER LOOP
            for (let column = 1; column <= maxTotalColumns; column++) {
            //INNER LOOP
            tableSquare2 = tableSquare2 + `|${row * column}`;
            }
            tableSquare2 += "|\n";
            }
            return tableSquare2;
            }

}
   
module.exports = LoopDeLoop;