"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let totalAmount = 0;
    let result;

    if (percent < 1) {
        alert("Процентная ставка должно быть больше единицы!");
        return 0;
    }

    if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
        alert("В поле нужно вводить только цифры!");
        return 0;
    }

    //Количество месяцев между датами
    let countMonth = ((date.getFullYear() - new Date().getFullYear()) * 12);

    percent = percent / 100;
    let P = percent / 12;

    //Тело кредита
    let S = Math.abs(amount) - Math.abs(contribution);

    for (let i = 0; i < countMonth; i++) {
        totalAmount += S * (P + P / ((Math.pow((1 + P), countMonth)) - 1));
    }
    result = Math.round(totalAmount * 100) / 100

    console.log(result);

    return result;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let greeting;
    
    if (typeof name === 'undefined' || name === null || name === "") {
        greeting = "Привет, мир! Меня зовут Аноним"
    }
    else {
        greeting = "Привет, мир! Меня зовут " + name;
    }    

    return greeting;
}