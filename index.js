const numEls = document.querySelectorAll(".number");
const btnEls = document.querySelectorAll(".button");
const opEls = document.querySelectorAll(".operator");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const time = document.querySelector("#times");
const divide = document.querySelector("#divide");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const text = document.querySelector("#display");
const deleteEl = document.querySelector("#delete");

let a = undefined;
let b = undefined;
let input = "";
let state = "waitForA";
let operate;
let result;
let op;
console.log("operate", operate);
// setAB();

opEls.forEach((op) => {
  op.addEventListener("click", () => {
    console.log("op", op.innerText);
    console.log("operate", operate);
    if (state === "waitForA") {
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
  });
});

clear.addEventListener("click", () => {
  input = "";
  text.innerText = input;
});

deleteEl.addEventListener("click", () => {
  input = input.substring(0, input.length - 1);
  text.innerText = input;
});

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

function calculate() {
  // if (operate === "+") {
  //   console.log("a", a);
  //   console.log("b", b);
  //   console.log("typeof a", typeof a);
  //   console.log("typeof b", typeof b);

  //   result = a + b;
  //   text.innerText = "";
  //   text.innerText = result;
  // }
  // if (operate === "-") {
  //   result = a - b;
  //   text.innerText = "";
  //   text.innerText = result;
  // }
  // if (operate === "*") {
  //   result = a * b;
  //   text.innerText = "";
  //   text.innerText = result;
  // }
  // if (operate === "/") {
  //   result = a / b;
  //   text.innerText = "";
  //   text.innerText = result;
  // }
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

function setAB() {
  plus.addEventListener("click", () => {
    if (state === "waitForA") {
      a = +input;
      operate = "+";
      console.log(operate);
      console.log("a:", a);
      input = "";
      state = "waitForB";
    } else {
      b = +input;
      operate = "plus";
      console.log("b:", b);
      state = "waitForA";
    }
  });
  minus.addEventListener("click", () => {
    if (state === "waitForA") {
      a = +input;
      operate = "-";
      console.log(operate);
      console.log("a:", a);
      input = "";
      state = "waitForB";
    } else {
      b = +input;
      operate = "minus";
      console.log("b:", b);
      state = "waitForA";
    }
  });
  time.addEventListener("click", () => {
    if (state === "waitForA") {
      a = +input;
      operate = "*";
      console.log(operate);
      console.log("a:", a);
      input = "";
      state = "waitForB";
    } else {
      b = +input;
      operate = "time";
      console.log("b:", b);
      state = "waitForA";
    }
  });
  divide.addEventListener("click", () => {
    if (state === "waitForA") {
      a = +input;
      operate = "/";
      console.log(operate);
      console.log("a:", a);
      input = "";
      state = "waitForB";
    } else {
      b = +input;
      operate = "divide";
      console.log("b:", b);
      state = "waitForA";
    }
  });
  
}
