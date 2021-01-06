// access between 14 and 90
let age = +prompt('Write your age')

if (age >= 14 && age <= 90) {
    alert('You are welcome')
} else {
    alert('Sorry, access not allowed')
}

// out of range 14 and 90 with '!' operator
let age = +prompt('Write your age')

if (!(age >= 14 && age <= 90)) {
    alert('You are welcome')
} else {
    alert('Sorry, access not allowed')
}

// out of range 14 and 90
if (age <= 14 || age >= 90) {
    alert('You are welcome')
} else {
    alert('Sorry, access not allowed')
}

//login check

let login = prompt('Hi, who is there?')

if(login == 'director') {
    alert('Hi, director') 
}
else if (login == null) {
    alert('Canceled')
} else {
    alert('Login is not correct')
}



