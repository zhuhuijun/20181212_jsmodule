/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-12-13 13:07:19
 * @version 代理的模式
 */
 var CreateDiv =function(html)
 {
 	this.html = html;
 	this.init();
 };
 CreateDiv.prototype.init = function(){
 	var div =document.createElement('div');
 	div.innerHTML = this.html;
 	div.id='ivid';
 	document.body.appendChild(div);
 };


 var ProxySingleCreateDiv = (function(){
 	var instance = null;
 	return function(html){
 		if (!instance){
 			instance = new CreateDiv(html);
 		}
 		return instance;
 	};
 })();

 var a = new ProxySingleCreateDiv('seee');
 var a = new ProxySingleCreateDiv('sfsfseee');