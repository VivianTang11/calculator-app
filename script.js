const displayScreen = document.querySelector('.display-screen')
const numberBtns = document.querySelectorAll('.number')
const operatorBtns = document.querySelectorAll('.operator')
const delBtn = document.querySelectorAll('.del')
const resetBtn = document.querySelectorAll('.reset')
const equalBtn = document.querySelectorAll('.equal')


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

toggleTheme()