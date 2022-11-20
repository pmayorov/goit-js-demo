/* ЗАВДАННЯ #30

Функція getNameLength(name) приймає ім'я (параметр name) і повертає рядок, в якому вказана його довжина. Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.

*/

function getNameLength(name) {
    const message = `Name ${name} is ${name.length} characters long`; // Change this line
    return message;
}


// ПЕРЕВІРКА

let var1 = 'China';
let var2 = 'Australia';
let var3 = 'null';

console.log(getNameLength(var1));
console.log(getNameLength(var2));
console.log(getNameLength(var3));

// Task 30-th - OK!