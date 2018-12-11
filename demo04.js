Object.Crerate = Object.Crerate||function(obj){
	var F = function(){};
	F.prototype= obj;
	return new F();
};
var Plane = function(){
	this.blood = 100;
	this.attacklevel =1;
	this.defen=1;
};
var plane = new Plane();
plane.blood =500;
var clonePlane = Object.Crerate(plane);
console.info(clonePlane.blood);