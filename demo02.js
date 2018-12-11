'use strict'
var Duck=function(){};
var Chicken=function(){};
var makeSound=function(animal)
{
	if (animal instanceof Duck)
	{
		console.info('duck');
	}else if (animal instanceof Chicken)
	{
		console.info('Chicken');
	}
}