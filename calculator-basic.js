// sum
// sub
// mult
// div

const [operation, ...numbers] = process.argv.slice(2);

// if (operation === "sum") {
//   let result = numbers.map((el) => Number(el)).reduce((acc, el) => acc + el, 0);
//   console.log(`sum equals ${result}`);
// }

const sum = (operation, numbers) =>
  numbers.map((el) => Number(el)).reduce((acc, el) => acc + el, 0);

// if (operation === "sub") {
//   let result = numbers.map((el) => Number(el)).reduce((acc, el) => acc - el);
//   console.log(`sub equals ${result}`);
// }

const sub = (operation, numbers) =>
  numbers.map((el) => Number(el)).reduce((acc, el) => acc - el);

// if (operation === "mult") {
//   let result = numbers.map((el) => Number(el)).reduce((acc, el) => acc * el);
//   console.log(`mult equals ${result}`);
// }

const mult = (operation, numbers) =>
  numbers.map((el) => Number(el)).reduce((acc, el) => acc * el);

// if (operation === "div") {
//   let result = numbers.map((el) => Number(el)).reduce((acc, el) => acc / el);
//   console.log(`div equals ${result}`);
// }

const div = (operation, numbers) =>
  numbers.map((el) => Number(el)).reduce((acc, el) => acc / el);

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
