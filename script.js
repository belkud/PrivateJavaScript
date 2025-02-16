


//! https://nodejs.org/en - ссылка на скачивание nodeJS

// через пуск зайти в PowerShell (нажимаем правой кнопкой мыши -> запуск от имени администратора)
// Get-ExecutionPolicy
// Set-ExecutionPolicy unrestricted
// подтвердить Y

//! npm create vite



console.log(333 +123);

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


function summer(p) {
    let summ = 0
    for (let i = 0; i < p.length; i++) {   
        summ+=p[i]
    }
    console.log(summ);
}
summer(array)

summer(array2)


function balance (a, b) {
    if(a>b) {
        console.log(Math.round(((a/b)-parseInt(a/b))*b));
        
    } else {
        console.log('Делитель больше делимого числа');
        
    }
}

balance(15, 9)


let text = document.querySelector('#text')




 
let hours = 10
let minutes = 15
let time = 24*60 - hours*60 - minutes
console.log('время до конца дня: ')
console.log((23-hours) + ' часов' + ' и ' + (60 - minutes) + ' минут');


let memory = 10000
console.log(memory/820 - (memory%820)/820 );
console.log(Math.floor(memory/820));




//! мини календари

let todays = new Date

let today = document.querySelector('#today')
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
    

let days = document.querySelector('#days')
if (todays.getDay()==0) {
    days.children[todays.getDay()+7].classList.add('newClass')
}

days.children[todays.getDay()].classList.add('newClass') 


console.log(window.screen);
console.log(todays.getDay());

console.log(days.nextElementSibling);
console.log(days.baseURI);

//! мини календари, завершение




let info = window.location.search
console.log(info);

let extra_info = info.split('&')
console.log(extra_info);

for (let i = 0; i < extra_info.length; i++) {
    let inf = extra_info[i].split('=')
    text.innerHTML += inf[1] + '\n'
}


// let use = prompt('Введите логин')
// let password = prompt('Введите пароль')
// if (use=='admin' || password=='admin') {
//     console.log('пользователь/пароль совпали');
// } else {
//     console.log('пользователь/пароль неверны');
// }


let obj = [5, 7, 'abc']
console.log(typeof obj);




console.log(window.location);
console.log(window.history);
console.log(window.navigator);
console.log(window.screen);

let u = 6
console.log(++u);



