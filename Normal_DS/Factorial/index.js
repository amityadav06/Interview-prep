// first method using looping each element

/* function factorial(n){
    result = 1;
   if(n < 0){
    return 'Factorial of negative values does not exist'
   }else if(n==0 || n == 1){
    return 1
   }else{
    for(let i = 1; i<= n; i++){
        result = result * i
    }
   }
   return result;
}
console.log(factorial(0)); */


// Method 2 using recursion

// function factorial(n){
//     if(n < 0){
//         return 'does not exist'
//     }
//     if(n == 0 || n == 1) return 1

//     return n * factorial(n - 1)
// }
// console.log(factorial(5));