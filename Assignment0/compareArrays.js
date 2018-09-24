function compare(A, B) {
    "use strict";
    var correct = 0;
  
    
    if (A[1] === ",") {
        
        for (var i=2; i<30; i=i+3) {  
            if (A[i] == B[i]) {
                correct += 1
            } 
        }
    }
    else {
        
        for (var i=1; i<20; i=i+2) {  
            if (A[i] == B[i]) {
                correct += 1
            }
        }
    }
    
    var score = (correct/10)*100;
    return(score)
}
