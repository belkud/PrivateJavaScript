import { Value } from 'sass';
import '/src/style.scss'








let pol = 'vova'

let pol2 = pol.split('').reverse().join('')
console.log(pol2);
if (pol == pol2) {
    console.log(`значение ${pol} -  поллиндром`);
} else {
    console.log(`значение ${pol} -  не поллиндром`);
}




let array = [10, 11, 12, 13, 14, 15]
let array2 = [1, 1, 2, 3, 4, 5]


function summer(p: any) {
    let summ = 0
    for (let i = 0; i < p.length; i++) {
        summ += p[i]
    }
    console.log(summ);
}
summer(array)

summer(array2)


function balance(a: number, b: number) {
    if (a > b) {
        console.log(Math.round(((a / b) - (+a / b)) * b));

    } else {
        console.log('Делитель больше делимого числа');

    }
}

balance(15, 9)




//! мини календари

// 1-ый способ
let todays = new Date()
console.log(todays);

let today = document.querySelector('#today') as any
today.innerHTML == todays.getDay()

switch (todays.getDay()) {
    case 0:
        today.innerHTML = 'Воскресенье'
        break;
    case 1:
        today.innerHTML = 'Понедельник'
        break;
    case 2:
        today.innerHTML = 'Вторник'
        break;
    case 3:
        today.innerHTML = 'Среда'
        break;
    case 4:
        today.innerHTML = 'Четверг'
        break;
    case 5:
        today.innerHTML = 'Пятница'
        break;
    case 6:
        today.innerHTML = 'Суббота'
        break;
    default:
        today.innerHTML = 'Неверный диапазон'
        break;
}

// 2-ой способ
let days = document.querySelector('#days') as any
if (todays.getDay() == 0) {
    days.children[todays.getDay() + 7].classList.add('newClass')
}

days.children[todays.getDay()].classList.add('newClass')

// 3-ий способ
let d = new Date();
let days2 = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
console.log(days2[d.getDay()])

//! мини календари, завершение



console.log(window.screen);
console.log(todays.getDay());

console.log(days.nextElementSibling);
console.log(days.baseURI);

let age = 32
let education = 'higher'
if (age >= 30 && age <= 40 && education == 'higher') {
    console.log('проверка');
}


let y
console.log(y);


console.log(Boolean(1));
console.log(Boolean(0));




function diapazone(firstNum: number, secondNum: number) {
    for (let i = firstNum; i <= secondNum; i++) {
        if (i % 100 == 0) {
            console.log(i);
        }
    }
}

diapazone(0, 10)
diapazone(0, 1000)


console.log('===========');




// Вывести все числа от 1 до 100, которые кратные указанному 
// пользователем числу.
function multipleNumber(multNum: number) {
    for (let i = 1; i < 100; i++) {
        if (i % multNum == 0) {
            console.log(i);

        }
    }
}

// multipleNumber(3)


//  4. Вывести каждый 4-й элемент из указанного пользователем 
// диапазона. Пользователь указывает минимальное и мак
// симальное значения диапазона. 

function multipleNumber4(minNum: number, maxNum: number) {
    for (let i = minNum; i < maxNum; i++) {
        if (i % 4 == 0) {
            console.log(i);
        }
    }
}
multipleNumber4(80, 100)




// 5. Запросить число и проверить, простое ли оно. Простое 
// число делится без остатка только на себя и на единицу.

let simpleNumber = 1225
for (let i = 2; i < simpleNumber; i++) {
    if (simpleNumber % i == 0) {
        console.log(i);
        console.log('Число ' + simpleNumber + ' НЕ простое');
        break;
    } else {
        console.log('Число ' + simpleNumber + ' простое');
        break;
    }
}

// Вывести # столько раз, сколько указал пользователь.
let lattice = 25
let mass = []
let acc = 0

for (let i = 1; i <= lattice; i++) {
    mass.push('#')
    acc++
}
mass.push(acc + ' повторений #')

console.log(mass);





let numStr = 123
console.log(typeof numStr.toFixed().split(''));

let numStr2 = '123'
console.log(numStr2.length);

console.log(typeof Number(numStr2));

let numStr3 = '123' as any
console.log(typeof (numStr3 * 1));

console.log(undefined == null);
console.log(null == 0);
console.log(undefined == 0);



