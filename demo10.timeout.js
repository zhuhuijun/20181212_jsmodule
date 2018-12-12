/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-12-11 20:01:52
 * @version $Id$
 */

 var throttle = function(fn,interval){
 	var _self = fn,/*保存需要被延迟执行的函数引用*/
 	timer,/*定时器*/
 	firstTime=true;/*是否是第一次加载*/
 	return function(){
 		var _args =arguments;
 		var _me =this;
 		if (firstTime){
 			_self.apply(_me,_args);
 			return firstTime = false;
 		}
 		if (timer)
 		{
 			return false;
 		}
 		timer =setTimeout(function(){
 			clearTimeout(timer);
 			timer = null;
 			_self.apply(_me,_args);
 		},interval||500);
 	};
 };

var tcount = 1;
window.onresize =throttle(function(){
	console.info('f:%d',tcount);
	tcount++;
},500);