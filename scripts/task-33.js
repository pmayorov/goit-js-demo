/* ЗАВДАННЯ #33

Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його, якщо довжина перевищує значення в параметрі maxLength.

Доповни код функції таким чином, що якщо довжина рядка:

- не перевищує maxLength, функція повертає його в початковому вигляді.
- більша за maxLength, то функція обрізає рядок до maxLength символів і додає в кінець три крапки "...", після чого повертає скорочену версію.

*/

function formatMessage(message, maxLength) {
    let result
    result = message.length > maxLength ? message.slice(0, maxLength) + '...' : message;
    return result;
}


// ПЕРЕВІРКА

let var1 = 5;
let var2 = '123';
let var3 = '123456789';

console.log(formatMessage(var2, var1));
console.log(formatMessage(var3, var1));

// Task 33-th - OK!