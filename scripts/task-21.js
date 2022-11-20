/* ЗАВДАННЯ #21

Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

number - число, входження якого перевіряється
start - початок числового проміжку
end - кінець числового проміжку

Присвой змінній isInRange вираз перевірки входження number у числовий проміжок від start до end. Тобто число повинно бути більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виразу перевірки буде буль true або false.

*/

function isNumberInRange(start, end, number) {
    const isInRange = number >= start && number <= end; // Change this line
    return isInRange;
}

// ПЕРЕВІРКА

let var1 = 10;
let var2 = 80;
let var3 = 0;
let var4 = 80;
let var5 = 81;

console.log(isNumberInRange(var1, var2, var3));
console.log(isNumberInRange(var1, var2, var4));
console.log(isNumberInRange(var1, var2, var5));

// Task 21-th - OK!