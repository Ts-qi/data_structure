
var linkList = function() {
    var head = null ; // 链表头
    var  length = 0 ; // 长度

    // 节点辅助类
    var Node = function (ele) {
        this.ele = ele;
        this.next = null;
    }
    // 链表尾部添加元素
    this.append = function (ele) {
        var  node = new Node(ele);
            // 空链表
        if(head == null) {
            head = node
        }else  { // 不是空链表
            var  current = head
            // 无限 的查找
            while( current.next) {
                current = current.next;
            }
            // 当while 循环执行完毕后，current 已经是链表的最后一项了； 
            current.next = node;
        };
        length ++;

    }
    // 获取到头 
    this.getHead = function () {
        return head;
    }
}
var l = new linkList();
l.append(1)
l.append(2)
l.append(3)

console.log(l.getHead())