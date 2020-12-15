class LoopDeLoop {
    oneToTen(){
        let response = "";
        for (let i=1; i<=10; i++){
        response += i +"\n";
        }
    return response;
    }

    loopsSquared(){
        let answer = "";
        for (let i=1; i<=10; i++) {
            answer += (i*i) + "\n";
        }
        return answer;
    }

    evenUnder(n){
        let output = "";
        for (let i=2; i<n; i+=2){
            output += i + "\n";
        }
        return output;
    }

    sum(n,m){
        let total = 0;
        for (let i=n; i<m; i++){
            total = (total + i);
        }
        return total;
    }

    triangle(){
        let design = "";
        for (let row = 1; row <=5; row++) {
            for (let i = 0; i <row; i++){
                design += "*";
            }
            design += "\n";
        }
        return design;

    }

    tableSquare(){
        let table = "";
        let tableLine = "";
        for(let i = 1; i <=4; i++){
           for(let j=1; j <=4; j++){
            tableLine += ("| " +(i*j)+ " ");
           }
            tableLine += "|\n";
            table = tableLine;

        }
      
        return table;
            
    }

    tableSquare2(){
        let table = "";
        let tableLine = "";
        for(let i = 1; i <=6; i++){
           for(let j=1; j <=6; j++){
            tableLine += ("| " +(i*j)+ " ");
           }
            tableLine += "|\n";
            table = tableLine;

        }
      
        return table;
    }


        
}




module.exports = LoopDeLoop;