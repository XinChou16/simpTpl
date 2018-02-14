/**
 * A awesome JavaScript template engine
 * @author zhouxinme@gmail.com
 * @site https://github.com/XinChou16/simpTpl
 */

define(function(require) {
  var simpTpl = require('simpTpl');

  var data = {
    name: 'xin',
    addr: 'nc',
    home: {
      county: 'jinxian'
    }
  };
  var tpl = 'Hello, my name is  {{name}}, I am in {{home.county}}.';
  var str = simpTpl(tpl, data);
  console.log(str);
  document.write(str); 
})