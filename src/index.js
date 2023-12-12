import readlineSync from 'readline-sync';

// Вспомогательные переменные
const greetingsMessage = 'Welcome to the Brain Games!';
const timesCount = 3;

const game = (rule, getGameOptions) => {
  // приветствуем пользователя
  console.log(`${greetingsMessage}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // описываем правила игры
  console.log(`${rule}`);

  // цикл прохода игры
  for (let i = 0; i < timesCount; i += 1) {
    // получим входные данные
    const { expression, answer: correctAnswer } = getGameOptions();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    // проверяем ответ на корректность
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
