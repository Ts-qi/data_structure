  var Stack = function() {
      var items = [] ; // 私有变量  this.items = []; 属于共有变量
      // 栈顶添加元素 push
      this.push = function(ele) {
          items.push(ele)
      };
      // n拿出栈顶元素 pop
      this.pop = function() {
        return items.pop()
      }
        // 查看栈顶的元素; 查看数组最后一项
      this.peek = function() {
        return items[items.length - 1]
      }
        // 查看栈是否是空
     this.isEmpty = function() {
        return items.length ===  0
     }
     // 清除栈
     this.clear = function() {
         items = []
     }
     // 获取栈的长度
     this.size = function() {
         return items.length;
     }
      // 检查items 
      this.getItems = function() {
          return items;
      }

  }


  /**
   * 十进制 转 二进制
   * 十进制 : 0,1,2,3,4,5,6,7,8,9,
   * 二进制： 0，1 
   * @param number 
   */
   var TenToTwo = function( number) {
       var s = new Stack();
       var rest ; // 定义一个余数参数
       var targetValue = ''
       while ( number > 0) { // 不断的循环
           rest = number%2 // 求得余数
           s.push(rest) // 将余数放入栈中；
             number = Math.floor(number/2); // 向下取整；

       }

       // 取得最后的二进制的值 
       while(!s.isEmpty()) { // 判断不为空；不断的去取栈顶的值；
        targetValue += s.pop()
       }

       return targetValue;
   }