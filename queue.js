function Queue() {
    this.qList = [];
    this.head = -1;
    this.tail = -1;

    this.enqueue = function(item) {
        if (this.head == -1) {
            this.head++;
        }
        this.tail++;
        this.qList.push(item);
    };

    this.dequeue = function() {
        if (this.head == -1) {
            console.log("Queue underflow!");
        } else if (this.head == this.tail) {
            const p = this.qList.splice(0, 1);
            this.head--;
            this.tail--;
            return p;
        } else {
            this.tail--;
            return this.qList.splice(0, 1);
        }
    };

    this.size = function() {
        return this.qList.length;
    };

    this.peek = function() {
        if (this.head == -1) {
            console.log("Queue is empty!");
        } else {
            return this.qList[this.head];
        }
    };

    this.list = function() {
        return this.qList;
    };
}