/**
 * A awesome JavaScript template engine
 * @author zhouxinme@gmail.com
 * @site https://github.com/XinChou16/simpTpl
 */

!function(name,definition,context){
  if(typeof module != 'undefined' && module.exports){
    // in node env
    module.exports = definition();
  } else if (typeof context['define'] === 'function' && (context['define']['amd'] || context['define']['cmd'])){
    // in requirejs seajs env
    define(definition)
  } else {
    // in client env
    context[name] = definition();
  }
}('simpTpl',function() {
  var template = (function(){
    "use strict";

    var reg = /{{([^{}]+)?}}/g;
    var match,path,key,templateHolder,lookup;

    return function(tpl,data) {
      while ((match = reg.exec(tpl)) && match[1]) {
        templateHolder = match[0]; //{{msg}}
        key = match[1]; // msg
        path = key.split('.');
        lookup = data;
    
        // 遍历多级属性
        for (var i = 0; i < path.length; i++) {
          lookup = lookup[path[i]];
          if (lookup === void 0) {
              throw "template error: '" + path[i] + "' not found in " + data;
          }
        }
        
        // 模板替换
        tpl = tpl.replace(templateHolder,lookup);
      }
      return tpl;
    }
  })();

  return template;
},this)