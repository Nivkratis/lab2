//Задание 1 Одномерные массивы 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    var max = numbers[0];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (num > max) {
            max = num;
        }
    }
    return max;
}
var floatNumbers = [1.5, 3.2, -4.8, 10.7, 5.5];
var maxNumber = findMaxNumber(floatNumbers);
if (maxNumber !== null) {
    console.log("Максимальное число:" + maxNumber.toString());
}
else {
    console.log("Массив пустой.");
}
//Задание 1 Двумерные массивы
function negaiveNumberOfMatrix(matrix) {
    var isHasHegative = false;
    if (matrix.length == 0) {
        return isHasHegative;
    }
    for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
        var row = matrix_1[_i];
        for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
            var col = row_1[_a];
            if (col < 0 && isHasHegative != true) {
                isHasHegative = true;
            }
        }
    }
    return isHasHegative;
}
var matrix = [
    [1, 2, 3],
    [4, -5, 6],
    [7, 8, 9]
];
var result = negaiveNumberOfMatrix(matrix);
console.log(result);
//Задание 2 Кортеж
var tuple = [1, 2, 3];
console.log("Кортеж:" + tuple.toString());
console.log("Первый элемент " + tuple[0].toString());
//tuple.push(4);
//Задание 3 перечисление 
var BallType;
(function (BallType) {
    BallType["Football"] = "\u0424\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
    BallType["Basketball"] = "\u0411\u0430\u0441\u043A\u0435\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
    BallType["Volleyball"] = "\u0412\u043E\u043B\u0435\u0439\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
    BallType["Tennis"] = "\u0422\u0435\u043D\u043D\u0438\u0441\u043D\u044B\u0439 \u043C\u044F\u0447";
    BallType["Rugby"] = "\u041C\u044F\u0447 \u0434\u043B\u044F \u0440\u0435\u0433\u0431\u0438";
})(BallType || (BallType = {}));
var selectedBall = BallType.Rugby;
console.log("Тип мяча: " + selectedBall);
// Задание 4 Дженерики 
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function printPetInfo(pet) {
    console.log("Информация о питомце:");
    console.log("Имя: " + pet.name);
    console.log("Возраст: " + pet.age);
    console.log("Речь: " + pet.speak());
}
var myCat = new Cat();
var myDog = new Dog();
printPetInfo(myCat);
printPetInfo(myDog);
var myBall = {
    type: BallType.Football,
    brand: "Puma",
    price: 1749,
    material: "Полиуретан",
    weight: 420
};
console.log(JSON.stringify(myBall));
