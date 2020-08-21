//Задание № 1
function parseCount(value) {
    let result = Number.parseInt(value, 10);
    if (Number.isNaN(result)) {
        const parseError = new Error("Невалидное значение");
        throw parseError;
    }
    else {
        return result;
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch (exception) {
        return exception;
    }
}


//Задание № 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (((this.a + this.b) < this.c) | ((this.b + this.c) < this.a) | ((this.a + this.c) < this.b)) {
            const triangleError = new Error("Треугольник с такими сторонами не существует");
            throw triangleError;
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = (this.a + this.b + this.c) / 2;
        const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Math.round(s * 1000) / 1000;
    }
}

function getTriangle(a, b, c) {

    try {
        return new Triangle(a, b, c);
    }
    catch (exception) {
        return {
            stringError: "Ошибка! Треугольник не существует",
            getArea: function () {
                return this.stringError;
            },
            getPerimeter: function () {
                return this.stringError;
            }
        };
    }

}