/* ЗАВДАННЯ #35

Функція checkForName(fullname, name) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка name у рядок fullname.

fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
name - ім'я для перевірки входження в повне ім'я.
Присвой змінній result вираз перевірки входження імені (параметр name), у повне ім'я (параметр fullname). Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» - для неї різні імена.

*/

function checkForName(fullName, name) {
    const result = fullName.includes(name); // Change this line
    return result;
}


// ПЕРЕВІРКА

let var1 = 'Павло Майоров';
let var2 = 'Майорv';

console.log(checkForName(var1, var2));

// Task 35-th - OK!