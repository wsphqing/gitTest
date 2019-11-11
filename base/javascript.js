// const sum = new Function('a', 'b' , 'console.log(a + b)');

// // sum(3, 10);

// console.log((function(){}).constructor.name);

// let arr = [
//   {pageID: 23},
//   {pageID: 23},
//   {pageID: 23},
//   {pageID: 23},
//   {pageID: 23},
// ];
// let data = (arr.splice(0, 1))[0];
// console.log(arr, data);

// new Promise((resolve, reject) => {
//   setTimeout(function(){
//     resolve(2);
//   }, 1000)
// }).then((data) => {
//   if (data === 1) {
//     return getB;
//   } else {
//     console.error('errr');
//   }
// }).then((data) => {
//   console.log(data);
// })//.catch(e => console.error(e));

// const getB = new Promise((resolve, reject) => {
//   setTimeout(function(){
//     // resolve(3);
//     reject('Error in getB');
//   }, 1000) 
// })

const arr = [1,2,3,4,5];
const num = arr.findIndex((item) => {
  return item === 9;
})
console.log(num);