// холодно тепло жарко горячо
let temperature = 198
let infoOfTemperature =
    temperature < 15 ? 'холодно' :
        temperature < 30 ? 'тепло' :
            temperature < 45 ? 'жарко' :
                temperature < 100 ? 'горячо' : 'диапазон температуры неверный';
console.log(infoOfTemperature);



let login = 'Директор'
let message = (login == 'Сотрудник') ? 'привет' :
    (login == 'Директор') ? 'здравствуйте' :
        (login == '') ? 'нет логина' : ''
console.log(message);



// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }




let years = 10
if (years < 5) {
    console.log('ребенок');
} else if (years < 18) {
    console.log('подросток');
} else if (years < 100) {
    console.log('взрослый');
} else {
    console.log('введите корректные данные');
}


let checkDays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"] as any
console.log(checkDays);

let newNewdaya = document.querySelector('#newNewdaya') as HTMLDivElement
newNewdaya.style.color = 'red'

for (let i = 0; i < checkDays.length; i++) {
    newNewdaya.innerHTML += checkDays[i] + '\n'
    console.log(checkDays[i])

}

let a1 = ''
let a2 = 'Значение'


a1 = a1 == '' ? a2 : a1
console.log(a1);


// || - ищет первое истинное значение
// && - ищет первое ложное значение




let quantaty = 5
if (quantaty < 10 && quantaty > 100) {
    console.log(quantaty); //выражение никогда не сработает
}

if (quantaty < 10 || quantaty > 100) {
    console.log(`quantaty = ${quantaty}`);
}






let k = 5
let factorial = 1
while (k > 1) {
    factorial = k * factorial
    k--
    console.log(factorial);

}




//!!!!!!!!!!!!!!!!! JS_DZ_Modul_1_Week_3_!!!!!!!!!!!!!!!!!!!!!!

//! 1. Подсчитать сумму всех чисел в заданном пользователем 
//! диапазоне. 

let minNum = 3
let maxNum = 7
let ctt = 0


for (let i = minNum; i <= maxNum; i++) {
    ctt += i
    // console.log(ctt, 'i = ' + i);
}
console.log(ctt);


//! 2. Запросить 2 числа и найти только наибольший общий 
//! делитель.

let num1 = 20
let num2 = 15

let numMass = [] as any
for (let i = 0; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
        numMass.push(i)
    }
}
console.log(numMass.pop());


//! 3. Запросить у пользователя число и вывести все делители 
//! этого числа.

let userNum = 10
for (let i = 0; i <= userNum; i++) {
    if (userNum % i == 0)
        console.log(i);
}

//! 4. Определить количество цифр в введенном числе.
let x_num = '12345'
console.log(x_num.length);

let x_num2 = String(123456).length
console.log(x_num2);

let x_num3 = '12345777'
let count3 = 0
for (let i = 1; i <= x_num3.length; i++) {
    count3++
}
console.log(`число состоит из: ${count3} цифр`);

//! 5. Запросить у пользователя 10 чисел и подсчитать, сколько 
//! он ввел положительных, отрицательных и нулей. При этом 
//! также посчитать, сколько четных и нечетных. Вывести 
//! статистику на экран. Учтите, что достаточно одной пере
//! менной (не 10) для ввода чисел пользователем.

// let negative = 0;
// let positive = 0;
// let even = 0;
// let odd = 0;
// let zero = 0;

// for (let i = 1; i <= 10; i++) {
//   const num = Number(prompt("Введите число"));
//   if (num > 0) {
//     positive++;
//   }
//   if (num < 0) {
//     negative++;
//   }
//   if (num == 0) {
//     zero++;
//   }
//   if (num % 2 == 1) {
//     odd++;
//   }
//   if (num % 2 == 0) {
//     even++;
//   }
// }
// alert(` Из введённых цифр — положительных: ${positive}, отрицательных: ${negative}, нулей: ${zero}, четных: ${even}, нечетных: ${odd}.`)



//! 6. Зациклить калькулятор. Запросить у пользователя 2 числа 
//! и знак, решить пример, вывести результат и спросить, хо
//! чет ли он решить еще один пример. И так до тех пор, пока 
//! пользователь не откажется.

// do {
//     var ab = +prompt('Введите первое число');
//     var bb = +prompt('Введите второе число');
//     var ib = prompt('Выберите знак - + / *');

