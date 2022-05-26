class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        let node = new Node(value);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
            
        }
        this.length++;
        return this;
    }
    pop() {
        if(this.length === 0 ) return undefined;
        let preTail = this.head;
        let temp = preTail.next;
        while(temp.next) {
            preTail = temp;
            temp = temp.next;
        }
        this.tail = preTail;
        this.tail.next = null;
        this.length--;
        return temp;
    }

    shift() {
        if(this.length === 0) return undefined;
        let currentValue = this.head;
        this.head = currentValue.next;
        currentValue.next = null;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentValue;
    }

    unshift(value) {
        let node = new Node(value);
        if(this.length == 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if( index < 0 || index >= this.length ) return null;

        let current = this.head;
        let count = 0;
        while(count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }

    set(index,value) {
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.value = value
            return true;
        }
        return false;
    }

    insert(index,value) {
        if( index < 0 || this.length < index) return false;
        if(this.length === index) return !!this.push(value) //insert at end
        if(index === 0 ) return !!this.unshift(value) // insert at start;
    
        // insert in middle
        let previous = this.get(index-1);
        let node = new Node(value);
        let temp = previous.next;
        previous.next = node;
        node.next = temp;
        this.length++
        return true;
    
    }

    delete(index) {
        if( index < 0 || index > this.length) return undefined;
        if( this.length === index ) return this.pop();// remove from the last
        if(index === 0 ) return this.shift() // remove from start;

        // Remove from the middle
        let previous = this.get(index-1);
        let removed = previous.next;
        previous.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        let next = this.head;
        this.head =  this.tail;
        this.tail = node;
        let prev = null;
    }
}
const list = new SinglyLinkedList();
list.push('Ram');
list.push('Shyam');
list.push('Mohit');
list.push('Mohit123'); //3
// console.log(list.shift())
// console.log(list.unshift(23));
// console.log(list);
// console.log(list.get(3));

// console.log(list.set(1,'Abhishek'))
// console.log(list.insert(1,'R123'));
// console.log(list.get(1));

console.log(list.delete(2))
// console.log(list.pop());