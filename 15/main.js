//1 rewrite function

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }

// console.log(checkAge(19));
// console.log(checkAge(16));

//2 return lower number

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

// console.log(min(2,3))
// console.log(min(44,11))

//3 

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
console.log(pow(4,3))  
console.log(pow(3,3))  