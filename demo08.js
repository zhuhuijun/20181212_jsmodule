/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-11-27 21:53:11
 * @version $Id$
 */

 var Type={};
 var type=['Array','String','Number'];
 for(var i = 0;i<type.length;i++){
 	(function(one){
 		Type['is'+one] = function(obj){
 			return Object.prototype.toString.call(obj) === '[object ' +one+ ']';
 		}
 	})(type[i]);
 };

 var tt = Type.isArray([]);
 console.info(tt);