
class Queue{

    constructor(){
        this.elements=[]; //creating an empty array
    }

    //adding element to the queue
    enqueue(element){
        this.elements.push(element); //adding element to the queue
    }


    //removing element from the queue
    dequeue(){
        if(this.elements.length==0){
            return null; //if queue is empty
        }
        let theElement=this.elements.shift(); //removing element from the queue
        return theElement;
    }

    display(){
        console.log(this.elements);
    }
}


//creating an object of Queue class
let queue= new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display();
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.display();
queue.enqueue(120);
queue.enqueue(230);
queue.display();

