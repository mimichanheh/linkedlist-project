class Node {
    constructor() {
        this.value = null;
        this.nextNode = null;
    }
    setValue(value) {
        this.value = value;
    }
    setNextNode(nextNode) {
        this.nextNode = nextNode;
    }
    getNextNode() {
        return this.nextNode;
    }
    getValue() {
        return this.value
    }
}

export default class LinkedList {
    append(value) {
        let newNode = new Node();
        newNode.setValue(value);
        if(!this.listHead) {
            this.listHead = newNode;
            this.nodePointer = this.listHead;
        }
        else {
            this.nodePointer.setNextNode(newNode);
            this.nodePointer = newNode
        }
    }
    prepend(value) {
        let newNode = new Node();
        newNode.setValue(value);
        newNode.setNextNode(this.listHead);
        this.listHead = newNode;
    }
    size() {
        let counter = 0;
        let pointer = this.listHead;
        while(pointer !== null) {
            counter++;
            pointer = pointer.getNextNode();
        }
        return counter;
    }
    head() {
        return this.listHead;
    }
    tail() {
        let nodePointer = this.listHead;
        while(nodePointer.getNextNode() !== null) {
            nodePointer = nodePointer.getNextNode();
        }
        return nodePointer;
    }
    at(index) {
        let nodePointer = this.listHead;
        for(let i=0 ; i<index ; i++) {
            nodePointer = nodePointer.getNextNode();
        }
        return nodePointer;
    }
    pop() {
        let listSize = this.size();
        let nodePointer = this.listHead;
        for(let i=0 ; i<listSize-2 ; i++) {
            nodePointer = nodePointer.getNextNode();
        }
        nodePointer.setNextNode(null);
    }
    contains(value) {
        let nodePointer = this.listHead;
        let existingValue =false;
        while(nodePointer !== null) {
            if(nodePointer.value === value) {
                existingValue = true;
            }
            nodePointer = nodePointer.getNextNode();
        }
        return existingValue;
    }
    find(value) {
        let listSize = this.size();
        let nodePointer = this.listHead;
        for(let i=0 ; i<listSize ; i++) {
            if(nodePointer.value === value) {
                return i;
            }
            nodePointer = nodePointer.getNextNode();
        }
        return null;
    }
    insertAt(value, index) {
        let listSize = this.size();
        if(index >= listSize) {
            console.log("please enter a valid index ! (less than the list size)")
        }
        else {
        let newNode = new Node();
        newNode.setValue(value);
        let nodePointer = this.listHead;
        for(let i=0 ; i<index-1; i++) {
            nodePointer = nodePointer.getNextNode();
        }
        let nextNode = nodePointer.getNextNode();
        nodePointer.setNextNode(newNode);
        newNode.setNextNode(nextNode)
    }
    }
    removeAt(index) {
        let nodePointer = this.listHead;
        for(let i=0 ; i<index-1; i++) {
            nodePointer = nodePointer.getNextNode();
        }
        nodePointer.setNextNode(nodePointer.getNextNode().getNextNode());
    }
    toString() {
        let listString = ""
        let nodePointer = this.listHead;
        while(nodePointer !== null) {
            listString = listString + "( " + nodePointer.getValue() + " ) -> "
            nodePointer = nodePointer.getNextNode();
        }
        return listString;
    }
}
