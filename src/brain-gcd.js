import game from './index.js';
import getRandomNumber from './utils.js';

// вспомогательные переменные
const rule = 'Find the greatest common divisor of given numbers.';

const minValue = 1;
const maxValue = 50;

const getGcd = (num1, num2) => (num1 !== 0 ? getGcd(num2 % num1, num1) : num2);

// основная функция
const gameGcd = () => {
  const argument1 = getRandomNumber(minValue, maxValue);
  const argument2 = getRandomNumber(minValue, maxValue);
  const expression = `${argument1} ${argument2}`;
  const answer = getGcd(argument1, argument2);
  return {
    expression, answer: `${answer}`,
  };
};

// функция запуска игры
export default () => game(rule, gameGcd);
