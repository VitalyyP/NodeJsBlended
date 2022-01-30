class Calculator {
  constructor(operation, numbers) {
    this.operation = operation;
    this.numbers = numbers;
  }
  sum = (operation, numbers) => {
    if (operation === "sum") {
      return numbers.reduce((acc, el) => acc + el, 0);
    }
    return null;
  };

  sub = (operation, numbers) => {
    if (operation === "sub") {
      return numbers.reduce((acc, el) => acc - el);
    }
    return null;
  };

  mult = (operation, numbers) => {
    if (operation === "mult") {
      return numbers.reduce((acc, el) => acc * el);
    }
    return null;
  };

  div = (operation, numbers) => {
    if (operation === "div") {
      return numbers.reduce((acc, el) => acc / el);
    }
    return null;
  };

  actionHandler = (operation, numbers) => {
    switch (operation) {
      case "sum":
        console.log(this.sum(operation, numbers));
        break;
      case "sub":
        console.log(this.sub(operation, numbers));
        break;
      case "mult":
        console.log(this.mult(operation, numbers));
        break;
      case "div":
        console.log(this.div(operation, numbers));
        break;
      default:
        console.log("Unknown operation");
    }
  };

  init = () => {
    this.actionHandler(this.operation, this.numbers);
  };
}

const [operation, ...numbers] = process.argv.slice(2);
const arrOfNumbers = numbers.map((el) => Number(el));

module.exports = new Calculator(operation, arrOfNumbers);
