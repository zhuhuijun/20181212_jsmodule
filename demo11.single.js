/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-12-12 13:22:43
 * @version $Id$
 */

 var Singleton =function(name){
 	this.name=name;
 }
 Singleton.prototype.getName = function(){
 	console.info(this.name);
 	alert(this.name);
 };

 Singleton.getInstance = (function(name){
 	var instance = null;
 	return function(name){
 		if (!instance){
 			instance = new Singleton(name);
 		}
 		return instance;
 	};
 })();

 Singleton.getInstance('name1').getName();
 Singleton.getInstance('name2').getName();