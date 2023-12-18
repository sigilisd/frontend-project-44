import game from './index.js';
import getRandomNumber from './utils.js';

// вспомогательные переменные
const rule = 'What number is missing in this progression?';

const minValue = 0;
const maxValue = 10;
const length = 10;

// Функция получения арифметической прогрессии
const getProgression = (getLength, firstArgument, moveArgument) => {
  const result = [];
  for (let i = 0; i < getLength; i += 1) {
    result.push(firstArgument + moveArgument * i);
  }
  return result;
};

// основная функция
const gameProgression = () => {
  // Получаем числа: размер прогрессии, начальное число, разницу и положение "скрытого" элемента
  const first = getRandomNumber(minValue, maxValue);
  const step = getRandomNumber(1, length);
  const hideElementIndex = getRandomNumber(0, length - 1);
  const progression = getProgression(length, first, step); // Получаем прогрессию
  const expression = progression.map((element, index) => (index === hideElementIndex ? '..' : element)).join(' '); // Функция формирования выражения на основе прогрессии и индекса "спрятанного" элемента
  const answer = `${progression[hideElementIndex]}`; // Получаем правильный ответ на вопрос
  return {
    expression, answer,
  };
};

// функция запуска игры
export default () => game(rule, gameProgression);
