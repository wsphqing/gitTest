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
console.log(obj1.name) // Person
console.log(obj2.name) // Animal