// Question #3
let userPassword = "swnalWadqQ";
// เริ่มเขียนโค้ดตรงนี้

checkPasswordStrength = (userPassword) => {
  if (userPassword.length < 6) {
    return "Weak";
  } else if (userPassword.length >= 10) {
    return "Strong";
  } else {
    return "Medium";
  }
};

console.log(checkPasswordStrength(userPassword));
