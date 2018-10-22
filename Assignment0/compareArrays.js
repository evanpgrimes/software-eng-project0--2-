/*eslint-disable*/
function compare(A, B) {
    "use strict";
    var correct = 0;
  
    console.log("sadfsf")

        
        for (i=0; i<10; i=i+1) {  
            if (A[i].toUpperCase() == B[i].toUpperCase()) {
                console.log(A[i])
                console.log(B[i])
                correct += 1
            }
        }
    
    
    var score = (correct/10)*100;
    return(score)
}
