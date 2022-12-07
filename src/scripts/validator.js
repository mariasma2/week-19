class Validator {
    constructor() {

    }
    isEmail(email) {
        const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email.match(emailFormat)) {
            return true;
        } else {
            return false;
        }
    }

    isDomain(domain) {
        const domainFormat = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;
        if (domain.match(domainFormat)) {
            return true;
        } else {
            return false;
        }
    }

    isDate(date) {
        const dateFormat = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/;
        if (date.match(dateFormat)) {
            return true;
        } else {
            return false;
        }
    }

    isPhone(phone) {
        const phoneFormat = /\+972\ \([0-9]{2}\)\ [0-9]{3}-[0-9]{2}-[0-9]{2}/;
        if (phone.match(phoneFormat)) {
            return true;
        } else {
            return false;
        }
    }

}

class ValidatorStatic {
    static isEmail(email) {
        const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email.match(emailFormat)) {
            return true;
        } else {
            return false;
        }
    }

    static isDomain(domain) {
        const domainFormat = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;
        if (domain.match(domainFormat)) {
            return true;
        } else {
            return false;
        }
    }

    static isDate(date) {
        const dateFormat = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/;
        if (date.match(dateFormat)) {
            return true;
        } else {
            return false;
        }
    }

    static isPhone(phone) {
        const phoneFormat = /\+972\ \([0-9]{2}\)\ [0-9]{3}-[0-9]{2}-[0-9]{2}/;
        if (phone.match(phoneFormat)) {
            return true;
        } else {
            return false;
        }
    }
}
//стандартная
let validator = new Validator();
console.log(validator.isEmail('olgamalysheva@gmail.com'));
console.log(validator.isDomain('onliner.by'));
console.log(validator.isDate('27.10.1990'));
console.log(validator.isPhone('+972 (58) 720-58-85'));

//статическая
console.log(ValidatorStatic.isEmail('mxm92@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('22.11.2020'));
console.log(ValidatorStatic.isPhone('+972 (58) 690-15-09'));