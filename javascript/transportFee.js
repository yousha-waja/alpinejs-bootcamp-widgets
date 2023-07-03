function transportFee(shift) {
  if(shift != '') {
    switch (shift.toLowerCase()) {
    case "morning":
      return "Transport fee = R20";
    case "afternoon":
      return "Transport fee = R10";
    case "nightshift":
      return "Transport fee is free";
    default:
      return '<span class="errorMessage"> Invalid shift,</span> <br> valid shifts:(morning, afternoon, nightshift)';
   }
  } 
  else {
    return "<span class='caution'>No entry was made!</span>";
  }
}
