/* ЗАВДАННЯ #23

Функція isNumberNotInRange(start, end, number) перевіряє, чи не входить число у проміжок. Тобто число повинно бути меншим або дорівнювати start і більшим або дорівнювати end. Результатом виразу перевірки буде буль true або false.

Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

number - число, невходження якого перевіряється
start - початок числового проміжку
end - кінець числового проміжку
Присвой змінній isNotInRange вираз інверсії значення змінної isInRange, використовуючи оператор !

*/

function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; // Change this line

    return isNotInRange;
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


// Task 23-th - OK!