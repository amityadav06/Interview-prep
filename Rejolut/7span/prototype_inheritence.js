Function.prototype.isPrime = function (n) {
  let flag = true;
  if (n < 2) {
    return false;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        flag = false;
      }
    }
    if (flag) {
      console.log(`${n} is a prime number`);
    } else {
      console.log(`${n} is not a prime number`);
    }
  }
  return flag;
};
fun.isPrime(7);
function fun() {}
