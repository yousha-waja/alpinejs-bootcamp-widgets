function totalPhoneBill(string) {
    if (string !== '') {
      let data = string.split(',');
      let total = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i].trim().toLowerCase() === 'call') {
          total += 2.75;
        } else if (data[i].trim().toLowerCase() === 'sms') {
          total += 0.65;
        } else {
          return "Invalid input. The input must include 'sms' or 'call' separated by a comma.";
        }
      }
      return ("Your phone bill is R" + total.toFixed(2));
    } else {
      return "Please enter a valid input. e.g.: 'sms,call,call,call,sms'";
    }
  }
  