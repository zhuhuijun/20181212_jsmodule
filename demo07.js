/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-11-27 21:28:51
 * @version $Id$
 */

 var TV={
 	open:function(){
 		console.info('tv is open');
 	},
 	close:function(){
 		console.info('tv is close');
 	}
 };

 var CreateCommend = function(receve){
 	var execute =function(){
 		return receve.open();
 	};
 	var undo =function(){
 		return receve.close();
 	};
 	return{
 		execute:execute,
 		undo:undo
 	};
 };

 var setCommend = function(commend){
	document.getElementById('execute').onclick = function(){
		commend.execute();
	};//.onclick=function(){}
	document.getElementById('close').onclick = function(){
		commend.undo();
	};
};
setCommend(CreateCommend(TV));
