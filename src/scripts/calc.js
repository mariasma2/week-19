let a, b, c;
let getNumbers = () => {
    a = +(document.querySelector('#n1').value);
    b = +(document.querySelector('#n2').value);
    result = document.querySelector('#result');
    return
}

let clearNum = () => {
    document.querySelector('#n1').value = '';
    document.querySelector('#n2').value = '';
}

class Calc {
    static sum(a, b) {
        c = a + b
        return c;
    }
    static minus(a, b) {
        c = a - b
        return c;
    }
    static division(a, b) {
        if (b === 0) {
            alert('На ноль делить нельзя')
        }
        c = a / b
        return c;
    }
    static mult(a, b) {
        c = a * b
        return c;
    }
}

let plus = () => {
    getNumbers();
    clearNum();
    result.innerHTML = Calc.sum(a, b);
}
document.querySelector('#plus').onclick = plus;

let min = () => {
    getNumbers();
    clearNum();
    result.innerHTML = Calc.minus(a, b);
}
document.querySelector('#min').onclick = min;

let mult = () => {
    getNumbers();
    clearNum();
    result.innerHTML = Calc.mult(a, b);
}
document.querySelector('#mult').onclick = mult;

let division = () => {
    getNumbers();
    clearNum();
    result.innerHTML = Calc.division(a, b);
}
document.querySelector('#division').onclick = division;