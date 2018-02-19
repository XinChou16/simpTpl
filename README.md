# simpTpl
A lightweight js tempalte engine.

## Install

1. Node environment

``` js
npm install simpTpl
```
2. Client environment

``` js
bower install simpTpl
```

## Usage

``` js
var simpTpl = require('../lib/simpTpl.js');
var tpl = 'hello,I\'m {{name}},I\'am {{age}} years old'
var data = {
  name:'xinxin',
  age:'23'
}

console.log( simpTpl(tpl,data) )
```
More demos in sample folder

## Test

``` js
make test
```

## Author

- zhouxinme@gmail.com