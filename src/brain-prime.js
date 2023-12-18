import game from './index.js';
import getRandomNumber from './utils.js';

// вспомогательные переменные
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minValue = 1;
const maxValue = 50;

// простое ли число?
const isPrime = (num) => {
  if (num <= 1) return false;
  const numSqrt = Math.sqrt(num); // квадрат числа
  for (let i = 2; i <= numSqrt; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

// основная функция игры
const gamePrime = () => {
  const expression = getRandomNumber(minValue, maxValue);
  const answer = isPrime(expression) ? 'yes' : 'no';
  return {
    expression, answer,
  };
};

// функция запуска игры
export default () => game(rule, gamePrime);
