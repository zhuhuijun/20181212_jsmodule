/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-11-27 20:03:35
 * @version $Id$
 */
 var obj1={
 	name:'seven',
 	getName:function(){
 		console.info('this name is %s',this.name);
 		return this.name;
 	}
 };

 var obj2 = {
 	name:'name2'
 };

 console.info(obj1.getName());
 console.info(obj1.getName.call(obj2));

