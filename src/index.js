import "./styles.css"
import { loadHome } from "./home"
import { loadMenu } from "./menu"
import { loadAbout } from "./about"

const homeBtn = document.getElementById("home")
const menuBtn = document.getElementById("menu")
const aboutBtn = document.getElementById("about")

function clearContent() {
    const content = document.querySelector("main")
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
    
}

homeBtn.addEventListener("click", () => {
    clearContent();
    loadHome();
});

menuBtn.addEventListener("click", () => {
    clearContent();
    loadMenu();
});

aboutBtn.addEventListener("click", () => {
    clearContent();
    loadAbout();
});

loadHome();