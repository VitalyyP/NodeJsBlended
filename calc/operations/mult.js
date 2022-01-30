const mult = (operation, numbers) => {
  if (operation === "mult") {
    return numbers.reduce((acc, el) => acc * el);
  }
  return null;
};

module.exports = mult;
