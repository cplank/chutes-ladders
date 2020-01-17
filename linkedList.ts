export class llNode<T> {
    data: T;
    next: llNode<T>
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

export class LinkedList<T> {
    head: llNode<T>
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        let next = this.head
        this.head = new llNode(data, next)
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++
            node = node.next
        }
        return counter;
    }

    getFirst() {
        return this.head
    }

    getLast() {
        if (this.head === null) {
            return
        }
        let node = this.head

        while (node.next != null) {
            node = node.next
        }
        return node
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (this.head === null) {
            return
        }
        this.head = this.head.next
    }

    removeLast() {
        if (this.head === null) {
            return
        }
        if (this.head.next === null) {
            this.head = null
            return
        }
        let node = this.head
        let previousNode = null
        while (node.next != null) {
            previousNode = node
            node = node.next
        }
        previousNode.next = null
    }

    insertLast(data) {
        const last = this.getLast()
        if (last) {
            last.next = new llNode(data)
        } else {
            this.insertFirst(data)
        }
    }

    getAt(index) {
        let node = this.head
        let counter = 0

        while (node) {
            if (index === counter) {
                return node
            } else {
                counter++
                node = node.next
            }

        }
        return null
    }

    removeAt(index) {
        if (this.head === null) {
            return
        }
        if (this.size() < index) {
            return
        }
        if (index === 0) {
            this.removeFirst()
            return
        }
        const previousNode = this.getAt(index - 1)
        const nextNode = this.getAt(index + 1)
        previousNode.next = nextNode
    }

    insertAt(data, index) {
        const newNode = new llNode<T>(data)
        if (this.head === null) {
            this.head = newNode
            return
        }
        if (index > this.size()) {
            this.insertLast(data)
            return
        }

        if (index === 0) {
            this.insertFirst(data)
            return
        }

        const previousNode = this.getAt(index - 1)
        const currentNode = this.getAt(index)
        previousNode.next = newNode
        newNode.next = currentNode

    }

    forEach(fn) {
        let node = this.head
        while (node) {
            fn(node)
            node = node.next
        }
        return
    }
}

// module.exports = { llNode, LinkedList }