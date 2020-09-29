class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    getNextNode() {
        return this.next
    }

    setNextNode(data){
        if(!data instanceof Node){
            throw new Error('data in setNextNode must me instance of data')
        }
        this.next = data
    }
}

module.exports = Node;