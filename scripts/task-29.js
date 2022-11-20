/* ЗАВДАННЯ #29

Функція getShippingCost(country) повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат, що зберігається у змінній message. Обов'язково використовуй інструкцію switch.

Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price>, необхідно підставити відповідні значення.

Список країн і вартість доставки:

China - 100 кредитів
Chile - 250 кредитів
Australia - 170 кредитів
Jamaica - 120 кредитів
Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country"
}

*/

function getShippingCost(country) {
    let message;
    let price;
    switch (country) {
        case "China":
            price = 100;
            break;
        case "Chile":
            price = 250;
            break;
        case "Australia":
            price = 170;
            break;
        case "Jamaica":
            price = 120;
            break;
        default:
            return "Sorry, there is no delivery to your country";
    }
    message = `Shipping to ${country} will cost ${price} credits`;
    return message;
}


// ПЕРЕВІРКА

let var1 = 'China';
let var2 = 'Australia';
let var3 = null;

console.log(getShippingCost(var1));
console.log(getShippingCost(var2));
console.log(getShippingCost(var3));

// Task 29-th - OK!