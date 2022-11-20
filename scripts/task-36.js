/* ЗАВДАННЯ #36

Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
Якщо в рядку відсутні заборонені слова, функція повертає буль false.

*/

function checkForSpam(message) {
    let result;
    result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale') 
    return result;
}



// ПЕРЕВІРКА

let var1 = 'kjdfhdkfhsPkdsalejfkdfj';

console.log(checkForSpam(var1));

// Task 36-th - OK!