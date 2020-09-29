const Node = require('./Node');

class LinkedList{
    constructor(){
        this.head = null
    }

    addToHead(data){
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if(currentHead){
            newHead.setNextNode(currentHead)
        }
    }

    addToTail(data){
        let tail = this.head;
        if(!this.head) {
            this.head = new Node(data)
        } else {
            while(tail.getNextNode() !== null) {  
               tail =  tail.getNextNode()
            }
            tail.setNextNode(new Node(data))
        }
    }
    
    removeHead(){
        if(!this.head){
            return
        }
        const removeHead = this.head;
        this.head = removeHead.getNextNode();
        return removeHead.data

    }

    printList(){
        let currentNode = this.head;
        let output = '<head> '
        while(currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode()
        }
        output+= '<tail>'
        console.log(output)
    }
}

module.exports = LinkedList;

const newList = new LinkedList();
newList.addToHead('Data1');
newList.addToHead('Data2')
newList.addToTail('DataToTail1');
newList.addToTail('DataToTail2');
newList.printList();
newList.removeHead();
newList.removeHead();
newList.printList()