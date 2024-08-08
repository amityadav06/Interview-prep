/* const arr1 = [1, 2, 1, 4, 5, 6, 71, 2, 4];

function filterValues(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (temp.includes(arr[i])) {
      continue;
    } else {
      temp.push(arr[i]);
    }
  }
  return temp;
}
console.log(filterValues(arr1));


 */

const str = "abcdef";

function changeString(a) {
  const newStr = a.split("");
  newStr[0] = "A";
  return newStr.join("");
}
console.log(changeString(str));

function notPresent() {
  const arr = [1, 4, 27, 3, 99];
  temp = [];
  for (let i = 1; i <= 100; i++) {
    if (arr.includes(i)) {
      continue;
    } else {
      temp.push(i);
    }
  }
  console.log(temp);
}
notPresent();
