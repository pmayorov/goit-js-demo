/* ЗАВДАННЯ #16

Додай вираз перевірки повноліття користувача, значення параметра age, в умову для інструкції if.

Якщо користувач повнолітній, повинен виконуватися блок if і у змінну message записується рядок "You are an adult".
В іншому випадку повинен виконуватися блок else і записується рядок "You are a minor". 

*/

function checkAge(age) {
    let message;
    if (age >= 18) { // Change this line
        message = 'You are an adult';
    } else {
        message = 'You are a minor';
    }
    return message;
}


// ПЕРЕВІРКА

let var1 = 17;
let var2 = 18;
let var3 = 20;

console.log(checkAge(var1));
console.log(checkAge(var2));
console.log(checkAge(var3));