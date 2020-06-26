

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
    
    while (q.size() > 1) {
        // number == 3 的 时候 剔除玩家； i= 3；
        // 队列头 到队列尾
        for (var i = 0;i < number-1; i++) {
            // 先出列 在入列
            q.enqueue(q.dequeue())
        }
        // 剔除第三位
        console.log('淘汰的玩家是:',q.dequeue())
    }

    return q.dequeue()
}
passFlower(names,number)

/**
 *  优先队列  与普通队列区别： 带有一个优先级标志
 * 例子： 头等舱 优先登机；
 * 考虑点：优先队列: 优先级； priorityQueue
 */

 var PriorityQueue = function () {
     var items = [];
     // 辅助类 
     var QueueItem = function (ele,proprity) {
         this.ele = ele;
         this.proprity = proprity;
     }
     this.enqueue = function (ele,proprity) {
        var pd = new QueueItem(ele,proprity);
        var isAdd = false; // 是否插入成功
        // 比较 优先登级;
        for( var i = 0 ; i< items.length;i++) {
            if(pd.proprity > items[i].priority) {
                // 比较； 然后将这个 优先级放在前面
                items.splice(i,0,pd.proprity );
                isAdd = true; // 插入成功
                break; // 
            }
        }
        //  莫有插入成功； 说明优先级很低； 就放入到最后; push
        if(!isAdd) {
            items.push(pd)
        }
     }
     // 获取最终值
     this.getItems = function() {
         return items
     }
 }

 var d = new PriorityQueue()
 d.enqueue('aa',12);
 d.enqueue('111',10);
 d.enqueue('1asda11',233);

 console.log(d.getItems(),'getItems')
