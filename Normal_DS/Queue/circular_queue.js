/* 
Circular queue Implementation
Design your implementation of the curcular queue. The curcular queue is
a linear data structure in which the operations are performed on the basis of
FIRST IN FIRST OUT principle, and the last position is connected
back to the first position to make a circle.

*/

var MyCircularQueue = function(k){    // k is size of queue
    this.queue = [];
    this.size = k;
}

MyCircularQueue.prototype.enQueue = function(value){
    if(this.size === this.queue.length) return false
    this.queue.push(value)
    return true
}
MyCircularQueue.prototype.deQueue = function(){
    if(this.queue.length === 0) return false
    this.queue.shift();
    return true
}
MyCircularQueue.prototype.Front = function(){
    if(this.queue.length === 0) return -1
    return this.queue[0]
}
MyCircularQueue.prototype.Rear = function(){
    if(this.queue.length === 0) return -1
    return this.queue[this.queue.length - 1]
}
MyCircularQueue.prototype.isEmpty = function(){
    return this.queue.length === 0
}
MyCircularQueue.prototype.isFull = function(){
    return this.size === this.queue.length
}

let Circular_queue = new MyCircularQueue(3); // 3 is size of queue
Circular_queue.enQueue(1)
Circular_queue.enQueue(2)
Circular_queue.deQueue()
Circular_queue.enQueue(5)
Circular_queue.enQueue(5)

console.log(Circular_queue.Front(), Circular_queue.Rear());
console.log(Circular_queue.isFull());
