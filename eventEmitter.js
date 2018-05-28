/**
 * 实现一个EventEmitter
 * 定义一个子类
 * 调用构造函数
 * 继承EventEmitter
 */
var util = require('util')
var EventEmitter = require('events').EventEmitter

function MyEmitter() {
  EventEmitter.call(this)
}

// 继承
util.inherits(MyEmitter, EventEmitter)

var em = new MyEmitter()
em.on('hello', function(data) {
  console.log('收到事件hello的数据: ', data)
})

em.emit('hello', 'EventMitter 传递消息真方便！')