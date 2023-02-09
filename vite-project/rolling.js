const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const rollDice = () => getRandomNumber(1, 6);
