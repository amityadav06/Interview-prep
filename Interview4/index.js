/* function checkInt() {
  //var one = document.getElementById("num").value;
  var num = /[0-9][?=.]{1,}/;
  var a = 9;
  if (num.test(5)) {
    console.log("num is int");
  } else {
    console.log("num is not int");
  }
}
checkInt(9); */

//What is the output?
/* function runFunc() {
  console.log("1" + 1); // "11"
  console.log("A" - 1); // NaN
  console.log(2 + "-2" + "2"); //  "2-22"
  console.log("Hello" - "World" + 78); // NaN
  console.log("Hello" + "78"); // "Hello78"
}
runFunc(); */

//What is the output?
/* var x = 23;

(function () {
  var x = 43;
 (function random() {
    x++;
    console.log(x);
    var y = 21;
  })() ;
})();
*/

/*var sulphuricAcid = (function () {
  var corrosive = true;
  var pH = 2;
  return {
    property: function () {
      console.log(`Corrosive : ${corrosive}`);
      console.log(`pH acidic : ${pH < 7}`);
    },
  };
})();

console.log(sulphuricAcid); // 2
sulphuricAcid.property(); // true true */
{
  let a = 2;
}
console.log(a);
