// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"


const salary = () => {
    let userNum = Number(prompt('Введите число'));
    if (isNaN(userNum)) {alert("Введенное значение не является числом. Введите данные правильно");
    } else {
    console.log(`Размер заработной платы за вычетом налогов равен ${userNum * 0.87}`);
    }
}

salary();


