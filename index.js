const numEls = document.querySelectorAll(".number");
const btnEls = document.querySelectorAll(".button");
const opEls = document.querySelectorAll(".operator");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const time = document.querySelector("#times");
const divide = document.querySelector("#divide");
const decimalEl = document.querySelector("#decimal");
const equal = document.querySelector("#equal");
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

equal.addEventListener("click", () => {
  console.log(state);
  if (state === "waitForA") {
    a = +input;
    text.innerText = a;
    console.log("a:", a);
  } else {
    b = +input;
    console.log("b", b);
    state = "waitForA";
    calculate();
    input = "";
  }
});

opEls.forEach((op) => {
  op.addEventListener("click", () => {
    console.log("op", op.innerText);
    console.log("operate", operate);
    if (text.innerText === result) {
      a = +result;
      console.log("typeof result", typeof(result));
      state = "waitForB";
    } else if (state === "waitForA") {
      a = +input;
      operate = op.innerText;
      console.log(operate);
      console.log("a:", a);
      input = "";
      state = "waitForB";
    } else {
      b = +input;
      operate = op;
      console.log("b:", b);
      state = "waitForA";
    }
  });
});

numEls.forEach((num) => {
  num.addEventListener("click", () => {
    console.log("num", num.innerText);
    input = input + num.innerText;
    console.log("input", input);
    text.innerText = input;
    if (text.innerText === result) {
      input = "";
      text.innerText = input;
    }
  });
});

clear.addEventListener("click", () => {
  input = "";
  text.innerText = input;
});

deleteEl.addEventListener("click", () => {
  backspace();
});

function calculate() {
  switch (operate) {
    case "+":
      result = a + b;
      text.innerText = "";
      text.innerText = result;
      break;
    case "-":
      result = a - +b;
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

zero.addEventListener("click", () => {
  if (input === "") {
    backspace();
  }
});

decimalEl.addEventListener("click", () => {
  if (input.includes("..")) {
    backspace()
  }
});

function backspace() {
  input = input.substring(0, input.length - 1);
  text.innerText = input;
}
