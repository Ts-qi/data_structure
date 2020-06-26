

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

// 例子 ；
// 循环队列； 击鼓传花；
// 
// 玩家列表
var names = ['a','b','c','d','e','f']
// 游戏规则； 数到3  就剔除
var number = 3
// 函数
var passFlower = function ( names,number) {
    var q = new Queue();
    for (var i = 0;i < names.length; i++) {
        q.enqueue(names[i])// 入队列
    }
    // 在传的过程中 一直传 ； 直到剩下最后一名玩家
    var delP 
    while (q.size() > 1) {
        // number == 3 的 时候 剔除玩家； i= 3；
        // 队列头 到队列尾
        for (var i = 0;i < number-1; i++) {
            // 先出列 在入列
            q.enqueue(q.dequeue())
        }
        // 剔除第三位
         delP = q.dequeue()
        console.log('淘汰的玩家是:',delp)
    }

    return q.dequeue()
}
passFlower(names,number)

