/* ЗАВДАННЯ #34

Функція normalizeInput(input) приймає рядок (параметр input) і повертає такий самий рядок, але в нижньому регістрі. Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.

*/

function normalizeInput(input) {
    const normalizedInput = input.toLowerCase();
    return normalizedInput;
}


// ПЕРЕВІРКА

let var1 = 'KLJKLjdkljkldlkkllkhkhJKHJK&';

console.log(normalizeInput(var1));

// Task 34-th - OK!