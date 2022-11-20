/* ЗАВДАННЯ #25

Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else тернарним оператором.

function checkStorage(available, ordered) {
  let message;

  if (ordered > available) {
    message = "Not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }

  return message;
}

*/

function checkStorage(available, ordered) {
        let message;
        message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
    return message;
}


// Task 25-th - OK!