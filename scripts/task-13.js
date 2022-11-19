// function isAdult(age) {
//     let passed = false;
//     if (age >= 18) {
//         passed = true;
//     }
//     return passed;
// }

// Матиматичне порівняння вже автоматом повертає тру або фолс, тому вам не потрібно використовувати тернарний оператор 


function isAdult(age) {
    const passed = age >= 18;
    return passed;
}


console.log(isAdult(20));
console.log(isAdult(13));
console.log(isAdult(99));