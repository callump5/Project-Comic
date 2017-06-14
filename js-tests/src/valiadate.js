function check(firstInput, secondInput){
        if(firstInput >= 1 && secondInput >= 1){
            return true
        } else {
            return false
        };
    };

function report(firstInput, secondInput){
    var reportMessage = []
    
    if(firstInput >= 1 && secondInput >= 1){
            reportMessage.push(firstInput, secondInput)
            return reportMessage.length
        } else {
            return reportMessage.length
        };
    };
  
