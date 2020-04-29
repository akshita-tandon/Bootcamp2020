

function stackUsingLL(){
    //Node defination
    let Node = function(elm){
      this.element = elm;
      this.next = null;
    }
    
    //To keep track of the size  
    let length = 0;
    
    //To keep track of the list
    let head = null;
    
    //Push data in the stack
    this.push = function(elm){
      //Create a new node
      let node = new Node(elm),
      current;
      
      //Add the new node at the top
      current = head;
      node.next = current;
      head = node;
      
      length++;
    }
    
    //Pop the item from the stack
    this.pop = function(){
      let current = head;
      
      //If there is item then remove it 
      //and make the next element as the first
      if(current){
        let elm = current.element;
        current = current.next;
        head = current;
        length--;
        return elm;
      }
      
      return null;   
    }
    
    //Return the first element in the stack
    this.peek = function(){    
      if(head){    
        return head.element;
      }
  
      return null;
    }
    
    //Convert the stack to an array
    this.toArray = function(){
      let arr = [];
      let current = head;
      while(current){
        arr.push(current.element);
        current = current.next;
      }
      
      return arr;
    }
    
    //Check if stack is empty
    this.isEmpty = function(){
      return length === 0;
    }
    
    //Return the size of the stack
    this.size = function(){
      return length;
    }
    
    //Clear the stack
    this.clear = function(){
      head = null;
      length = 0;
    }
    
  }
let stack = new stackUsingLL();   //creating new instance of Stack
 stack.push(1);
 stack.push(2);
 stack.push(3);

 console.log("Peek ",stack.peek());

 console.log("Stack is empty?",stack.isEmpty());
 console.log("Stack size",stack.size());
 console.log(stack.pop());
 console.log("Change to Array",stack.toArray());
 console.log("Stack Size",stack.size());
 stack.clear();  //clear the stack
 console.log("after clearing stack");
 console.log("Stack is empty?",stack.isEmpty());

