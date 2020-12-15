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
        output += i+ "\n";
        }
        return output;
    }
    sumOfNToM(n,m){
        let sum = 0;
        for (let i = n; i < m; i++) {
            sum += i;
        }
        return sum;
    }
    starTreePattern(rows){
        let pattern = "";
        for ( let i = 1; i <= rows; i++) {
            let starCount = i;
            for (let j = 1; j <= starCount; j++) {
                pattern += "*";        
            }
            pattern += "\n";
        }
        return pattern;
    }
    nByNGrid(x, y){
        let output = "";
        for (let row = 1; row <= x; row++) {
            for (let col = 1; col <= y; col++){
                if (col == 1) {
                    output += "|";
                }
                let result = row * col;
                if (result < 10) {
                    output += ` ${result} |`;
                } else {
                    output += ` ${result} |`;
                }
            }
            if (x % y == 0) {
                output += "\n";
            }
        }
        return output;
    }
}


module.exports = LoopDeLoop;