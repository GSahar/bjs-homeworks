"use strict";
/* #region Задание № 1 */
function showSolutionsMessage(a, b, c) {
    let messageInit = `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`;
    alert(messageInit);
    console.log(messageInit);

    //Результат решения
    let result = getSolutions(a, b, c);
    let messageGetDiscr = `Значение дискриминанта: ${result.D}`;
    alert(messageGetDiscr);
    console.log(messageGetDiscr);

    let messageResult;
    if (result.roots.length === 2) {
        messageResult = `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
    }
    else if (result.roots.length === 1) {
        messageResult = `Уравнение имеет один корень X₁ = ${result.roots[0]}`;
    }
    else {
        messageResult = "Уравнение не имеет вещественных корней";
    }

    alert(messageResult);
    console.log(messageResult);
}

function getSolutions(a, b, c) {
    //Объект с результатами
    let result = {
        D: 0,
        roots: []
    };

    //Получаем значение дискриминанта
    result.D = Math.pow(b, 2) - 4 * a * c;
    let objectD = result.D;

    //Решаем уравнение
    if (objectD === 0) {
        result.roots.push((-b + Math.sqrt(objectD)) / (2 * a));
    }
    else if (objectD > 0) {
        result.roots.push((-b + Math.sqrt(objectD)) / (2 * a));
        result.roots.push((-b - Math.sqrt(objectD)) / (2 * a));
    }

    return result;
}
/* #endregion */

/* #region Задание № 2 */

function getAverageScore(data) {

    //Среднее по каждому
    let result = {};
    for (let item in data) {
        result[item] = getAverageMark(data[item]);
    }

    //среднее всех оценок
    let countItem = Object.keys(result).length;
    let average = 0;
    if (countItem !== 0) {
        for (let item in result) {
            average = average + result[item];
        }
        average = average / countItem;
    }

    result.average = average;

    return result;
}

function getAverageMark(marks) {
    let sumArr = 0;
    let result = 0;
    let sizeArr = marks.length;

    if (sizeArr !== 0) {
        for (let i = 0; i < sizeArr; i++) {
            sumArr = sumArr + marks[i];
        }
        result = sumArr / sizeArr;
    }

    return result;
}
/* #endregion */

/* #region Задание № 3 */
function getPersonData(secretData) {
    let resultObj = { firstName: "имя_бандита", lastName: "фамилия_бандита" };
    resultObj.firstName = getDecodedValue(secretData.aaa);
    resultObj.lastName = getDecodedValue(secretData.bbb);

    return resultObj;
}

function getDecodedValue(secret) {
    let resultStr;
    if (secret === 1) {
        resultStr = "Эмильо";
    }
    else if (secret === 0) {
        resultStr = "Родриго";
    }
    return resultStr;
}
/* #endregion */