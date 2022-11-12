const display = document.querySelector(".display")
const buttons  = document.querySelectorAll("button")

buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id == "reset") {
            display.innerText = "0"
        }else if (item.id == "backspace") {
            let string = display.innerText.toString()
            display.innerText = string.substr(0, string.length - 1)
        }else if(display.innerText != "" && item.id == "equal") {
            display.innerText = eval(display.innerText)
        }else if (display.innerText == "" && item.id == "equal") {
            display.innerText = "Empty!"
            setTimeout(() => (display.innerText = ""), 2000)
        }else {
            display.innerText += item.id
        }
    }
})
const links = document.querySelectorAll("link");
const themeToggleBtn = document.querySelectorAll("input")

function themeChange(i) {
    if(i === "0"){
        links[2].setAttribute("href", "");
    } else {
        links[2].setAttribute("href", `css/theme${i}.css`);
    }
}

themeToggleBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        themeChange(btn.value);
    });
})


