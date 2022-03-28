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

document.addEventListener("keydown", (e) => {
    keyPressed.textContent = e.which;
    key.textContent = e.key.toUpperCase();
    which.textContent = e.which;
    code.textContent = e.code;
});

