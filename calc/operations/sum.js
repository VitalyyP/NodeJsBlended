const sum = (operation, numbers) => {
  if (operation === "sum") {
    return numbers.reduce((acc, el) => acc + el, 0);
  }
  return null;
};

module.exports = sum;
