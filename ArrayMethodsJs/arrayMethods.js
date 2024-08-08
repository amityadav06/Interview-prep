var car = ["BMW", "Audi", "Nano", "Tata", "Maruti"];
//----------------------Converting array to string-------------------------
//var res = car.toString();
//console.log(res);

//----------------------Join()------------------------------------------
//var res = car.join(" "+"and"+" ");
//console.log(res);

//---------------------------Push and Pop----------------------------------
// only add and delete from last
/* 
car.pop();
car.pop();
console.log(car);
car.push("This");
car.push("is");
car.push("my");
car.push('car');
console.log(car); */

//--------------------------Shift & Unshift-------------------------------
// similar to push and pop only difference is they add and delete in start
/* 
console.log("Before unshift:-", car);
console.log("Unshift Operations:-")
car.unshift("Honda");
console.log(car);
var a = car.unshift("Suzuki");
console.log(a);
console.log("Shift Operations:-")
console.log(car);
car.shift();
console.log(car);   
var res = car.shift();
car.shift("Nanohello");
console.log(res); */

//-------------------Chaninng elemtnes of array {replacing elements}-------
//console.log(car);
//car[3] = "Honda";
//console.log(car);

//--------------------Deleting Elemtns------------------------------------
// delete leaves empty holes in array so dont use this 
// instead use pop() and shift();
//delete car[3];
//console.log(car);

//-----------------------Slice and Splice--------------------------------------
//console.log("before", car)  ----------------Slice----------------------------
//var res = car.slice(-2);
//console.log("after",res);
//var ress = car.slice(1,4)
//console.log(ress);

/////////////////////------------Spice----------------add or delete value at any index--------
//console.log("before", car);
//car.splice(2,2,"amit", "yadav");
//console.log(car);

//----------------indexOf and lastIndexOf----------------------------------------
// count occurance of a number
//var arr = [2,5,13, 2, 5, 2, 5, 7];
//var res = arr.indexOf(2);
//console.log(res);
//var last = arr.lastIndexOf(2);
//console.log(last);