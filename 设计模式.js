/**
 * 设计模式
 */

// 单例：任意对象都是单例，无需特别处理
var obj = {
  mane: 'Tom',
  age: 10
}

// 工厂：就是同样形式参数返回不同的实例
function Person() {
  this.name = 'Person'
}

function Animal() {
  this.name = 'Animal'
}

function Factory() {
  Factory.prototype.getInstance = function(className) {
    return eval('new ' + className + '()')
  }
}

var factory = new Factory()
var obj1 = factory.getInstance('Person')
var obj2 = factory.getInstance('Animal')
  // console.log(obj1.name) // Person
  // console.log(obj2.name) // Animal

// 代理：新建个类调用老类的接口，包一下
function Game() {}
Game.prototype.sayName = function() {
  console.log('football')
}
Game.prototype.sayTime = function() {
  console.log('90 minutes')
}

function GameProxy() {
  this.game = new Game()
  var that = this
  this.callMethod = function(functionName) {
    console.log('befor proxy: ', functionName)
    that.game[functionName]() // 代理
    console.log('after proxy: ', functionName)
  }
}

var gg = new GameProxy()
  // gg.callMethod('sayName') // 代理调用Game的方法
  // gg.callMethod('sayTime')

// 观察者：就是事件模式，比如按钮的onclick这样的应用
function Publisher() {
  this.listeners = []
}
// 发布者
Publisher.prototype = {
  addListener(listener) {
    this.listeners.push(listener)
  },
  removeListener(listener) {
    delete this.listeners[listener]
  },
  notify(obj) {
    for (var i = 0; i < this.listeners.length; i++) {
      var listener = this.listeners[i]
      if (typeof listener !== 'undefined') {
        listener.process(obj)
      }
    }
  }
}

// 订阅者
function Subscribe() {}
Subscribe.prototype = {
  process(obj) {
    console.log(obj)
  }
}

var publisher = new Publisher()
publisher.addListener(new Subscribe())
publisher.addListener(new Subscribe())

publisher.notify({ name: 'Tom', age: 30 })
publisher.notify('2 subscribers will both perform process')