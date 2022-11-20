/* ЗАВДАННЯ #24

Функція getDiscount(totalSpent) визначає значення знижки, залежно від загальної суми витрачених грошей (параметр totalSpent) в магазині за весь час (партнерська програма). Знижка записується у змінну discount і повертається з функції як результат її роботи.

Використовуючи розгалуження і логічні оператори, доповни код функції.

- Якщо витрачено від 50000 (включно) або більше кредитів - знижка 10% (золотий партнер)
- Якщо витрачено від 20000 (включно) до 50000 кредитів - знижка 5% (срібний партнер)
- Якщо витрачено від 5000 (включно) до 20000 кредитів - знижка 2% (бронзовий партнер)
- Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)

Значення знижок кожного рівня зберігаються в однойменних константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT і GOLD_DISCOUNT.

*/

function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    if (totalSpent >= 50000) {
        discount = GOLD_DISCOUNT
    } else if (totalSpent >= 20000) {
        discount = SILVER_DISCOUNT
    } else if (totalSpent >= 5000) {
        discount = BRONZE_DISCOUNT
    } else {
        discount = BASE_DISCOUNT
    }
    return discount;
}

// ПЕРЕВІРКА

let var1 = 137000;
let var2 = 30000;
let var3 = 10000;
let var4 = 100000;

console.log(getDiscount(var1));
console.log(getDiscount(var2));
console.log(getDiscount(var3));
console.log(getDiscount(var4));


// Task 24-th - OK!