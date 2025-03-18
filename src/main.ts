import { Value } from 'sass';
import '/src/style.scss'








// let pol = 'vova'

// let pol2 = pol.split('').reverse().join('')
// console.log(pol2);
// if (pol == pol2) {
//     console.log(`значение ${pol} -  поллиндром`);
// } else {
//     console.log(`значение ${pol} -  не поллиндром`);
// }







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



// console.log(window.screen);
// console.log(todays.getDay());

// console.log(days.nextElementSibling);
// console.log(days.baseURI);

// let age = 32
// let education = 'higher'
// if (age >= 30 && age <= 40 && education == 'higher') {
//     console.log('проверка');
// }


// let y
// console.log(y);


// console.log(Boolean(1));
// console.log(Boolean(0));

 


  


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





// холодно тепло жарко горячо
// let temperature = 198
// let infoOfTemperature =
//     temperature < 15 ? 'холодно' :
//         temperature < 30 ? 'тепло' :
//             temperature < 45 ? 'жарко' :
//                 temperature < 100 ? 'горячо' : 'диапазон температуры неверный';
// console.log(infoOfTemperature);





let checkDays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"] as any
console.log(checkDays);

let newNewdaya = document.querySelector('#newNewdaya') as HTMLDivElement
newNewdaya.style.color = 'red'

for (let i = 0; i < checkDays.length; i++) {
    newNewdaya.innerHTML += checkDays[i] + '\n'
    console.log(checkDays[i])

}

// let a1 = ''
// let a2 = 'Значение'


// a1 = a1 == '' ? a2 : a1
// console.log(a1);


// || - ищет первое истинное значение
// && - ищет первое ложное значение




// let quantaty = 5
// if (quantaty < 10 && quantaty > 100) {
//     console.log(quantaty); //выражение никогда не сработает
// }

// if (quantaty < 10 || quantaty > 100) {
//     console.log(`quantaty = ${quantaty}`);
// }






// let k = 5
// let factorial = 1
// while (k > 1) {
//     factorial = k * factorial
//     k--
//     console.log(factorial);

// }















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






// for (let i = 0; i < 10; i++) {
//     if (i % 2 != 0) break
//     console.log(i);

// }


// let tetsI = 1
// do {
//     tetsI++
//     console.log(tetsI);

// } while (tetsI < 5);










// проверка простое ли число!!!!!!!!!!!!
// let simpleNum = 19
// let checkSimpleNum = 0
// for (let i = 1; i <= simpleNum; i++) {
//     if (simpleNum % i == 0) {
//         checkSimpleNum++
//     }
// }
// console.log(checkSimpleNum > 2 ? 'число составное' : 'число простое')


// function summArguments() {
//     let summ = 0
//     for (let i = 0; i < arguments.length; i++) {
//         summ += arguments[i]
//     }
//     return summ
// }
// console.log(summArguments(1, 3, 8, 4))




// let divideNum = 20
// for (let i = 1; i < divideNum; i++) {
//     divideNum / i
//     console.log(divideNum)


// }

// function checkUser(name: string) {
//     if (!name) return ('Вы не ввели имя')
//     if (typeof name != 'string') return ('Введите цифры')
//     return `Привет ${name}`
// }

// console.log(checkUser('Vasya'));





// const summAB = (a: number, b: number) => {
//     return a + b
// }
// console.log(summAB(4, 8));


// умножить числа от 0 до 5

// function rec(num: number, pow: number): any {
//     if (pow == 1) {
//         return num
//     } else {
//         return num * rec(num, (pow - 1))
//     }

// }

// console.log(rec(3, 3));






function recursion(num: number, pow: number): any {
    return pow == 1 ? num : num * recursion(num, (pow - 1))
}

console.log(recursion(4, 4));








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


// ?function recursiveFactor(n: number, d: number): any {
// ?    if (n < 1) return
// ?    if (n == 1) return;
// ?    if (n == 2) return [1, 2];
// ?    if (n / d < 2) return [n];
// ?    if (n % d == 0) return [d, ...recursiveFactor(n, d + 1)];
// ?    return recursiveFactor(n, d + 1);
// ?}
// ?console.log(recursiveFactor(10, 6));



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

