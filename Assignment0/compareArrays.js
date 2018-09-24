function compare(A, B) {
    "use strict";
    var correct = 0;
  
    
    if (B[1] == ",") {
        console.log(2)
        for (var i=1; i<20; i=i+2) {  
            if (A[i] == B[i*2]) {
                
                correct += 1
            console.log(1)
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
