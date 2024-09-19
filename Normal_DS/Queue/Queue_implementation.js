class Queue{
    constructor(){
        this.queue = []
    }

    enqueue(element){
        this.queue.push(element);
    }

    dequeue(){
        if(this.isEmpty()){
            return 'Underflow'
        }

        return this.queue.shift();
    }

    isEmpty(){
        return this.size() === 0;
    }

    front(){
        if(this.isEmpty()){
            return 'NO Elements in the Queue'
        }
        return this.queue[0]    
    }

    size(){
        return this.queue.length
    }

    printQueue(){
        let queueString = '';
        for(let i = 0; i< this.size(); i++){
            queueString = queueString + this.queue[i] + ', '
        }
        console.log('Queue : ' ,queueString);
        
    }
}

const myQueue = new Queue();
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.dequeue()
console.log('Front',myQueue.front());

console.log(myQueue.printQueue());
