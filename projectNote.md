- 改变环境变量：
    控制台执行： export NODE_ENV = development
- padding-top: 50%:
    https://blog.csdn.net/qq_42564846/article/details/81141037 
- 数字位前补0方法：
    function PrefixZero(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }
- 伪元素会跟随其父元素移动。
- 手势事件：touchstart,touchmove,touchend;
    水平位移：e.changedTouches[0].clientX
    
- 取消绑定事件：
//解绑事件:
/*
* 注意:用什么方式绑定事件,就应该用对应的方式解绑事件
* 1.解绑事件
* 对象.on事件名字=事件处理函数--->绑定事件
* 对象.on事件名字=null;
* 2.解绑事件
* 对象.addEventListener("没有on的事件类型",命名函数,false);---绑定事件
* 对象.removeEventListener("没有on的事件类型",函数名字,false);
* 3.解绑事件
* 对象.attachEvent("on事件类型",命名函数);---绑定事件
* 对象.detachEvent("on事件类型",函数名字);
* */

- 触发按钮点击事件：
function load(){
    //下面两种方法效果是一样的
    document.getElementById("target").onclick();
    document.getElementById("target").click();
}