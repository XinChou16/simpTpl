/**
 * A awesome JavaScript template engine
 * @author zhouxinme@gmail.com
 * @site https://github.com/XinChou16/simpTpl
 */

function simpTpl(tpl,data) {
  var reg = /{{([^{}]+)?}}/g;
  var match,paths,key,templateHolder,lookup;

  while ((match = reg.exec(tpl)) && match[1]) {
    templateHolder = match[0]; //{{msg}}
    key = match[1]; // msg
    path = key.split('.');
    lookup = data;

    // 遍历多级属性
    for (var i = 0; i < path.length; i++) {
      lookup = lookup[path[i]]
    }
    
    // 模板替换
    tpl = tpl.replace(templateHolder,lookup);
  }
  return tpl;
}