//     switch (ib) {
//         case '+':
//             alert(ab + bb);
//             break;
//         case '-':
//             alert(ab - bb);
//             break;
//         case '/':
//             alert(ab / bb);
//             break;
//         case '*':
//             alert(ab * bb);
//         default:
//             break;
//     }

// } while (confirm('Хотите ли вы решить еще один пример?'));




//! 7. Запросить у пользователя число и на сколько цифр его 
//! сдвинуть. Сдвинуть цифры числа и вывести результат (если 
//! число 123456 сдвинуть на 2 цифры, то получится 345612).

let newNum = '123456'
let shiftNum = 2
let num = newNum.slice(0, shiftNum)
let num3 = newNum.slice(shiftNum, 6)
console.log(num3 + num);












//! цикл с предусловием
// let i = 0
// while (i<5) {
//     i++
//     console.log(i);
// }

// console.log('================');


//! цикл с постусловием (выполнится хотя бы 1 раз)
// i=0

// do{
//     i++
//     console.log(i);
// }
// while (i<-5)


let messages = 'Hello1'
console.log(messages);



for (let i = 0; i < 10; i++) {
    if (i % 2 != 0) break
    console.log(i);

}


let tetsI = 1
do {
    tetsI++
    console.log(tetsI);

} while (tetsI < 5);








const res2 = 100
console.log(res2);

function testFunc(name: string, surname = 'Ivanov') {
    console.log(`hello friend ${name} ${surname}`);

}
testFunc('Ivan')
testFunc('Petya', 'Petrov')

function nothing(a: any, b: any) {
    return a + b
}
if (nothing() == undefined) {
    console.log('функции underfined!');
}
console.log(typeof nothing(3, 5))



// проверка простое ли число!!!!!!!!!!!!
let simpleNum = 19
let checkSimpleNum = 0
for (let i = 1; i <= simpleNum; i++) {
    if (simpleNum % i == 0) {
        checkSimpleNum++
    }
}
console.log(checkSimpleNum > 2 ? 'число составное' : 'число простое')


function summArguments() {
    let summ = 0
    for (let i = 0; i < arguments.length; i++) {
        summ += arguments[i]
    }
    return summ
}
console.log(summArguments(1, 3, 8, 4))




let divideNum = 20
for (let i = 1; i < divideNum; i++) {
    divideNum / i
    console.log(divideNum)


}

function checkUser(name: string) {
    if (!name) return ('Вы не ввели имя')
    if (typeof name != 'string') return ('Введите цифры')
    return `Привет ${name}`
}

console.log(checkUser('Vasya'));




//! <================= JS_PZ_Modul_1_Week_4=============>

//! 1. Написать функцию, которая принимает 2 числа и возвра
//! щает меньшее из них.

function compareNumbers(a: number, b: number) {
    return a > b ? a : b
}


//! 2. Написать функцию, которая возводит переданное число 
//! в указанную степень.

function multipleNumOnNum2(num: number, num2: number) {
    return num ** num2
}


//! 3. Написать функцию, которая принимает 2 числа и знак  
//! (+ - * /), считает пример и возвращает результат.

function calculator(num1: number, operator: any, num2: number) {
    switch (operator) {
        case '+':
            console.log(num1 + num2);
            break
        case '-':
            console.log(num1 - num2);
            break
        case '*':
            console.log(num1 * num2);
            break
        case '/':
            console.log(num1 / num2);
            break
    }
}


//! 4. Написать функцию, которая проверяет, является ли пере
//! данное ей число простым.

function simpleNums(num: number) {
    let count = 0
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            count++
        }
    }
    return count > 0 ? console.log('Число сложное') : console.log('Число простое');
}



//! 6. Написать функцию, которая реализует работу оператора %. 
//! Функция принимает 2 параметра и возвращает остаток от 
//! деления первого параметра на второй. В функции исполь
//! зовать только + - * /, оператор % не использовать. 

function remainder(num1: number, num2: number) {
    let quantaty = Math.floor(num1 / num2)
    return num1 - num2 * quantaty
}


//! 7. Написать функцию, которая принимает от 1 до 5 чисел и 
//! возвращает их сумму.

