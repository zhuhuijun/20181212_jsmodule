/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-11-27 20:38:36
 * @version $Id$
 */

var obj1={
	name:'obj1'
};
var obj2={
	name:'obj2'
};
window.name='window';
function getName(){
	alert(this.name);
}

getName();
getName.call(obj1);
getName.call(obj2);