const { sum, sub, mult, div } = require("./operations");

const actionHandler = (operation, numbers) => {
  switch (operation) {
    case "sum":
      console.log(sum(operation, numbers));
      break;
    case "sub":
      console.log(sub(operation, numbers));
      break;
    case "mult":
      console.log(mult(operation, numbers));
      break;
    case "div":
      console.log(div(operation, numbers));
      break;
    default:
      console.log("Unknown operation");
  }
};

module.exports = actionHandler;
