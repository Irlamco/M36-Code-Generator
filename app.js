const keyPressed = document.getElementById("keyPressed");
const key = document.getElementById("key-value");
const which = document.getElementById("which-value");
const code = document.getElementById("code-value");
const start = document.getElementById("firstPage");
const main = document.getElementById("mainPage");

document.addEventListener("click", () => {
    start.style.display = "none";
    main.style.display = "block";
})

document.addEventListener("keydown", (event) => {
    keyPressed.textContent = event.which;
    key.textContent = event.key.toUpperCase();
    which.textContent = event.which;
    code.textContent = event.code;
});

