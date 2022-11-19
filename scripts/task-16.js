/* ЗАВДАННЯ #16

Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

available - загальна кількість товарів на складі
ordered - одиниць товару в замовленні
Використовуючи розгалуження, доповни код функції таким чином, що:

Якщо в замовленні вказане число, яке перевищує кількість товарів на складі, у змінну message записується рядок "Not enough goods in stock!".
В іншому випадку записується рядок "Order is processed, our manager will contact you.".

*/

function checkStorage(available, ordered) {
    let message;
    if (ordered > available) {
        message = 'Not enough goods in stock!';
    } else {
        message = 'Order is processed, our manager will contact you.';
    }
    return message;
}

// ПЕРЕВІРКА

let var1 = 41;
let var2 = 51;
let var3 = 51;
let var4 = 51;
let var5 = 61;
let var6 = 51;

console.log(checkStorage(var1, var2));
console.log(checkStorage(var3, var4));
console.log(checkStorage(var5, var6));