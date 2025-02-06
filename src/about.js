function loadAbout() {
    const main = document.querySelector("main")
    const content = document.createElement("div")
    content.id = "content"
    const heading = document.createElement("h1")
    heading.textContent = "Restaurant Name"
    const para = document.createElement("p")
    para.textContent = "Some text about the restaurant!"
    const contactInfo = document.createElement("p")
    contactInfo.textContent = "this is the contact info"
    content.appendChild(heading)
    content.appendChild(para)
    content.appendChild(contactInfo)
    main.appendChild(content)
}

export {loadAbout}