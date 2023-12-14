import game from './index.js';
import getRandomNumber from './utils.js';

// вспомогательные переменные
const rule = 'What number is missing in this progression?';

const minValue = 0;
const maxValue = 10;
const length = 10;

const getProgression = (getLength, firstArgument, moveArgument) => {
  const result = [];
  for (let i = 0; i < getLength; i += 1) {
    result.push(firstArgument + moveArgument * i);
  }
  return result;
};

// основная функция
const gameProgression = () => {
  const first = getRandomNumber(minValue, maxValue);
  const step = getRandomNumber(1, length);
  const progression = getProgression(length, first, step);
  const hideElementIndex = getRandomNumber(0, length - 1);
  const expression = progression.map((element, index) => (index === hideElementIndex ? '..' : element)).join(' ');
  const answer = `${progression[hideElementIndex]}`;
  return {
    expression, answer,
  };
};

export default () => game(rule, gameProgression);