// let x = 1
// console.log(x);

// let z = x
// console.log(z);

// x = 5
// console.log(x);
// console.log(z); // переменная 'z' не перезапишется (разные ячейки памяти)

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

let res = 1000
let itter = 0
for (let i = 0; res > 50; i++) {
    res /= 2
    console.log(res);
    itter++
}
console.log(`количество иттераций = ${itter}`);
console.log(res);












// Дан объект obj с ключами Коля, Вася, Петя с элементами '200', 
// '300', '400'. С помощью цикла for-in выведите на экран 
// строки такого формата: 'Коля - зарплата 200 долларов.'. 

let obj = {
    'Коля':200,
    'Вася':300,
    'Петя':400
} as any

for (const key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}


//? Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла 
//? for и оператора if выведите на экран столбец тех элементов 
//? массива, которые больше 3-х, но меньше 10. 

// let arr = [2, 5, 9, 15, 0, 4]
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>3 && arr[i]<10) {
//         console.log(arr[i]);
//     }   
// }

//? Дан массив с числами. Числа могут быть положительными и отрицательными. 
//? Найдите сумму положительных элементов массива. 

let arr2 = [2, -5, 9, -15, 0, 4]
let summPositiveElement = 0
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i]>0) {
        summPositiveElement+=arr2[i]
    }
}
console.log(summPositiveElement);

console.log('===========');


//? Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью 
//? цикла for и оператора if проверьте есть ли в массиве элемент 
//? со значением, равным 4. Если есть - выведите на экран 'Есть!' 
//? и выйдите из цикла. Если нет - ничего делать не надо.

let arr3 = [1, 2, 5, 9, 4, 13, 4, 10]
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i]==4) {
        console.log('Есть!');
        break
    }        
}

//! Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. 
//! Выведите на экран только те числа из массива, которые начинаются 
//! на цифру 1, 2 или 5. 

let arr4 = [10, 20, 30, 50, 235, 3000]

for (let i = 0; i < arr4.length; i++) {
    let firstDigital = arr4[i].toString().slice(0,1) as any
    if (firstDigital==1 || firstDigital==2 || firstDigital==5) {
        console.log(arr4[i]);
    }        
}
console.log('--------');

//! Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью 
//! цикла for создайте строку ' 1-2-3-4-5-6-7-8-9-'. 

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9] // первый способ
console.log(arr5.toString().split(',').join('-') + '-');
 
let str = ''  // второй способ
for (let i = 0; i < arr5.length; i++) {
    str+=arr5[i] + '-'
}
console.log(str.slice (0,length-1));//убрать последний дефис :D
console.log(arr5.length);


//! Составьте массив дней недели. С помощью цикла for выведите все дни 
//! недели, а выходные дни выведите жирным. 

let dayApp = document.querySelector('#app') as HTMLDivElement
let daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"] as any;

for (let i = 0; i < daysOfWeek.length-1; i++) {
    if(i < daysOfWeek.length -2) {
        dayApp.innerHTML+= daysOfWeek[i] + '<br>'
    } else {
        dayApp.innerHTML += daysOfWeek[5].bold() + '<br>'
        dayApp.innerHTML += daysOfWeek[6].bold() + '<br>' + '<br>'
    }
     
    // else { //  покраска шрифта   
    //     let span = document.createElement("span");
    //     dayApp.append(span);
    //     span.innerText += 'Воскресенье';
    //     span.style.color = "red";

    // }
}
    
// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет 
// меньше 50. Какое число получится? Посчитайте количество итераций, необходимых 
// для этого (итерация - это проход цикла), и запишите его в переменную num. 
let n = 1000
let iter = 0
while (n>50) {
    iter++
    n/=2
    console.log(n);
    
}
console.log(iter);




console.log('======');


