const sub = (operation, numbers) => {
  if (operation === "sub") {
    return numbers.reduce((acc, el) => acc - el);
  }
  return null;
};

module.exports = sub;
