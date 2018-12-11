/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-11-20 19:36:32
 * @version $Id$
 */

 var GoogleMap= {
 	show:function(){
 		console.info('google');
 	}
 };

 var BaiduMap= {
 	show:function(){
 		console.info('baidu');
 	}
 };
 var SosoMap= {
 	show:function(){
 		console.info('soso');
 	}
 };

 var rendermap=function(type){
 	if (type.show instanceof Function)
 	{
 		type.show();
 	}
 }

 rendermap(SosoMap);
 rendermap(BaiduMap);
 rendermap(GoogleMap);