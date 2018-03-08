/**
 * A awesome JavaScript template engine
 * @author zhouxinme@gmail.com
 * @site https://github.com/XinChou16/simpTpl
 */

var assert = require('chai').assert,
    tpl    = require('../lib/simpTpl');

var units = [
  [{
    name: 'xinxin',
    age: 23,
  },
  "I'm {{name}}, My age is {{age}}",
  "I'm xinxin, My age is 23"],
  [{
    name: 'xinxin',
    age: 23,
    hometown:{
      city:'nanchang',
      county:'jinxian'
    }
  },
  "I'm {{name}}, I'm live in {{hometown.county}}",
  "I'm xinxin, I'm live in jinxian"],
  [{
    name: 'xinxin',
    age: 23,
    hometown:{
      city:'nanchang',
      county:'jinxian'
    },
    hobby:{
      sports:{
        tennis: 'tennis'
      }
    }
  },
  "I'm {{name}}, I'm live in {{hometown.county}},I like play {{hobby.sports.tennis}}",
  "I'm xinxin, I'm live in jinxian,I like play tennis"]
]

describe('tpl', function() {
  it('should get the string', function () {
    units.forEach( function(testData,index) {
      assert.equal( tpl(testData[1], testData[0]), testData[2], 'test'+index+'failed')
    })
  })
})