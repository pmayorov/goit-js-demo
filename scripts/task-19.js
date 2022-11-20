/* ЗАВДАННЯ #19

Функція checkPassword(password) отримує пароль користувача в параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

- Якщо значення параметра password дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
- Якщо значення параметра password збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
- Якщо жодна з попередніх умов не виконалася, у змінну message записується рядок "Access denied, wrong password!".

*/

function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;

    if (password === null) { // Change this line
        message = 'Canceled by user!';
    } else if (password === ADMIN_PASSWORD) { // Change this line
        message = 'Welcome!';
    } else {
        message = 'Access denied, wrong password!';
    }

    return message;
}

// ПЕРЕВІРКА

let var1 = null;
let var2 = 20;
let var3 = 'jqueryismyjam';

console.log(checkPassword(var1));
console.log(checkPassword(var2));
console.log(checkPassword(var3));

// Task 19-th - OK!