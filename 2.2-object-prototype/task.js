//для задачи №1
String.prototype.isPalindrome = function () {
    let thisString = this;
    let arrString = thisString.split('');

    //Очищаем от пробелов
    for (let i = 0; i < arrString.length; i++) {
        if (arrString[i] === ' ') {
            arrString.splice(i, 1);
        }
    }

    let originString = arrString.join('').toLowerCase();
    let reversString = arrString.reverse().join('').toLowerCase();

    return reversString === originString;
}

// код для задачи №2 писать здесь
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

    return Math.round(result);
}

// код для задачи №3 писать здесь
function checkBirthday(birthday) {
    //Один год в милисекундах
    let oneYear = 31536000000;

    let agePerson = (new Date() - new Date(birthday)) / oneYear;

    return agePerson > 18 ? true : false;
}