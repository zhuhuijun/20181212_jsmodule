var duck={
	duckSing:function(){
		console.info('嘎嘎');
	}
};
var chicken={
	duckSing:function(){
		console.info('嘎嘎');
	}
};
var arr = [];
var joinArr = function(animal){
	if(animal && typeof animal.duckSing === "function")
	{
		arr.push(animal);
	}
};
joinArr(duck);
joinArr(chicken);

for(var i = 0; i< arr.length;i++)
{
	var o = arr[i];
	o.duckSing();
}
console.info('dddddddddddd');