let arr6 = [2, -5, 9, -15, -10, 4]
let mass6 = []
for (let i = 0; i < arr6.length; i++) {
    let x = Math.abs(arr6[i])
    if (arr6[i]<0) {
        mass6.push(x)
    }
}

for (let i = 0; i < mass6.length; i++) {
    if (mass6[i]%2==1) {
        console.log(mass6[i]);
        
    }
    
    
}
    
    // && arr6[i]%2==0
    // console.log(Math.abs(arr6[i]));
    // console.log(x)
    











//! 3. Написать функцию для поиска максимальной цифры в числе.

// let maxN = '45834693'
// let mass2 = maxN.split('')
// let accum2 = 0
// let uu = -100
// for (let i = 0; i < maxN.length; i++) {
//     if (mass2[i]>uu) {
//         uu = mass2[i] 
//         console.log(uu);
//     }
// }
        // function maxNumber(params:type) {
            
        // }



//! 5. Написать функцию для вывода всех множителей передан
//! ного числа в возрастающем порядке. 
//! Например: число 18 – множители 2 * 3 * 3.

// ????????????????????????

// function everyMult(params:type) {
    
// }

let multies = 18
let dividers = 1
for (let i = 2; i < multies; i++) {
    if (multies%i==0) {
        console.log(i);
            
    }

console.clear()

    // dividers==multies/i
    // console.log(dividers);
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


// 10???????????????????????????????? похожее условие
//! 2. Делить число 1000 на 2

// let res = 1000
// let itter = 0
// for (let i = 0; res > 50; i++) {
    //     res /= 2
    //     console.log(res);
    //     itter++
    // }
    // console.log(`количество иттераций = ${itter}`);
    // console.log(res);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // !!!!!!!!!!Задание для самостоятельной работы
    
    
    
    //! 4. Напишите скрипт, который принимает от пользователя 
    //! величину годовой депозитной ставки (в процентах) 
    //! и выводит количество лет, по прошествии которых 
    //! вклад увеличится вдвое.
    
    // let money = 1000
    // let doubleMoney = 2*money
    // let deposit = 0.1
    // let year = 0
    // for (let i = 0; i < Infinity; i++) {
    //     money += money * deposit
    //     if (money <= doubleMoney) {
    //         year++
    //     }
    //     break
    // }    
    
    // console.log(year+1);
    
    //? money * 8% = 10.8
    //? money * 8% = 11,66
    //? money * 8% = 
    
    
    
//! 5. Напишите скрипт, который выводит ровно 10 слу
//! чайных чисел из диапазона 1–20, кроме тех, которые 
//! делятся на 4.
let nums = []
let accN = 0
for (let i = 1; i <= 20; i++) {
    let n = Math.round(Math.random()*20)
    if (n%4!=0) {
        accN++
        nums.push(n)
    }
    if (accN==10) {
        break
    }
}
console.log(nums);


//! 6. Из-за утечки из бака охлаждения ежедневно вытекает 
//! 10% налитой воды. При объеме воды менее 10 литров 
//! возникает аварийная ситуация. Составьте программу, 
//! которая запрашивает у пользователя первоначальный 
//! объем воды и рассчитывает, на сколько дней работы 
//! этого хватит.

let capacity = 30   // литров
let capacityStart = capacity
let waterLeak = 10   // процентов
let daysOfwork = 0

for (let i = 0; i < capacity; i++) {
    daysOfwork++
    capacity-= capacity*waterLeak/100
    if (capacity<10) break
    // console.log(capacity);
}
console.log(`${capacityStart} литров хватит на ${daysOfwork} дней работы`);







//!!!!!!!!!!!!!!!! ТЕОРИЯ ФУНКЦИИ!!!!!!!!!!!!!

sayHi(4,8)

// функция может быть объявлена в любом месте
function sayHi (a:number, b:number) {
    return console.log(a +b);
    
}
sayHi(3,5)


// добавление переменной
function named() {
    let nam = 'Vasya'
    return console.log(`${nam}`);
    
}
named()

//переприсваивание
function summN(a:number, b = 10):any {
    return a+b
}
console.log(summN(5));




// проверка пользователя
function userNew (name:string) {
    if(name==undefined || name=='') {
        return console.log('введите имя');
    } else {
        return console.log(name);       
    }
}

userNew('')







//!!!!!!!!!!!!!!!!!DZ_Modul_2_Week_1!!!!!!!!!!!!!!!!!!!!!

//! 1. Создать объект, описывающий автомобиль (производитель, модель, 
//! год выпуска, средняя скорость), и следующие функции для работы 
//! с этим объектом.
//!  1. Функция для вывода на экран информации об автомобиле.
//!  2. Функция для подсчета необходимого времени для преодоления переданного 
//!  расстояния со средней скоростью. 
//! Учтите, что через каждые 4 часа дороги водителю необхо
//! димо делать перерыв на 1 час.

let car = {
    manufacture: 'Kia',
    model: 'Rio',
    year: 2013,
    averageSpeed: 100,
}


//?  1. Функция для вывода на экран информации об автомобиле.
function showInfoCar (car:any) {
    return car
}
console.log(showInfoCar(car));


//?  2. Функция для подсчета необходимого времени для преодоления переданного 
//?  расстояния со средней скоростью. 
//? Учтите, что через каждые 4 часа дороги водителю необхо
//? димо делать перерыв на 1 час.


function showTimeOfTravaling (distance:number) {
    let timeN = distance/car.averageSpeed
        return timeN + Math.floor(timeN/4) + ' часов'
}
console.log(showTimeOfTravaling(1000))


// 100 км  1 ч
// 200 км  2 ч
// 300 км  3 ч
// 400 км  5 ч
// 500 км  6 ч
// 600 км  7 ч
// 700 км  8 ч
// 800 км  10 ч
// 900 км  11 ч
// 1000 км  12 ч




//! 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
//! и следующие функции для работы с этим объектом.
//! 1. Функция сложения 2-х объектов-дробей.
//! 2. Функция вычитания 2-х объектов-дробей.
//! 3. Функция умножения 2-х объектов-дробей.
//! 4. Функция деления 2-х объектов-дробей.
//! 5. Функция сокращения объекта-дроби.



//? Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
//? и следующие функции для работы с этим 

const fract1 ={
    numerator: 6,       
    denumerator: 2,     
}

const fract2 ={
    numerator: 5,       
    denumerator: 3,    
} 





//? 0. Приведение к общему знаменателю !!!!!!!!!!!!!!!!!
function сommonDenominator (fract1:any,fract2:any) {
    return {
        fr1: {
          numerator: fract1.numerator*fract2.denumerator,
          denumerator: fract1.denumerator*fract2.denumerator
        },
        fr2: {
          numerator: fract2.numerator * fract1.denumerator,
          denumerator: fract2.denumerator*fract1.denumerator
        }
      }
}
console.log(сommonDenominator(fract1, fract2));



//?  1. Функция сложения 2-х объектов-дробей.
function summFract (fract1:any, fract2:any){
    let result = сommonDenominator(fract1, fract2)
    return {
        numerator: result.fr1.numerator + result.fr2.numerator,
        denumerator: result.fr2.denumerator
    }
}
console.log(summFract(fract1, fract2));


//?  2. Функция вычитания 2-х объектов-дробей.
function minusFract (fract1:any, fract2:any){
    let result = сommonDenominator(fract1, fract2)
    return {
        numerator: result.fr1.numerator - result.fr2.numerator,
        denumerator: result.fr2.denumerator
    }
}
console.log(minusFract(fract1, fract2));


//?  3. Функция умножения 2-х объектов-дробей.
function getMultyFract (fract1:any, fract2:any){
    return {
        numerator: fract1.numerator * fract2.numerator,
        denumerator: fract1.denumerator * fract2.denumerator
    }
}
console.log(getMultyFract(fract1, fract2));


//?  4. Функция деления 2-х объектов-дробей.
function getDevideFract (fract1:any, fract2:any){
    return {
        numerator: fract1.numerator * fract2.denumerator,
        denumerator: fract1.denumerator * fract2.numerator
    }
}
console.log(getDevideFract(fract1, fract2));



//?  5. Функция сокращения объекта-дроби.
//? function getRedusedSumOfFractions2(fr) {
//?     const min = fr.numerator<fr.denumerator ? fr.numerator : fr.denumerator
//?     for (let i = min; i > 1 ; i--) {
//?         if (fr.numerator%i==0 && fr.denumerator2%i==0){
//?             fr.numerator/=i
//?             fr.denumerator/=i
//?             return getRedusedSumOfFractions2(fr)
//?         }    
//?     }
//?     return fr
//? }
//? console.log(getRedusedSumOfFractions2(10))






//! 3. Создать объект, описывающий время (часы, минуты, секун
//! ды), и следующие функции для работы с этим объектом.
//!  1. Функция вывода времени на экран.
//!  2. Функция изменения времени на переданное количество 
//! секунд.
//!  3. Функция изменения времени на переданное количество 
//! минут.
//!  4. Функция изменения времени на переданное количество 
//! часов.
//!  Учтите, что в последних 3-х функциях, при изменении одной 
//! части времени, может измениться и другая. Например: если ко 
//! времени «20:30:45» добавить 30 секунд, то должно получиться 
//! «20:31:15», а не «20:30:75»



let time = {
    hours: 30,
    minutes: 115,
    seconds: 163,
}



//?  1. Функция вывода времени на экран.

function showTime() {
    return time
}
console.log(showTime())



//?  2. Функция изменения времени на переданное количество 
//? секунд.

function setSeconds() {
    if (time.seconds>60) {
        time.minutes+=Math.trunc(time.seconds/60)
        time.seconds = time.seconds - (Math.trunc(time.seconds/60))*60
    }
    return time
}
console.log(setSeconds())



//?  3. Функция изменения времени на переданное количество 
//? минут.

function setMinutes() {
    if (time.minutes>60) {
        time.hours+=Math.trunc(time.minutes/60)
        time.minutes = time.minutes - (Math.trunc(time.minutes/60))*60
    }
    return setSeconds()
}
console.log(setMinutes());



//?  4. Функция изменения времени на переданное количество 
//? часов.

function setHours() {
    if (time.hours>23) {
        time.hours= time.hours - (Math.trunc(time.hours/24))*24
    }
    return setMinutes()
}
console.log(setHours());





 
//!  7. Написать функцию, которая считает количество слов в 
//! предложении.

// function findQuatatyWords(str:string) {
//     return str.split(' ').length
// }
// console.log(findQuatatyWords('Написать функцию, которая считает количество слов в предложении.'));










//!  8. Написать функцию, которая возвращает самое длинное 
//! слово из предложения.

// function findLongestWords(str:string) {
//     let x = str.split(' ')
//     let mass = [] 
//     for (let i = 0; i < x.length; i++) {
//         mass.push((x[i].length))
//     }
    
//     let longWord = Math.max(...mass)
    
//     for (let j = 0; j < x.length; j++) {
//         if (x[j].length==longWord) {
//             return console.log(x[j]);
//         }               
//     }
// }
//  function calculateSymbols(str:string) {
   
//  }
//  findLongestWords('Написать функцию, которая возвращает самое длинное слово из предложения')

function findLongestWords(str:string) {
    let x = str.split(' ') 
    let mass = [] 
    for (let i = 0; i < x.length; i++) {
        mass.push((x[i].length))
    }
    let longWord = Math.max(...mass)
    return console.log(longWord)    
}
findLongestWords('Написать функцию, которая возвращает самое длинное слово из предложения')
 

function calculateSymbols() {
    // findLongestWords(longWord)
    
    //  for (let j = 0; j < x.length; j++) {
    //      if (x[j].length==longWord) {
    //          return console.log(x[j]);
    //      }               
    //  }
//    return findLongestWords(str)
   
 }

calculateSymbols()




function longer(a, b) {
    return (b.length > a.length) ? b : a;
  }
  
  function longestWord(str) {
    let words = str.split(' ');
    return words.reduce(longer);
  }
  
  console.log(longestWord("The quiclllk brown fox jumped over the lazy dogs"));

  




  interface Rectangle {
    topLeft: { x: number, y: number };
    bottomRight: { x: number, y: number };
}

function getRectangleInfo(rect: Rectangle): void {
    console.log(`Верхний левый угол: (${rect.topLeft.x}, ${rect.topLeft.y})`);
    console.log(`Нижний правый угол: (${rect.bottomRight.x}, ${rect.bottomRight.y})`);
}

// getRectangleInfo()



// console.log( Rectangle.topLeft(10,15));


let rectElement = document.getElementById('rect') as HTMLDivElement


//! создание элемента
// let test = document.createElement('div')
// test.innerHTML = 'Здесь текст'
// console.log(test);


// let p:string = '8'
// console.log(typeof p);



type myLets = {
    a:number,
    bj:number,
    c:string,
    d:string,
}

let obj1:myLets = {
    a: 5,
    d: 'eee',
    bj: 7,
    c: 'aaa',
}

let obj2:myLets = {
    bj: 'bj',
    4: 'fff',
    3: 8,
    5: 'hhh',
    d: 'name',
    c: 6,
}

console.log(obj1);
console.log(obj2);


// let x = Number(5)
let x = 5 as number
let y = String(5)
console.log(typeof y);

console.log(x + y);






//! <================= Методы массивов =================>

//! push -  в конец  добавляет
//! pop -  с конца удаляет
//! unshift - добавляет в начало
//! shift - добавляет в конец

//! slice - копирует часть массива
//! splice - вырезает часть массива



let mas = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(mas);

// mas.push('hhh')
// console.log(mas);

// mas.pop()
// console.log(mas);

// mas.unshift('fff')
// console.log(mas);

// mas.shift()
// console.log(mas);

// let mas2 = mas.slice(3,6) //(нач элемент, конеч элемент)
// console.log(mas2);

// console.log(mas);

// mas.splice(2, 0, 'el1', 'el2') // (нач элемент, кол-во элементов)
// console.log(mas);



//! циклы for of и for (;;) для массива одинаковы
// for (const el of mas) {
//     console.log(el);    
// }

// for (let i = 0; i < mas.length; i++) {
//     console.log(mas[i]);        
// }


//! цикл for in для объекта







// let fruits = ["Апельсин", "Слива"];
// console.log(fruits);

// fruits.push('apple')
// console.log(fruits);


// let funcs = [
    
// ]




// background-color =   backgroundColor

// changeLet = 'background-color'

let yyy = function newWord (changeLet:string) {
    let newLet = changeLet.split('-') 
    let UpperLetter = newLet[1].slice(0,1).toUpperCase() // заглавная буква второго слова

    return(newLet[0] + UpperLetter + newLet[1].slice(1));
}

console.log(yyy('background-color'));
console.log(yyy('text-align'));
console.log(yyy('background-center'));

let masss = [yyy('background-center')]
console.log(masss[0])


// разные типы значений
let arrn = [ 'Яблоко', { name: 'Джон' }, true, function() { console.log('привет'); } ];
// arrn[4]='Apple'
arrn.push('Apple')
console.log(arrn);
 




//! Создание глобальной ссылки 'вторым способом':

//! 1. Заходим в Репозиторий-> Settings-> в самом низу делаем репозиторий Public
//! 2. Заходим в Pages, там где 'Branch(none)' ставим 'main'
//! 3. Переходим обратно в Репозиторий и  там где About ставим галочку в 'Use your GitHub Pages website'
//! Ссылка по идее должна создаться :)




let mass1 = [123]
console.log(mass1);

let mass2 = [123]
console.log(mass2);

console.log(mass1==mass2);
console.log(mass1[0]==mass2[0]);



// mass2[1] = 555
// console.log(mass1);
// console.log(mass2);


// let fruit = ["Яблоко", "Апельсин", "Слива"];
// console.log(fruit.length);

// проходит по значениям
// for (let el of fruit) {
//   console.log( el );
// }

// let array = []


// function getMaxSubSum(arr:any) {
//     let maxSum = 0;
//     let partialSum = 0;

// for (const el of arr) {
//     partialSum+=el
//     maxSum = Math.max(maxSum, partialSum)
//     if (partialSum<0) {
//         partialSum=0
        
//     }
// }
// return maxSum

// }


// console.log(getMaxSubSum([6, 2,-3, 5]));



function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // для каждого элемента массива
      partialSum += item; // добавляем значение элемента к partialSum
      maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
      if (partialSum < 0) partialSum = 0; // ноль если отрицательное
    }
  
    return maxSum;
  }


  console.log(getMaxSubSum([-3, -4, -2, 8]));
  

  console.log(getMaxSubSum([-1, 2, -3, -9, -8, 3]));
















