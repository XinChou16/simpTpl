/**
 * A awesome JavaScript template engine
 * @author zhouxinme@gmail.com
 * @site https://github.com/XinChou16/simpTpl
 */

var simpTpl = require('../lib/simpTpl.js');
var tpl = 'hello,I\'m {{name}},I\'am {{age}} years old'
var data = {name:'xinxin',age:'23'}

console.log( simpTpl(tpl,data) )