function sumNumbers(num1: number,
    num2: number,
    num3: number,
    num4: number,
    num5: number,) {
    return num1 + num2 + num3 + num4 + num5
}


//! 8. Написать функцию, которая принимает от 1 до 5 чисел и 
//! возвращает большее из них.

function biggestNumber(num1: number,
    num2: number,
    num3: number,
    num4: number,
    num5: number,) {
    return Math.max(num1, num2, num3, num4, num5)

}
console.log(biggestNumber(5, 3, 10, 16, 4));



//! 9. Написать функцию, которая выводит все четные или не
//! четные числа, в указанном пользователем диапазоне. Какие 
//! числа выводить, определяется третьим параметром типа 
//! bool (true – четные, false – нечетные).

function evenOddNumber(minNum: number, maxNum: number, bool: boolean) {
    let mass = [] as any
    for (let i = minNum; i < maxNum; i++) {
        if (i % 2 == 0 && bool == true) {
            mass.push(i)
        }

        if (i % 2 == 1 && bool == false) {
            mass.push(i)
        }

    }
    return console.log(mass);
}

evenOddNumber(3, 15, false)
evenOddNumber(10, 20, false)


const summAB = (a: number, b: number) => {
    return a + b
}
console.log(summAB(4, 8));


// умножить числа от 0 до 5

function rec(num: number, pow: number): any {
    if (pow == 1) {
        return num
    } else {
        return num * rec(num, (pow - 1))
    }

}

console.log(rec(3, 3));






function recursion(num: number, pow: number): any {
    return pow == 1 ? num : num * recursion(num, (pow - 1))
}

console.log(recursion(4, 4));








console.clear()



//! <=============JS_PZ_Modul_1_Week_5==================>


//! 1. Написать функцию, которая вычисляет факториал задан
//! ного числа.    

function factorialNum(x: number): any {
    if (x == 1) {
        return x
    } else {
        return x * factorialNum(x - 1)
    }
}
console.log(factorialNum(5));



//! 2. Написать функцию, которая выводит все числа из заданного 
//! пользователем диапазона в прямом порядке. И еще одну 
//! функцию – для вывода в обратном порядке.


function numberOfDiapazone(minNum: number, maxNum: number): any {
    if (minNum == maxNum) {
        return ''
    } else {
        return (minNum) + '' + numberOfDiapazone(minNum + 1, maxNum)
    }
}
console.log(numberOfDiapazone(5, 10));


function showReverseNumber(minNum: number, maxNum: number): any {
    if (minNum == maxNum) {
        return ''
    } else {
        return (maxNum - 1) + '' + showReverseNumber(minNum, maxNum - 1)
    }
}



console.log(showReverseNumber(5, 10))




//! 3. Написать функцию, которая выводит переданное ей число 
//! задом наперед. 
//! Например: число 1234 вывести как 4321.

function getReverseNum(num: number): number {
    if (num < 10) {
        return num
    } else {
        return +(num % 10 + '' + getReverseNum(Math.floor(num / 10)))
    }
}
console.log(getReverseNum(123));



//! 4. Написать функцию, которая считает сумму цифр числа.
//!  Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.

//? 1-й способ. Через рекурсию
// function getSUmmDigitsNum(num:number):number {
//     if(num<10) {
//         return num
//     } else {
//         return +(num % 10 + getSUmmDigitsNum(Math.floor(num/10)))
//     }
// }
// console.log(getSUmmDigitsNum(523));


//? 2-й способ. Через цикл
// function funcSumm (num:number) {
//     let arrayNum = num.toString().split('')
//     let accum = 0 as number
//     for (let i = 0; i < arrayNum.length; i++) {
//         accum+= +arrayNum[i]

//     }
//     return accum

// }
// console.log(funcSumm(523));


//! 5. Написать функцию, которая принимает число и выводит 
//! соответствующее количество вложенных пар круглых скобок. 
//! Например: число 4 – (((()))).
function pairBrackets(num: number): any {
    if (!num) {
        return ''
    } else {
        return '(' + pairBrackets(num - 1) + ')'
    }
}
console.log(pairBrackets(3));






















//! <=============JS_DZ_Modul_1_Week_5==================>

// * Во всех заданиях обязательно использовать рекурсию.

//!  1. Написать функцию возведения числа в степень.

