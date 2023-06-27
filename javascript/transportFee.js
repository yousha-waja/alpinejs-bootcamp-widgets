function transportFee(shift) {
  switch (shift.toLowerCase()) {
    case "morning":
      return "Transport fee = R20";
    case "afternoon":
      return "Transport fee = R10";
    case "nightshift":
      return "Transport fee is free";
    default:
      return "Invalid shift, <br> valid shifts: <br> (morning, afternoon, nightshift)";
  }
}
