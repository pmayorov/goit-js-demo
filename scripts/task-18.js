/* ЗАВДАННЯ #18

Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.

Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits) виконує транзакцію з продажу дроїдів і повертає повідомлення про результат операції. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

pricePerDroid - ціна одного дроїда
orderedQuantity - кіл-сть замовлених дроїдів
customerCredits - сума коштів на рахунку клієнта

Доповни її наступним функціоналом:

1. Оголоси змінну totalPrice для зберігання загальної суми замовлення і присвой їй вираз розрахунку цієї суми.
2. Додай перевірку, чи зможе клієнт оплатити замовлення:
- якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, запиши у змінну message рядок "Insufficient funds!";
- в іншому випадку, відніми суму покупки з рахунку клієнта і запиши у змінну message повідомлення: "You ordered <число> droids, you have <число> credits left".

*/

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    const totalPrice = pricePerDroid * orderedQuantity;
    if (totalPrice > customerCredits) {
        message = 'Insufficient funds!';
    } else {
        customerCredits -= totalPrice
        message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
    }
    return message;
}

// ПЕРЕВІРКА

let var1 = 100;
let var2 = 20

let var3 = 1000;
let var4 = 2000;
let var5 = 3000;

console.log(makeTransaction(var1, var2, var3));
console.log(makeTransaction(var1, var2, var4));
console.log(makeTransaction(var1, var2, var5));

// Task 18-th - OK!