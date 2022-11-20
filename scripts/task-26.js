/* ЗАВДАННЯ #26

Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (константа ADMIN_PASSWORD) і повертає рядок з повідомленням про результат.

Використовуючи тернарний оператор, доповни функцію таким чином, що:

Якщо значення password і ADMIN_PASSWORD збігаються, присвой змінній message рядок "Access is allowed".
В іншому випадку, присвой message рядок "Access denied, wrong password!".

*/

function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    message = ADMIN_PASSWORD === password ? "Access is allowed" : "Access denied, wrong password!" ;
    return message;
}


// Task 26-th - OK!