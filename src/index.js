import "./styles.css"

const homeBtn = document.getElementById("home")
const menuBtn = document.getElementById("menu")
const aboutBtn = document.getElementById("about")

homeBtn.addEventListener("click", () => {
    alert("home button pressed")
});

menuBtn.addEventListener("click", () => {
    alert("menu button pressed")
});

aboutBtn.addEventListener("click", () => {
    alert("about button pressed")
});