// число в степени
function test(num:number, pow:number) {
    let result = 1
    for(let i = 0; i < pow; i++) {
        result *= num
    }
    return result
}
console.log(test(5,2));


// число в степени 2
function test2(num:number, pow:number):any {
    if (pow==1){
        return num
    }else {
        return num * test2(num, pow-1) 

    }

}

console.log(test2(5,1));
console.log(test2(5,2));




// вычислить факториал
function factorial2(n:number):any {
    if (n == 1){
        return n
    }
    return n * factorial2(n - 1);
  }

  console.log(factorial2(5));
  


  

//!  <=========================JS_PZ_Modul_2_Week_2======================>

//! Задание 1
//! Создать массив из 10 случайных чисел и написать несколько 
//! функций для работы с ним.

let arr:number[] = [] 
for (let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random()*10))    
}
console.log(arr);



//? 1. Функция принимает массив и выводит его на экран.

// function showArr(arr:object) {
//     return arr    
// }
// console.log(showArr(arr));



//? 2. Функция принимает массив и выводит только четные 
//? элементы.

// function oddElOfMass(arr:any) {
//     let mass = [] as any
//     for (const el of arr) {
//         if (el%2==0) {
//             mass.push(el)
//         }
//     }
//     return mass
// }
// console.log(oddElOfMass(arr));