function numberInPow(x: number, y: number): any {
    if (y == 1) {
        return x
    } else {
        return x * (numberInPow(x, y - 1))
    }
}
console.log(numberInPow(5, 3));





//! 2. Написать функцию поиска наибольшего общего делителя.


function recursiveFactor(n: number, d: number): any {
    if (n < 1) return
    if (n == 1) return;
    if (n == 2) return [1, 2];
    if (n / d < 2) return [n];
    if (n % d == 0) return [d, ...recursiveFactor(n, d + 1)];
    return recursiveFactor(n, d + 1);
}
console.log(recursiveFactor(10, 6));



// Рекурсивная функция нахождения наибольшего общего делителя.
// function fun(a:any, b:any){
//     a > b || ([a, b] = [b, a]);
//     let length = b/2,i=2,k=1;
//    return (function f()
//  {
//    if(i===length) return k;
//        if(!(b % i) && !(a % i) ) {
//        b /= i;
//        a /= i;
//        k *= i;
//          return f()
//        }
//        else {
//          ++i;
//          return f()
//        }
//    })();
//  }
//  console.log(fun(50, 100));



// ?????????????????
// function divider (x:number):any {
//     if (x==1) {
//         return x
//     } 
//         return x + '' + (divider(x-1))            
//     }

// console.log(divider(15));


//! 3. Написать функцию для поиска максимальной цифры в числе.

function maxNumber(num: number): any {
    if (num < 10) {
        return num
    } else {
        // let arr = num.toString().split('')
        // return Math.max(...arr)
        // return num.toString().length
        return (num + '' + maxNumber(num - 1))
    }
}
console.log(maxNumber(15));



// function maxN(num:number) {
//     let n = (num.toString().split('')) as any
//     return Math.max(...n)

// }

// console.log(maxN(213))
// console.log(maxN(343))
// console.log(maxN(563))
// console.log(maxN(21))



// 6. Написать функцию, которая возвращает число Фибоначчи 
// по переданному порядковому номеру. 
// Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на 
// том, что каждое число равно сумме двух предыдущих чисел. 
// Например: порядковый номер 3 – число 2, порядковый 
// номер 6 – число 8.

// function fibo(n:number):number {
//     if (n == 1 || n == 2) return 1;
//         else 
//     return fibo(n-2) + fibo(n-1);
//   }
// console.log(fibo(12));
























//! 3. Запросить число и степень. Возвести число в указанную 
//! степень и вывести результат.
// ????????????????????????
// let yourNum = 8
// let degree = 2
// while (yourNum > 7) {
//     console.log(yourNum ** degree)
//     yourNum--
// }

// console.log((5**3));






// jj++
// console.log(jj);

// jj++
// console.log(jj);

// jj++
// console.log(jj);

// jj++ 
// console.log(jj);



// let jj = 0
// console.log(jj);

// jj++
// console.log(jj);

// jj--
// console.log(jj);

// console.log(jj++); возвращает старое значение (которое было до увеличения)
// console.log(++jj); возвращает новое значение






// while (jj<5) {
//     jj++
//     console.log(jj);

// }
// let x = 29
// console.log(x%10 + Math.floor(x/10));

// (x % 10 + getSUmmDigitsNum(Math.floor(num/10)))



// 5. Написать функцию, которая принимает число и выводит 
// соответствующее количество вложенных пар круглых скобок. 
// Например: число 4 – (((()))).













function cells(x: number): any {
    if (x == 1) {
        return 1
    } else {
        return x + cells(x - 1)
    }
}

console.log(cells(8));




function evenOddnum2(x: number): any {
    if (x == 0) {
        return true
    }
    if (x == 1) {
        return false
    } else {
        return x = evenOddnum2(x - 2)
    }
}
console.log(evenOddnum2(16));


//! Наибольший общий делитель через рекурсию
// Function to calculate the greatest common divisor (GCD) 
// of two numbers using Euclidean algorithm.
let gcd = function (a: number, b: number): any {
    // Base case: if b is 0, then GCD is a.
    if (!b) {
        return a;
    }
    // Recursive case: calculate GCD using the remainder 
    // (a % b).
    console.log('a= ' + a, 'b= ' + b, a % b);

    return gcd(b, a % b);
};

// Example usage: Calculate and print the GCD of 2154 and 458.
console.log(gcd(25, 40));


