/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-12-11 13:42:21
 * @version $Id$
 */

 Function.prototype.before = function(beforefn){
    var _self = this;/*保存原来函数的引用*/
    return function(){/*返回包含原函数和新函数的代理函数*/
        beforefn.apply(this,arguments);/*执行新函数，修正this*/
        return _self.apply(this,arguments);/*执行原函数*/
    };
};

Function.prototype.after = function(afterfn){
    var _self =this;
    return function(){
        var ret = _self.apply(this,arguments);
        afterfn.apply(this,arguments);
        return ret;
    };
};

var func =function(){
    console.info('2');
};
func = func.before(function(){
    console.log('1');
}).after(function(){
    console.log('3');
});
func();