//? 3. Функция принимает массив и возвращает сумму всех 
//? элементов массива.

// function summOfElMass(arr:any) {
//     let accum = 0
//     for (const el of arr) {
//         accum+=el        
//     }
//     return accum
// }
// console.log(summOfElMass(arr));




//? 4. Функция принимает массив и возвращает его максималь
//? ный элемент.

// function maxElOfmass(arr:any) {
//     return Math.max(...arr)
// }
// console.log(maxElOfmass(arr));




//? 5. Функция добавления нового элемента в массив по ука
//? занному индексу.


// function addElInMass(index:number, num:number) {
//     arr.splice(index, 0, num)
//     return arr
// }
// console.log(addElInMass(3, 1000));




//? 6. Функция удаления элемента из массива по указанному 
//? индексу.

// function delElInArr(index:number) {
//     delete arr[index]
//     return arr
// }

// console.log(delElInArr(2));


//! Задание 2
//! Создать еще один массив из 5 случайных чисел и написать следующие функции.

let arrSecond:number[] = []
for (let i = 0; i < 5; i++) {
    arrSecond.push(Math.round(Math.random()*10))    
}
console.log(arrSecond);


//? 1. Функция принимает 2 массива и возвращает новый массив, в котором собраны 
//? все элементы из двух массивов без повторений.

