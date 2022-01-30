const div = (operation, numbers) => {
  if (operation === "div") {
    return numbers.reduce((acc, el) => acc / el);
  }
  return null;
};

module.exports = div;
