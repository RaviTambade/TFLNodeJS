//Data is orgranized using data structures
//Different data structures are used 
// to store and organize data in different ways
//Stack is a data structure that follows LIFO (Last In First Out)
//Queue is a data structure that follows FIFO (First In First Out)
//Linked List is a data structure that stores data in a linear way
//Tree is a data structure that stores data in a hierarchical way
//Graph is a data structure that stores data in a network way
//Hash Table is a data structure that stores data in a key-value pair way

class Stack{
    constructor(){
            //define data member to store elements of stack
            this.elements=[]; //creating an empty array
    }
    push(element){
        this.elements.push(element); //pushing element to the stack
    }  
    pop(){
        if(this.elements.length==0){
            return null; //if stack is empty
        }
        let theElement= this.elements.pop(); //popping element from the stack
        return theElement;
    }
    
    display(){
        console.log(this.elements);
    }
}

//creating an object of Stack class

let stack= new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display();
console.log(stack.pop());
stack.display();
stack.push(120);
stack.push(230);
stack.display();