//! arr = [3, 2, 10, 1, 7, 10, 0, 1, 5, 10] //перезаписал массив!
//! arrSecond =  [2, 0, 7, 3, 4] //перезаписал массив!
// (чтобы не работать с random для наглядности)


//! console.log(arr.includes(6)); // включён ли элемент



function findUniqElements(arr:number[], arrSecond:number[]) {
 let newArr:number[] = []

//!  первый способ
for (const el of arr) {
    if (!newArr.includes(el)) {
        newArr.push(el)
    }
}
    
for (const el of arrSecond) {
    if (!newArr.includes(el)) {
        newArr.push(el)
    }
}
    

return newArr
 
//!  второй способ
    // let newMass:number[] = []
    // let arrayWithNewNumbers:number[] = []
    // newMass = arr.concat(arrSecond)

    // for (let i = 0; i < newMass.length; i++) {
    //     if(!arrayWithNewNumbers.includes(newMass[i])){
    //         arrayWithNewNumbers.push(newMass[i])
    //     } 
    // } 

    // return arrayWithNewNumbers
}

console.log(findUniqElements(arr, arrSecond))

console.log('-----------');


//? 2. Функция принимает 2 массива и возвращает новый массив, в котором собраны 
//? общие элементы (то есть элементы, которые встречаются и в первом и во втором 
//? массивах) без повторений.


