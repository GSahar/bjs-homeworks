
/* #region Задание № 1 */
class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.validState(this._state * 1.5);
    }

    set state(setState) {
        this.validState(setState);
    }

    /* проверка _state на корректность*/
    validState(stateBook) {
        if (stateBook < 0) {
            this._state = 0;
        }
        else if (stateBook > 100) {
            this._state = 100;
        }
        else {
            this._state = stateBook;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {

    type = "novel";
}

class FantasticBook extends Book {
    type = "fantastic";
}

class DetectiveBook extends Book {
    type = "detective";
}

/* #endregion */

/* #region Задание № 2 */

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {

        for (let i = 0; i < this.books.length; i++) {
            const obj = this.books[i];
            if (obj[type] === value) {
                return obj;
            }
        }
        return null;
    }

    giveBookByName(bookName) {

        for (let i = 0; i < this.books.length; i++) {
            const obj = this.books[i];
            if (obj.name === bookName) {

                this.books.splice(i, 1);
                return obj;
            }
        }
        return null;
    }
}
/* #endregion */

/* #region Задание № 3 */
class StudentLog {
    constructor(name) {
        this.name = name;
        this.subjects = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {

        if ((grade >= 1 & grade <= 5) & (typeof grade !== "string")) {

            if (subject in this.subjects) {
                this.subjects[subject].push(grade);
            }
            else {
                this.subjects[subject] = [grade];
            }
            return this.subjects[subject].length;
        }
        else {
            return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5. \n0`;
        }
    }

    getAverageBySubject(subject) {
        let average = 0;

        if (subject in this.subjects) {
            const sizeArr = this.subjects[subject].length;

            for (let i = 0; i < sizeArr; i++) {
                average = average + this.subjects[subject][i];
            }

            average = average / sizeArr;
        }
        return average;
    }

    getTotalAverage() {
        //Среднее по каждому
        const averageBySubject = {};
        for (let subject in this.subjects) {
            averageBySubject[subject] = this.getAverageBySubject(subject);
        }

        //среднее всех оценок
        const countSubject = Object.keys(averageBySubject).length;
        let average = 0;
        if (countSubject !== 0) {
            for (let subject in averageBySubject) {
                average = average + averageBySubject[subject];
            }
            average = average / countSubject;
        }

        return average;
    }

}

/* #endregion */