/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-12-13 13:19:32
 * @version $Id$
 */

 var getSingle =function(fn){
 	var instance = null;
 	return function(){
 		return instance ||(instance = fn.apply(this,arguments));
 	};
 }
var CreateDiv = function(){
 	var div =document.createElement('div');
 	div.innerHTML = 'ffffffffffff';
 	div.id='ivsssid';
 	document.body.appendChild(div);
 };
 var CreateDiv = getSingle(CreateDiv);
 CreateDiv();