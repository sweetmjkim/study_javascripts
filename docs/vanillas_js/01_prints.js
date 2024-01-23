// 변수선언 : let

let name = "kim myungjun";
// undefined
console.log(name);
// VM155:1 kim myungjun
// undefined

let welcome = 'Hello world !';
// undefined
welcome;
// 'Hello world !'
let numbers = 55
// undefined
numbers;
// 55

welcome;
// 'Hello world !'
'string :' + 'Hello world !'
// 'string :Hello world !'
"string :" + welcome;
// 'string :Hello world !'
let concats = "string : " + welcome;
// undefined
concats;
// 'string : Hello world !'

numbers;
// 55
concats = concats + ", number:" + numbers;
// 'string : Hello world !, number:55'
concats;
// 'string : Hello world !, number:55'
alert(concats);
// undefined

concats;
// 'string : Hello world !, number:55'
`string : ${welcome}, Number : ${numbers}`;
// 'string : Hello world !, Number : 55'
let concats_tilt = `string : ${welcome}, Number : ${numbers}`;
// undefined
concats_tilt;
// 'string : Hello world !, Number : 55'
console.log(concats_tilt);
// VM1100:1 string : Hello world !, Number : 55
// undefined