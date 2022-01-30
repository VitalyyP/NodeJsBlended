class Calculator {
  // constructor(operation, numbers) {
  //   this.operation = operation;
  //   this.numbers = numbers;
  // }
  static sum = (operation, numbers) => {
    if (operation === "sum") {
      return numbers.reduce((acc, el) => acc + el, 0);
    }
    return null;
  };

  static sub = (operation, numbers) => {
    if (operation === "sub") {
      return numbers.reduce((acc, el) => acc - el);
    }
    return null;
  };

  static mult = (operation, numbers) => {
    if (operation === "mult") {
      return numbers.reduce((acc, el) => acc * el);
    }
    return null;
  };

  static div = (operation, numbers) => {
    if (operation === "div") {
      return numbers.reduce((acc, el) => acc / el);
    }
    return null;
  };

  static actionHandler = (operation, numbers) => {
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

  static init = (operation, numbers) => {
    this.actionHandler(operation, numbers);
  };
}

const [operation, ...numbers] = process.argv.slice(2);
const arrOfNumbers = numbers.map((el) => Number(el));

module.exports = Calculator.init(operation, arrOfNumbers);
