/* Задание 1*/
let d = 7;
let e = 3;
console.log(d + e);
console.log(d - e);
console.log(d * e);
console.log(d / e);
console.log(d % e);
/*Задание 2*/
let x = 6;
let y = 15;
let z = 4;
console.log((x += y - x++ * z));
console.log((z = --x - y * 5));
console.log((y /= x + (5 % z)));
console.log((z = x++ + y * 5));
console.log((x = y - x++ * z));
/* Задание 3*/
let a = 9;
let b = 7;
let c = 2;
console.log((a + b + c) / 3);
/* Задание 4*/
let r = 5;
let h = 10;
let V = Math.PI * Math.pow(r, 2) * h;
console.log("Обьем цилиндра: " + Math.round(V));
let S = 2 * Math.PI * r * (r + h);
console.log("Площадь цилиндра: " + Math.round(S));
