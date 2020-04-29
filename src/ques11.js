// console.log(printUniqueElements(arr));

class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }

    addFirst(data){
    let newNode = new Node(data);
    // The pointer next is assigned head pointer so that both pointers now point at the same node.
        newNode.next = this.head;
    // As we are inserting at the beginning the head pointer needs to now point at the newNode. 
        
        this.head = newNode;
       // return this.head;
    }  
     addLast(data){
    let newNode = new Node(data);
    // When head = null i.e. the list is empty, then head itself will point to the newNode.
        if(!this.head){
            this.head = newNode;
            //return this.head;
        }
    // Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
       let tail = this.head;
       while(tail.next !== null){
            tail = tail.next;
       }
       tail.next = newNode;
     //  return this.head;
     }
    lengthOfList(){
   
        var count=1;
       let tail = this.head;
       while(tail.next !== null){
             tail=tail.next;
             count+=1;
       }
      
    return count;
      }
     getLast(){
   
       let tail = this.head;
       while(tail.next != null)
            tail=tail.next;
       
       return tail.data;
    
      
      }

       getFirst(){
       return this.head.data;
      }
}
function dothis(){
 let list=new LinkedList();
 list.addFirst(5);
 list.addFirst(7);
 list.addFirst(8);
 list.addLast(9);
 console.log(list);
 console.log("First",list.getFirst());
 console.log("Last",list.getLast());
 console.log("Length",list.lengthOfList());

}

export {dothis}