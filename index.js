const filterByAge = (el) => {
  return el.age <= 50;
};

const filterByScore = (el) => {
  return el.score >= 75;
};

const filterByServiceRecord = (el) => {
  return el.serviceRecord >= 5;
};

const sortByScore = (arr) => {
  let arrcopy = [...arr];
  return arrcopy.sort((a, b) => b.score - a.score);
};

const getMeanAge = (arr) => {
  let sum = 0;
  arr.forEach((el) => {
    sum += el.age;
  });
  return sum / arr.length;
};

const getMeanAgeReduce = (arr) => {
  return arr.reduce((mean, el) => mean + el.age, 0) / arr.length;
};

// const getNamesOnly = (arr) => {
// Не смогла составить такую функцию, чтобы пройти тест, если на входе arr. Сделала с el ниже
// };

const getNamesOnly = (el) => {
  return el.name;
};

module.exports = {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getMeanAgeReduce,
  getNamesOnly,
};
