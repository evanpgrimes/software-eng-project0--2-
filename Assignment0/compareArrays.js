function compare(A, B) {
    "use strict";
    var correct = 0;
  
    

        
        for (var i=0; i<10; i=i+1) {  
            if (A[i].toUpperCase() == B[i].toUpperCase()) {
                correct += 1
            }
        }
    
    
    var score = (correct/10)*100;
    return(score)
}
