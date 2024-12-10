//Задание 1 Одномерные массивы 

function findMaxNumber(numbers: number[]): number{
    if (numbers.length === 0) {
        return 0;
    }

    let max: number = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

let floatNumbers:number[] = [1.5, 3.2, -4.8, 10.7, 5.5];
let maxNumber:number = findMaxNumber(floatNumbers);

if (maxNumber !== null) {
    console.log("Максимальное число:" + maxNumber.toString());
} else {
    console.log("Массив пустой.");
}

//Задание 1 Двумерные массивы
function negaiveNumberOfMatrix(matrix: number[][]): boolean {
    let isHasHegative: boolean = false;
    if (matrix.length == 0) {
        return isHasHegative;
    }

    for (const row of matrix) {
        for (const col of row) {
            if (col < 0 && isHasHegative != true) {
                isHasHegative = true;
            }
        }
    }
    return isHasHegative;
}

const matrix = [
    [1, 2, 3],
    [4, -5, 6],
    [7, 8, 9]
];

let result:boolean = negaiveNumberOfMatrix(matrix);
console.log(result);

//Задание 2 Кортеж

const tuple: readonly [number, number, number] = [1, 2, 3];

console.log("Кортеж:" + tuple.toString());
console.log("Первый элемент " + tuple[0].toString())
//tuple.push(4);

//Задание 3 перечисление 
enum BallType {
    Football = "Футбольный мяч",
    Basketball = "Баскетбольный мяч",
    Volleyball = "Волейбольный мяч",
    Tennis = "Теннисный мяч",
    Rugby = "Мяч для регби"
}

let selectedBall: BallType = BallType.Rugby;
console.log("Тип мяча: " + selectedBall);

// Задание 4 Дженерики 
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function printPetInfo<T extends Pet> (pet:T):void{
    console.log("Информация о питомце:");
    console.log("Имя: " + pet.name);
    console.log("Возраст: " + pet.age);
    console.log("Речь: " + pet.speak());
}

let myCat:Cat = new Cat();
let myDog:Dog = new Dog();

printPetInfo(myCat); 
printPetInfo(myDog);

//Задание 5 Собственный тип

type Ball={
    type:BallType;
    brand: string;
    price: number;
    material:string;
    weight:number;
};

let myBall:Ball ={
    type:BallType.Football,
    brand:"Puma",
    price:1749,
    material:"Полиуретан",
    weight: 420
};

console.log(JSON.stringify(myBall));