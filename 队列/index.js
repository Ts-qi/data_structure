

var Queue = function() {
    var items = [];
    // 入队列
    this.enqueue = function (ele) {
        items.push(ele)
    }
    // 出队列 
    this.dequeue = function () {
        return items.shift();
    }
    // 查看队列头 
    this.front = function () {
        return items[0]
    }
    // 检查队列是否是空  
    this.isEmpty = function () {
        return items.length === 0
    }
    // 检查队列的长度 size 
    this.size = function () {
        return items.length
    }
}