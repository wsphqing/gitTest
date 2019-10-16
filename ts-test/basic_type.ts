let x: [string, number];
x = ['hello', 10];

enum Color{
  Red = 1,
  Green,
  Blue
}

let c: Color = Color.Green;
console.log(c);

let u: undefined = undefined;
let n: null = null;

x = null;

function warnUser(): void {
  console.log('This is my warning message');
}

function error(message: string): never {
  throw new Error(message);
}

function fail(): never {
  return error('Something failed');
}

function infiniteLoop(): never {
  while (true) {

  }
}

let obj: object;
obj = [];

let someValue: any = 'this is a string';

let strLength: number = (someValue as string).length || (<string>someValue).length;

function f(input: boolean) {
  let a = 100;
  let b;

  if (input) {
    let b = a + 1;
    return b;
  }

  return b;
}

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: 'white', area: 100}
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }

  return newSquare;
}

console.log(createSquare({color: 'black', test: 'ccc'}));

interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 32;

