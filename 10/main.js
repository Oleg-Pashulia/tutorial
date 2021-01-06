//1
let questoin = prompt ('What is official name of JavaScript?');

if (questoin == 'ECMAScript') {
    alert('It is true');
} else {
    alert(`Don't you know? ECMAScript!`);
}

//2
let number = +prompt('Write a number');

if (number > 0) {
    alert(1)
} 
else if (number < 0) {
    alert(-1)
} else {
    alert(0)
}

//3 rewrite comments

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

(result < 4) ? alert('Мало') : alert('Багато'); 

//4 rewrite comments

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

let login = prompt('Your login');

(login == 'Worker') ? alert('Hi, worker') : 
    (login == 'Director') ? alert('Hello, director') : 
    (login == '') ? alert('There is no login') :
    alert('Nothing'); 

