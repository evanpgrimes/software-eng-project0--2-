function compare(A, B) {
    "use strict"
    var correct = 0;
   // for (i=0; Object.keys(A)-1;i++) {
    for (var i=1; i<20; i=i+2) {  
        if (A[i] == B[i]) {
            correct += 1
        }
    }
    
    var score = (correct/10)*100;
    return(score)
}
