const displayScreen = document.querySelector('.display-screen')
const numberBtns = document.querySelectorAll('.number')
const operatorBtns = document.querySelectorAll('.operator')
const delBtn = document.querySelector('.del')
const resetBtn = document.querySelector('.reset')
const equalBtn = document.querySelector('.equal')
const buttons = document.querySelectorAll('.buttons')


const bodyElem = document.querySelector("body");
let toggleBtns = document.getElementsByClassName("toggle");
let arr = [...toggleBtns];

const toggleTheme = () => {
    arr.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.style.opacity = "1";
        arr.filter((item) => { return item != btn}).forEach((item) => { item.style.opacity = "0"});
        document.body.addEventListener("change", (e) => {
            let target = e.target;
            switch (target.id) {
              case "one":
                bodyElem.setAttribute("data-theme", "one");
                break;
              case "two":
                bodyElem.setAttribute("data-theme", "two");
                break;
              case "three":
                bodyElem.setAttribute("data-theme", "three");
                break;
            }
          });
        
      });
    });
}

const clickedBtns = () => {
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            op = btn.textContent
            display(op)
        })
    })
}

let text = ''
const display = (op) => {
    text += op
    displayScreen.innerHTML = `${text}`
    return text
}

const calculate = () => {
    equalBtn.addEventListener('click', () => {
        console.log(display(op));
    })
}

toggleTheme()
clickedBtns()
calculate()
