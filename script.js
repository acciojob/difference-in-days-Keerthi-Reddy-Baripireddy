var dateDiffInDays = function (date1, date2) {
  // Convert the input dates to the number of milliseconds since the UTC epoch
  const utcDate1 = Date.UTC(...date1.split("-"));
  const utcDate2 = Date.UTC(...date2.split("-"));
 
  // Calculate the difference in milli seconds betwe en the two dates
  const diffInMilliseconds = utcDate2 - utcDate1;

  // Convert the difference to days by dividing by the number of milliseconds in a day
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

  return diffInDays;
};

// Example usage
const dateOne = prompt("Enter Start Date (YYYY-MM-DD):");
const dateTwo = prompt("Enter End Date (YYYY-MM-DD):");

alert(dateDiffInDays(dateOne, dateTwo));
