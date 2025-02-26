import { Value } from 'sass';
import '/src/style.scss'




// @ts-ignore
let rrr

const strictFunction = () => {
    'use strict';
    let rrr
    const nestedFunction = () => {
        // эта функция тоже использует строгий режим
    }
}



//! https://nodejs.org/en - ссылка на скачивание nodeJS

// через пуск зайти в PowerShell (нажимаем правой кнопкой мыши -> запуск от имени администратора)
// Get-ExecutionPolicy
// Set-ExecutionPolicy unrestricted
// подтвердить Y

//! npm create vite


console.log(333 + 123);

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


// let text = document.querySelector('#text')





let hours = 10
let minutes = 15
// let time = 24*60 - hours*60 - minutes
console.log('время до конца дня: ')
console.log((23 - hours) + ' часов' + ' и ' + (60 - minutes) + ' минут');


let memory = 10000
console.log(memory / 820 - (memory % 820) / 820);

console.log(Math.floor(memory / 820));




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
// console.log(true + false);








// тернарный оператор
5 < 1 ? console.log('true') : console.log('false');

let q = 13
q % 2 == 0 ? console.log('число четноё') : console.log('число  НЕ четноё');

// let age2 = 27
// age2<18 ? console.log('вы несовешеннолетний'):console.log('вы взрослый');

// let num = Number(prompt('введите число'))
// if(num>=0){
//     console.log('Число положительное');
// } else if(num<=0){
//     console.log('Число отрицательное');
// } else {
//     console.log('Вы ввели не число');
// }

let v = 100
v > 0 ? console.log(v) : console.log(-v);

if (v > 0) {
    console.log('второй вариант ' + v)
} else {
    console.log('второй вариант ' + -v)
}

let earth = 'Венера' as any
earth == 'Земля' || earth == 'земля' ?
    console.log('привет землянин') :
    console.log('привет инопланетянин');

let dayOfweek = 2 as any

switch (dayOfweek) {
    case 1:
        console.log('понедельник');
        break;
    case 2:
        console.log('вторник');
        break;
    default:
        console.log('Данные неизвестны');
        break;
}

if (dayOfweek == 1) {
    console.log('понедельник');
}
if (dayOfweek == 2) {
    console.log('вторник');
}

let year = 2025
if (year % 400 == 0) {
    console.log('год високосный');
} else if (year % 100 == 0) {
    console.log('год НЕ високосный');
} else if (year % 4 == 0) {
    console.log('год високосный');
} else {
    console.log('год не високосный')
}


let parity = (year % 2 == 0) ? 'Четное' : 'Нечётное';
console.log(parity);

let protocol = 'FTP'
switch (protocol) {
    case 'HTTP':
        console.log('HTTP');
        break;
    case 'HTTPS':
        console.log('HTTPS');
        break;
    case 'FTP':
        console.log('FTP');
        break;

    default:
        console.log('Протокола нет');

        break;
}

let sss = ' '
if (sss = ' ') {
    console.log('sss');

}

let yearss = 5 as number
if (yearss < 12) {
    console.log('Вы ребенок');
} else if (yearss < 18) {
    console.log('Вы несовершеннолетний');
} else if (yearss < 100) {
    console.log('Вы взрослый')
} else {
    console.log('Введите корректную цифру');
}


const answer = 8 as any
switch (answer) {
    case 1:
        console.log('число 1');
        break;
    case 2:
    case 3:
        console.log('число 3 или 2');
        break;
    default:
        console.log(`числа ${answer} нет в диапазоне`);
}



let Infinity
console.log(Infinity);

console.clear()
console.log(212);
let rrr3 = undefined
console.log(rrr3);

let min = 0
let max = 100
for (let i = min; i <= max; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }

}


// возвести число само на себя

function squareOfNumber(number: number) {
    return console.log(`${number} в квадрате = ${number * number}`)
}
squareOfNumber(30)
squareOfNumber(10)
squareOfNumber(40)
squareOfNumber(31)
squareOfNumber(3)




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





let a
console.log(a);

//@ts-ignore
a = ((1 + 2), (3 + 4));
console.log(a);






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




// 'В каком году была опубликована спецификация ECMAScript-2015?'

// let ages = prompt('В каком году была опубликована спецификация ECMAScript-2015?')

// //@ts-ignore
// ages==2015 ? console.log('все правильно'): console.log('ответ неверный');
// ;

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

let x = 3
if (x >= 3 && x <= 10) {
    console.log(x);

}





console.clear()



let oddEvenNumber = 2 as any
switch (oddEvenNumber) {
    case '':
        console.log('Введите данные');
        break
    case 1:
    case 3:
    case 5:
        console.log('число не чётное');
        break
    case 2:
    case 4:
    case 6:
        console.log('число чётное');
        break
    default:
        console.log('число вне диапазона')
}



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









let value1 = 1
let value2 = 0
let value3 = 3

let result = +value1 + +value2 + +value3;
console.log(result);

let result2 = value1 && value2 && value3;
console.log(result2);

//@ts-ignore
console.log(Boolean(0) == 0);
console.log(typeof !!1);
console.log(typeof Boolean(1));
console.log(!!1 == Boolean(1));

console.log(console.log(console.log('123')))

// || - ищет первое истинное значение
// && - ищет первое ложное значение



//! 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 ва
//! рианта ответа. За каждый правильный ответ начисляется 2 
//! балла. После вопросов выведите пользователю количество 
//! набранных баллов.

// let answer1= prompt('Какой формы Земля?') 
// let answer2= Number(prompt('Какой сейчас год?'))
// let answer3= prompt('Как по-английски будет "жёлтый"?')

// let answerSumm = 0
// if (answer1 == 'круглая') {
//     answerSumm+=2
// }
// if (answer2==2025) {
//     answerSumm+=2
// }
// if (answer3=='yellow') {
//     answerSumm+=2
// }
// console.log(answerSumm);


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





// font-size 
function changeRegisterletter(symbol: any) {

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





let capitalsCountries = {
'Минск':'Беларусь',
'Москва':'Россия',
'Киев':'Украина'
}
console.log(capitalsCountries);

for (const key in capitalsCountries) {
    console.log(`${key} - это ${capitalsCountries[key]}`);
}