let a = 25
let b = 40
console.log(a % b);






//!!!!!!!!! объекты



const object: any = {
    a: 10,
    b: 3,
    c: 8,
    3: 'ccc',
    obj: {
        z: '555'
    },
    'two words': 'имя/фамилия'
}

for (const key in object) {
    console.log(object[key]); //! показывает значения
    // console.log(key); //! показывает ключи
}


//! как выводить данные
console.log(object.obj['z']);// обращаем внимание что 'z' строка
console.log(object.a) // вывод ключа string
console.log(object['a']) // вывод ключа string

console.log(object[3]) // только так выводится number
console.log(object['two words']);

//! как добавить данные
object.names = 'namesss'


//! как удалить данные
delete object.a
delete object['two words']


const object2 = object
console.log(object2);

console.log(object['c'] = 100); //ключ перезапишется (ссылается на одну ячейку)
console.log(object2);
console.log(object == object2);

let x = 1
console.log(x);

let z = x
console.log(z);

x = 5
console.log(x);
console.log(z); // переменная 'z' не перезапишется (разные ячейки памяти)

console.log(typeof object)

let stringi = JSON.stringify(object) //  в строку

//! JSON.stringify() - Это позволяет упростить и повысить 
//! эффективность такие задачи, как хранение данных в 
//! локальном хранилище, отправка данных в HTTP - запросах 
//! или парсинг данных из ответов сервера.

console.log(stringi);
console.log(typeof stringi);

console.log(JSON.parse(stringi)); // обратно в объект

// JSON.parse()
// Этот метод особенно полезен, когда необходимо обработать
// данные, полученные от сервера в формате JSON.


const object3 = {...object} //клонировали объект (у него другой 'адрес хранения')

object.b = 'changeB'

console.log(object);
console.log(object3)// свойство в третьем объекте теперь не меняются;













//!!!!!!!!!!!!!!!!! JS_PZ_Modul_1_Week_3_!!!!!!!!!!!!!!!!!!!!!!

//! Задания, в которых необходимо использовать WHILE.
//!  1. Вывести # столько раз, сколько указал пользователь.

let enterNum = 5
let loc = ''
while (enterNum > 0) {
    enterNum--
    loc += '#'
}
console.log(loc);


//! 2. Пользователь ввел число, а на экран вывелись все числа 
//! от введенного до 0.


let numUser = 5
let strWithNum = ''
while (numUser > 0) {
    strWithNum += numUser + " "
    numUser--
}
console.log(strWithNum);


//! 3. Запросить число и степень. Возвести число в указанную 
//! степень и вывести результат.

// let yourNum = 8
// let degree = 2
// while (yourNum > 7) {
//     console.log(yourNum ** degree)
//     yourNum--
// }

// console.log('----------');


//! 4. Запросить 2 числа и найти все общие делители.

// let firstN = 30
// let secondN = 20
// let i = firstN

// while (i > 0) {
//     i--
//     if (firstN % i == 0 && secondN % i == 0) {
//         console.log(i);
//         break
//     }        
// }

//! 5. Посчитать факториал введенного пользователем числа.

// let fact = 5
// let mult = 1
// while(fact>0) {
//     mult*=fact
//     fact--
// }
// console.log(mult);



//! 1. Предлагать пользователю решить пример 2 + 2 * 2 до тех 
//! пор, пока он не решит его правильно.


// do {
//     let ab = +prompt('чему будет равно 2*2+2 ?');
//         if (ab==6) {
//             alert('ответ верный');
//             break
//         }


// } while (confirm('Ответ неверный, хотите ли вы решить раз?'));



//! 2. Делить число 1000 на 2

// let res = 1000
// let itter = 0
// for (let i = 0; res > 50; i++) {
//     res /= 2
//     console.log(res);
    // itter++
// }
// console.log(`количество иттераций = ${itter}`);
// console.log(res);


let xx = 0

do { // выполнится хоть один раз даже если условие неверно
    console.log(xx);
    xx++
} while (xx<5) 


    
let yy = 0

while (yy<5) { // условие неверное - не выполнится
    console.log(yy);
    yy++
}

console.log('=========');





// let i = 0            // не рекомендовано
// for (; i <= 10;) {
//     console.log(i);
//     i++
        
// }


