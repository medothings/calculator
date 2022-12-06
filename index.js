const numEls = document.querySelectorAll(".number");
const opEls = document.querySelectorAll(".operator");
// const plus = document.querySelector("#plus");
// const minus = document.querySelector("#minus");
// const time = document.querySelector("#times");
// const divide = document.querySelector("#divide");
const decimalEl = document.querySelector("#decimal");
// const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const text = document.querySelector("#display");
const deleteEl = document.querySelector("#delete");
const zero = document.querySelector("#zero");

let a = undefined;
let b = undefined;
let input = "";
let state = "waitForA";
let operate;
let result;
let op;
let decimal = true;
console.log("operate", operate);

// equal.addEventListener("click", () => {
//   console.log(state);
//   if (state === "waitForA") {
//     a = +input;
//     text.innerText = a;
//     console.log("a:", a);
//   } else {
//     b = +input;
//     console.log("b", b);
//     state = "waitForA";
//     calculate();
//     input = "";
//   }
// });

opEls.forEach((op) => {
  op.addEventListener("click", () => {
    console.log("op", op.innerText);
    console.log("operate", operate);
    switch (state) {
      case "waitForA":
        a = +input;
        operate = op.innerText;
        input = "";
        state = "waitForB";
        break;
      case "waitForB":
        b = +input;
        calculate();
        operate = op.innerText;
        a = result
        state = "waitForB"
        input = "";
        break;

      default:
        break;
    }
  });
});

numEls.forEach((num) => {
  num.addEventListener("click", () => {
    console.log("num", num.innerText);
    input = input + num.innerText;
    console.log("input", input);
    text.innerText = input;
    if (input === "0") {
      console.log(num);
      reset();
      input = num.innerText;
      text.innerText = input;
    }
    if (text.innerText === result) {
      reset();
    }
  });
});

zero.addEventListener("click", () => {
  console.log("0");
  if (input !== "0") {
    input = input + "0";
    text.innerText = input;
  }
});

clear.addEventListener("click", () => {
  reset();
});

deleteEl.addEventListener("click", () => {
  backspace();
  if (input.includes(".")) {
  } else {
    decimal = true;
  }
});

function calculate() {
  switch (operate) {
    case "+":
      result = a + b;
      text.innerText = "";
      text.innerText = result;
      break;
    case "-":
      result = a - b;
      text.innerText = "";
      text.innerText = result;
      break;
    case "*":
      result = a * b;
      text.innerText = "";
      text.innerText = result;
      break;
    case "/":
      result = a / b;
      text.innerText = "";
      text.innerText = result;
      break;

    default:
      break;
  }
  console.log("result", result);
}

decimalEl.addEventListener("click", () => {
  if (decimal === true) {
    input = input + ".";
    text.innerText = input;
    decimal = false;
  }
});

function backspace() {
  input = input.substring(0, input.length - 1);
  text.innerText = input;
}

function reset() {
  input = "";
  text.innerText = input;
  state = "waitForA";
  decimal = true;
}
// if (input != "") {
//   input = input + num
// }
