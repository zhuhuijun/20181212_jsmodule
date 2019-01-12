var each = function (ary, callback) {
	for (var i = 0; i < ary.length; i++) {
		if (callback(i, ary[i]) == false) {
			break;
		}
	}
};
each([1, 2, 3], function (i, n) {
	console.info('index:%d,val:%d', i, n);
	if (n == 2) {
		return false;
	}
})