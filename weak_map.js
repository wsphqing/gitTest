var listeners = new WeakMap();

function on(object, event, fn) {
  let this_listeners = listeners.get(object);
  if (!this_listeners) this_listeners = {};
  if (!this_listeners[event]) this_listeners[event] = [];
  this_listeners[event].push(fn);
  listeners.set(object, this_listeners);
}

function emit(object, event) {
  let this_listeners = listeners.get(object);
  if (!this_listeners) this_listeners = {};
  if (!this_listeners[event]) this_listeners[event] = [];
  this_listeners[event].forEach(fn => {
    fn.call(object, event);
  });
}

let obj = {
  name: 'huaqing'
}

on(obj, 'hi', function(event) {
  console.log(this, event);
})

emit(obj, 'hi');