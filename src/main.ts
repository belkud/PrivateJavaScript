import '/src/style.scss'




 // @ts-ignore
let rrr

const strictFunction = ()=>{
    'use strict';
    let rrr
    const nestedFunction = ()=>{
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


function summer(p:any) {
    let summ = 0
    for (let i = 0; i < p.length; i++) {   
        summ+=p[i]
    }
    console.log(summ);
}
summer(array)

summer(array2)


function balance (a:number, b:number) {
    if(a>b) {
        console.log(Math.round(((a/b)-(+a/b))*b));
        
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
console.log((23-hours) + ' часов' + ' и ' + (60 - minutes) + ' минут');


let memory = 10000
console.log(memory/820 - (memory%820)/820 );

console.log(Math.floor(memory/820));




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
if (todays.getDay()==0) {
    days.children[todays.getDay()+7].classList.add('newClass')
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

let age =32
let education = 'higher'
if(age>=30 && age<=40 && education=='higher') {
    console.log('проверка');
}


let y 
console.log(y);


console.log(Boolean(1));
console.log(Boolean(0));
console.log(true + false);








// тернарный оператор
5<1 ? console.log('true'):console.log('false');

let q = 13
q%2==0 ? console.log('число четноё'): console.log('число  НЕ четноё');

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
v>0? console.log(v):console.log(-v);

if (v>0) {
    console.log('второй вариант ' + v)
} else {
    console.log('второй вариант ' + -v)
}

let earth = 'Венера' as any
earth=='Земля' || earth=='земля' ? 
console.log('привет землянин'):
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
    
if (dayOfweek ==1) {
    console.log('понедельник');
}
if (dayOfweek ==2) {
     console.log('вторник');
}

let year = 2025
if (year%400==0){
    console.log('год високосный');
} else if (year%100==0) {
    console.log('год НЕ високосный');
} else if (year%4==0) {
    console.log('год високосный');
} else {
    console.log('год не високосный')
}


let parity = (year%2==0)?'Четное':'Нечётное';
console.log(parity);

let protocol  = 'FTP'
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
if (sss=' ') {
    console.log('sss');
    
}

let yearss = 5 as number
if (yearss<12) {
    console.log('Вы ребенок');
} else if(yearss<18) {
    console.log('Вы несовершеннолетний');
} else if (yearss<100) {
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
        console.log ('число 3 или 2');
        break;
    default:
        console.log (`числа ${answer} нет в диапазоне`);
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
    if (i%5==0) {
        console.log(i);
    }
        
}


// возвести число само на себя

function squareOfNumber (number:number) {
    return console.log(`${number} в квадрате = ${number*number}`)
}
squareOfNumber(30)
squareOfNumber(10)
squareOfNumber(40)
squareOfNumber(31)
squareOfNumber(3)




function diapazone(firstNum:number, secondNum:number) {
    for (let i = firstNum; i <=secondNum; i++) {
        if(i%100==0) {
            console.log(i);
        }
    }
}

diapazone(0, 10)
diapazone(0, 1000)


console.log('===========');




// Вывести все числа от 1 до 100, которые кратные указанному 
// пользователем числу.
    function multipleNumber (multNum:number) {
        for (let i = 1; i < 100; i++) {
                if(i%multNum==0) {
            console.log(i);
            
        }
    }
}

// multipleNumber(3)


//  4. Вывести каждый 4-й элемент из указанного пользователем 
// диапазона. Пользователь указывает минимальное и мак
// симальное значения диапазона. 

function multipleNumber4 (minNum:number, maxNum:number) {
    for (let i = minNum; i < maxNum; i++) {
       if(i%4==0) {
         console.log(i);
      }
   } 
}
multipleNumber4(80,100)




// 5. Запросить число и проверить, простое ли оно. Простое 
// число делится без остатка только на себя и на единицу.

let simpleNumber = 1225
for(let i=2; i<simpleNumber;i++) {
        if (simpleNumber%i==0) {       
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
let acc= 0

for (let i = 1; i <= lattice; i++) {
    mass.push('#')    
    acc++
}
mass.push(acc+' повторений #')

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
temperature<15 ?  'холодно':
temperature<30 ?  'тепло':
temperature<45 ?  'жарко':
temperature<100 ? 'горячо': 'диапазон температуры неверный';
console.log(infoOfTemperature);

 

let login='Директор'
let message = (login == 'Сотрудник') ? 'привет':
(login == 'Директор') ? 'здравствуйте':
(login == '') ? 'нет логина': ''
console.log(message);


let message2 = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' :
'';
console.log(message2);



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
if (x>=3 && x<=10 ) {
    console.log(x);
    
}

let value1 = true as any
let value2 = true as any
let value3 = true as any

let result = value1 + value2 + value3;
console.log(result);

//@ts-ignore
console.log(result!=value1);

 




let oddEvenNumber = 23 as any
switch(oddEvenNumber) {
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



