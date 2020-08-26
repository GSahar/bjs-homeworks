function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) { }
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(a, b) {
    return a.every((a, i) => a === b[i]);
}

function memorize(fn, limit) {
    const memory = [];
    return function (...args) {

        const argArr = Array.from(args);
        const objArr = memory.find((memory) => compareArrays(memory.args, argArr));

        if (objArr === undefined) {

            const resultArr = fn(...args);

            memory.push({ args: argArr, result: resultArr });
            if (memory.length > limit) {
                memory.shift();
            }

            return resultArr;
        }
        else {
            return objArr.result;
        }
    };
}