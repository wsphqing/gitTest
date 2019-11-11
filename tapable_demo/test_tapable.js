// SyncHook.js
const { SyncHook } = require('./tapable');

const syncHook = new SyncHook(['name', 'age']);

syncHook.tap('1', (name, age) => {
  console.log('1', name, age)
})
syncHook.tap('2', (name, age) => {
  console.log('2', name, age)
})
syncHook.tap('3', (name, age) => {
  console.log('3', name, age)
})

syncHook.call('dome', 10);

// SyncBaillHook.js
const { SyncBailHook } = require('./tapable');

const syncBailHook = new SyncBailHook(['name', 'age']);

syncBailHook.tap('1', (name, age) => {
  console.log('1', name, age);
})
syncBailHook.tap('2', (name, age) => {
  console.log('2', name, age);
  return '2';
})
syncBailHook.tap('3', (name, age) => {
  console.log('3', name, age);
})

syncBailHook.call('hello word', 11);

// SyncWaterfallHook.js
const { SyncWaterfallHook } = require('./tapable');

const syncWaterfallHook = new SyncWaterfallHook(['name', 'age']);

syncWaterfallHook.tap('1', (name, age) => {
  console.log('第一个函数事件名称', name, age);
  return '1';
})

// syncWaterfallHook.tap('2', ())
