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
    // Change code below this line

    // Change code above this line
    return discount;
}

// ПЕРЕВІРКА

let var1 = 5;
let var2 = 20;
let var3 = 2;
let var4 = 10;
let var5 = 21;

console.log(isNumberNotInRange(var1, var2, var3));
console.log(isNumberNotInRange(var1, var2, var4));
console.log(isNumberNotInRange(var1, var2, var5));


// Task 24-th - OK!