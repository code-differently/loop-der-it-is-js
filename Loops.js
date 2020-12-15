class LoopDeLoop {
        oneToTen(){
            let response ="";
            for (let i=1; i <= 10; i++){
              response += i+"\n";
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
          for (let i = 2; i < n; i+=2){
            output += i + "\n";
          }
          return output;
    
        }
        numberSum(n,m){
            let total = 0;
            for (let i = n; i < m; i++){
                total += i;
            }
            return total;
        }
        triangle(){
            let output = " ";
            for( let i = 1; i < 6; i++ ){
                output += i = " ";
            }
            return output;
        }
}

    
    module.exports = LoopDeLoop;
    