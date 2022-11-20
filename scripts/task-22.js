/* ЗАВДАННЯ #22

Функція checkIfCanAccessContent(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. Отримати доступ можуть тільки користувачі з передплатою pro або vip.

Присвой змінній canAccessContent вираз перевірки передплати. Якщо значення параметра subType дорівнює рядкам "pro" або "vip", користувач отримає доступ. Результатом виразу перевірки буде буль true або false.

*/

function checkIfCanAccessContent(subType) {
    const canAccessContent = subType === 'vip' || subType === 'pro'; // Change this line
    return canAccessContent;
}

// ПЕРЕВІРКА

let var1 = 'vip';
let var2 = 'pro';
let var3 = null;

console.log(checkIfCanAccessContent(var1));
console.log(checkIfCanAccessContent(var2));
console.log(checkIfCanAccessContent(var3));

// Task 22-th - OK!