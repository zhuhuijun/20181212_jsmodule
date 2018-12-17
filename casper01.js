/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-12-17 10:16:26
 * @version $Id$
 */
phantom.outputEncoding = "utf-8"; //解决中文乱码
var casper = require('casper').create();
casper.start('http://www.baidu.com/', function() {
  this.echo(this.getTitle());
});
phantom.outputEncoding = "utf-8"; //解决中文乱码
casper.then(function() {
  this.capture('baidu-homepage.png'); //  生成一个png图片
});

casper.run();
