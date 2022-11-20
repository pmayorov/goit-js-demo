/* ЗАВДАННЯ #20

Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

available - доступна кількість товарів на складі
ordered - одиниць товару в замовленні

Використовуючи розгалуження, доповни код функції таким чином, що:

- Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, у змінну message присвоюється рядок "There are no products in the order!".

- Якщо товарів у замовленні більше, ніж доступно товарів на складі, то у змінну message присвоюється рядок "Your order is too large, there are not enough items in stock!".

- В іншому випадку у змінну message присвоюється рядок "The order is accepted, our manager will contact you".

*/

function checkStorage(available, ordered) {
    let message;
    if (ordered === 0) {
        message = 'There are no products in the order!';
    } else if (available < ordered) {
        message = 'Your order is too large, there are not enough items in stock!';
    } else {
        message = 'The order is accepted, our manager will contact you';
    }
    return message;
}


// ПЕРЕВІРКА

let var1 = 50;
let var2 = 0;
let var3 = 60;
let var4 = 20;

console.log(checkStorage(var1, var2));
console.log(checkStorage(var1, var3));
console.log(checkStorage(var1, var4));

// Task 20-th - OK!