function enoughAirtime(string,integer){
    let arr=string.split(',');
    if (string !== '' && integer !== '') {
       
        if (isNaN(integer)) {
         return "The airtime input is not a valid number.";
        }

     let total =0;
     for(let i=0;i<arr.length;i++){
       if(arr[i].trim().toLowerCase() === 'call'){
          total+= 1.88;
       }
       else if(arr[i].trim().toLowerCase() === 'data'){
         total += 12;
       }
       else if(arr[i].trim().toLowerCase() === 'sms'){
         total+= 0.75;
       }
       else {
        return "Please enter a valid input for your projected data usage. e.g.: 'sms,call,call,Data,SMS'";
      }
       
     }
    
       if(total<integer){
         return ("You will have R"+(integer-total).toFixed(2)+ " worth of airtime available after your projected usage.");
         }else {
           return ("You do not have enough airtime. <br> Your require R"+(total-integer).toFixed(2)+ " additional airtime for your projected data usage");
         }
    } 
    else if(string !== '' && integer == '') {
        return "Please enter the amount of airtime you have available.";
      }
    else if(string == '' && integer !== '') {
        return "Please enter a valid input for your projected data usage. e.g.: 'sms,call,data,Data,sms'";
      }
    else {
        return "No entries were made.";
      }
    
   }