console.log('первый массив = ' + arr);
console.log('второй массив = ' + arrSecond);



function  getGeneralElements (arr:number[],arrSecond:number[]) {
    
    //! первый способ
    let mass:number[] = []
    for (const el of arr) {
        if(arr.includes(el) && arrSecond.includes(el)) {
            if (!mass.includes(el)) {
                mass.push(el)
            }
        }
        
    } return mass


    
    
    //! второй способ
    // let array:number[] = []
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arrSecond.length; j++) {
    //        if (arr[i]==arrSecond[j]) {      
    //            array.push(arr[i])
    //        } 
    //     }
    //     }
    //     return array
    

}
    // getGeneralElements(arr, arrSecond)
console.log(getGeneralElements(arr, arrSecond));





console.log('-------------');

arr = [3, 2, 10, 3, 7, 10, 0, 1, 5, 10] //перезаписал массив!
arrSecond =  [2, 0, 7, 3, 4] //перезаписал массив!



//? 3. Функция принимает 2 массива и возвращает новый массив, в котором собраны 
//? все элементы из первого массива, которых нет во втором массиве.


function getArrWithNewElement(arr:number[], arrSecond:number[]) {
    let newMass:number[] = []
    for (const el of arr) {
        if(arr.includes(el) && !arrSecond.includes(el)){
            if (!newMass.includes(el)) {
                newMass.push(el)
            }
        }
    }

    return newMass
}

