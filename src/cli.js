import readlineSync from 'readline-sync'; /* импорт модуля основной игры */

const askUserName = () => {
    console.log('Welcome to the Brain Games!');

    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
}

export default askUserName; /* функция которая спрашивает имя пользователя и после приветсвует его */