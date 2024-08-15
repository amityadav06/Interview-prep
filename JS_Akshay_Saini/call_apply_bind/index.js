/* 
  Weh  we assign a method of an object to a variable then it lost its object scope and it also lost its "this"
  reference. Now it becomes an independent function in itself and its 'this' refers to window object
  So to changes its reference to its object we will use call, bind and apply

  -- Or if we want to reuse a method and we have other new object then we can point "this" keyword to the newObjec
  and we can use same method

  Call - Its used for this binding. First parameter is "this" and rest of parameters we can pass as using
         comma seperated

  Bind - Its same as call only difference is first argument is "this" reference and rest of the arguments we have
         to pass in array of arguments

  Apply - We cant directly invoke the function using bind. It creates copy of that function and we will assign
          to a variable and then we can it later when we want.
 */

// ------------------------------ case 1 ------------------------------------
// let obj = {
//     firstName: 'amit',
//     lastName: 'yadav',
//     fullName: function(){
//         console.log(this.firstName + " " + this.lastName);
//     }
// }

// let newObj = obj.fullName;
// newObj()   // undefined undefined


// ------------------------------- Case 2 (call) ------------------------------------
// let obj = {
//     firstName: 'amit',
//     lastName: 'yadav',
//     fullName: function(){
//         console.log(this.firstName + " " + this.lastName);
//     }
// }
// let obj2 = {
//     firstName: 'Abhi',
//     lastName: 'Verma'
// }

// function userDetails(a, b){
//     console.log(this.firstName + " " + this.lastName + " from " + a + " " + b);
// }

// userDetails.call(obj2, 'delhi', 'developer')

// --------------------------------- Case 3 - (apply) ----------------------------------
// let obj = {
//     firstName: 'amit',
//     lastName: 'yadav',
//     fullName: function(){
//         console.log(this.firstName + " " + this.lastName);
//     }
// }
// let obj2 = {
//     firstName: 'Abhi',
//     lastName: 'Verma'
// }

// function userDetails(a){
//     console.log(this.firstName + " " + this.lastName + " from " + a[0] + " " + a[1]);
// }

// userDetails.call(obj2, ['delhi', 'devel'])

// ------------------------------ Case 4 (bind) -------------------------------------------
// let obj = {
//     firstName: 'amit',
//     lastName: 'yadav',
//     fullName: function(){
//         console.log(this.firstName + " " + this.lastName);
//     }
// }
// let obj2 = {
//     firstName: 'Abhi',
//     lastName: 'Verma'
// }

// function userDetails(a){
//     console.log(this.firstName + " " + this.lastName + " from " + a[0] + " " + a[1]);
// }

// let a = userDetails.bind(obj2, ['delhi', 'devel'])
// a()