console.log(getArrWithNewElement(arr,arrSecond));

//!  Задание 3
//! Создать массив фруктов и отсортировать его по алфавиту. Написать следующие 
//! функции.

let fruits = ["apple", "pinia", "potato", "orange", "melon", "tomato"];
// console.log(fruits);



function sortByAlphabet(fruits:string[]) {

    return fruits.sort()
}

console.log(sortByAlphabet(fruits));






//! 2. Поиск фрукта в массиве. Функция принимает название фрукта и возвращает индекс 
//! найденного элемента или -1, если не найден. Поиск должен быть нерегистрозависимым.

let fruit= 'orangE' 

fruits = ["apple", "pinia", "potato", "orange", "melon", "tomato"];



function searchFruitsInArray(fruit:string){


for (let i = 0; i < fruits.length; i++) {
        if (fruit.toLowerCase() == fruits[i]) {
            return `индекс элемента ${fruit} = ${i}` 
        }
    }
return `данного элемента нет` 
    
}

console.log(searchFruitsInArray(fruit));


 


//! 1. Вывод на экран с помощью document.write() в виде списка (с помощью тегов ul и li). 


let inputInHTML = document.getElementById('fruit') as HTMLDivElement

function showFruits (fruits:string[]) {
    for (let i = 0; i < fruits.length; i++) {
        inputInHTML.innerHTML+=`<li>${fruits[i]}</li>`
    }

}
console.log(showFruits(fruits));




 











