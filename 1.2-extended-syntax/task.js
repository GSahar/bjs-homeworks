"use strict";
function getResult(a, b, c) {
    // код для задачи №1 писать здесь
    let x = [];
    let D = 0;

    D = Math.pow(b, 2) - 4 * a * c;

    if (D === 0) {
        x.push((-b + Math.sqrt(D)) / (2 * a));
    }
    else if (D > 0) {
        x.push((-b + Math.sqrt(D)) / (2 * a));
        x.push((-b - Math.sqrt(D)) / (2 * a));
    }

    return x;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let averageMark = 0;
    let sumArray = 0;
    let lengthArrey = 0;

    lengthArrey = marks.length;

    if (lengthArrey === 0) {
        return 0;
    }

    if (lengthArrey > 5) {
        marks.splice(5);
        lengthArrey = marks.length;

        console.log("Можно ввести только 5 оценок! Будет расчитано только первые 5.");
    }

    for (let i = 0; i < lengthArrey; i++) {
        sumArray = sumArray + marks[i];
    }

    averageMark = sumArray / lengthArrey;

    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    let result;
    let сurrentDate = new Date();

    let agePerson = сurrentDate.getFullYear() - dateOfBirthday.getFullYear();
    result = agePerson > 18 ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;

    return result;
}