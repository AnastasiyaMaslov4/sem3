// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let userNum1 = +prompt('Введите первое число:');
let userNum2 = +prompt('Введите второе число:');
let userNum3 = +prompt('Введите третье число:');

const maxNum = (num1, num2, num3) => Math.max(num1, num2, num3);
console.log(`Наибольшее число: ${maxNum(userNum1, userNum2, userNum3)}`);