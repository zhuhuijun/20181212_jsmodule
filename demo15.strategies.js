/**
 * 策略模式
 * 定义一系列算法，把他们一个个封装起来，并且使他们可以相互替换
 * A=salary*2
 * B=salary*3
 * C=salary*4
 * @authors Your Name (you@example.org)
 * @date    2018-12-19 13:32:58
 * @version $Id$
 */
 var PerformanceA=function(){};
 PerformanceA.prototype.caculate=function(salary){
 	return salary * 2;
 };
 var PerformanceB=function(){};
 PerformanceB.prototype.caculate=function(salary){
 	return salary * 3;
 };
 var PerformanceC=function(){};
 PerformanceC.prototype.caculate=function(salary){
 	return salary * 4;
 };
 /*奖金类*/
 var Bouns=function(){
 	this.salary=null;
 	this.strategy=null;
 };
 Bouns.prototype.setSalary= function(salary){
 	this.salary=salary;
 };
 Bouns.prototype.setStrategy= function(strategy){
 	this.strategy=strategy;
 };
 /*计算奖金*/
 Bouns.prototype.getBouns = function(){
 	return this.strategy.caculate(this.salary);
 };
 var bouns = new Bouns();
 bouns.setSalary(1000);
 bouns.setStrategy(new PerformanceC());
 console.info(bouns.getBouns());

 bouns.setSalary(5000);
 bouns.setStrategy(new PerformanceA());
 console.info(bouns.getBouns());

 var MyStray={
 	's':function(salary){
 		return salary*4;
 	},
 	'A':function(salary){
 		return salary *5;
 	}
 };

 var calac = function(level,salary){
 	return MyStray[level](salary);
 }
 var ss = calac('A',455);
 console.info(ss);