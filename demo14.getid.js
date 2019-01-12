document.getElementById=(function(func){
	return function(){
		return func.apply(document,arguments);
	};
})(document.getElementById);
/*用getid 来引用document.getElementById,在调用getid,就变成了普通的函数调用，函数内部的this指向了window而不是document*/
var getid = document.getElementById;
var div = getid('dss');
console.info(div.id)