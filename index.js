const numEls = Array.from(document.querySelectorAll(".number"));
const btnEls = Array.from(document.querySelectorAll(".button"));
const opEls = Array.from(document.querySelectorAll(".operators"));
const clear = document.querySelector("#clear");
const text = document.querySelector("#display");
const deleteEl = document.querySelector("#delete");

let a = undefined;
let b = undefined;
let input = "";

btnEls.forEach((btns) => {
  btns.addEventListener("click", () => {
    input = input + btns.innerText;
    console.log("input: ", input);
    text.innerText = input;
  });
});

clear.addEventListener("click", () => {
    input = "";
    text.innerText = input;
});

deleteEl.addEventListener("click", () => {  
    input = input.substring(0, input.length-1);
    text.innerText = input
})
