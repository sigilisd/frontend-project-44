import game from './index.js';
import getRandomNumber from './utils.js';

// вспомогательные переменные
const rule = 'What is the result of the expression?';

const minValue = 1;
const maxValue = 25;

// основная функция игры
const gameCalc = () => {
  const argument1 = getRandomNumber(minValue, maxValue);
  const argument2 = getRandomNumber(minValue, maxValue);
  const check = getRandomNumber(1, 3);
  let expression;
  let answer;
  switch (check) {
    case 1:
      expression = `${argument1} + ${argument2}`;
      answer = `${argument1 + argument2}`;
      break;
    case 2:
      expression = `${argument1} - ${argument2}`;
      answer = `${argument1 - argument2}`;
      break;
    case 3:
      expression = `${argument1} * ${argument2}`;
      answer = `${argument1 * argument2}`;
      break;
    default:
      break;
  }
  return {
    expression, answer,
  };
};

// функция запуска игры
export default () => game(rule, gameCalc);
