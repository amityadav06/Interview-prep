/* 
Implement Queue using two stacks
and it should support all functions of queueu
*/

let MyQueue = function(){
    this.s1 = [];
    this.s2 = [];
}

MyQueue.prototype.enqueue = function(x){
    this.s1.push(x)
}
MyQueue.prototype.dequeue = function(){
    if(this.s2.length === 0){
        while(this.s1.length > 0){
            this.s2.push(this.s1.pop())
        }
    }

    return this.s2.pop(); 
}
MyQueue.prototype.front = function(){
    if(this.s2.length === 0){
        while(this.s1.length > 0){
            this.s2.push(this.s1.pop())
        }
    }
    return this.s2[this.s2.length - 1]
}
MyQueue.prototype.empty = function(){
    return this.s1.length === 0 && this.s2.length === 0
}

const queue = new MyQueue();
queue.enqueue(3)
queue.enqueue(9);
console.log(queue.front());
