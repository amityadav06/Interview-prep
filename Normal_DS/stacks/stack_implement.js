class Stack{
    constructor(){
        this.Stack = [];
    }

    push(element){
        this.Stack.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return 'Stack is empty'
        }
        return this.Stack.pop()
    }

    peek(){
        if(this.isEmpty()){
            return 'stack is empty'
        }

        return this.Stack[this.size() - 1]
    }

    isEmpty(){
        return this.size() === 0
    }

    size(){
        return this.Stack.length;
    }
}

const stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.peek());

// Balance paranthesis====================================================
// let isParenthesisMatching = (str) => {
//   let stack = [];

//   let open = {
//     "{": "}",
//     "[": "]",
//     "(": ")",
//   };

//   let closed = {
//     "}": true,
//     "]": true,
//     ")": true,
//   };

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (open[char]) {
//       stack.push(char);
//     } else if (closed[char]) {
//       if (open[stack.pop()] !== char) return false;
//     }
//   }
//   return stack.length === 0;
// };
// console.log(isParenthesisMatching("[{}]"));