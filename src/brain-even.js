import game from './index.js';
import getRandomNumber from './utils.js';

// вспомогательные переменные
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const minValue = 1;
const maxValue = 25;

// функция проверки числа на четность
const isEven = (num) => num % 2 === 0;

// основная функция
const getGameOptions = () => {
  // получаем рандом число
  const randomNumber = getRandomNumber(minValue, maxValue);

  // формируем выражение
  const expression = `${randomNumber}`;

  // получаем правильный ответ на вопрос
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return {
    answer,
    expression,
  };
};

// функция запуска игры
export default () => game(rule, getGameOptions);
