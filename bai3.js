let month = +prompt("Nhập vào tháng");
let year = +prompt("Nhập vào năm");

let dayInyear;
if (month > 0 && month <= 12) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      dayInyear = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      dayInyear = 30;
      break;
    case 2:
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        dayInyear = 29;
      } else {
        dayInyear = 28;
      }
      break;
  }
  console.log(`số ngày trong tháng đó là ${dayInyear}`);
} else {
  alert("Lỗi");
}
