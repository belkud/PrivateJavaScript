import '/src/style.scss'









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