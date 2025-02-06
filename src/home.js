function loadHome() {
    const main = document.querySelector("main")
    const content = document.createElement("div")
    content.id = "content"
    const heading = document.createElement("h1")
    heading.textContent = "Restaurant Name"
    const para = document.createElement("p")
    para.textContent = "Some text about the restaurant!"
    content.appendChild(heading)
    content.appendChild(para)
    main.appendChild(content)
}

export {loadHome}