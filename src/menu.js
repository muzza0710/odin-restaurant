function loadMenu() {
    const menuItems = ["Eggs", "Burger", "Chips"]
    const main = document.querySelector("main")
    const content = document.createElement("div")
    content.id = "content"
    const heading = document.createElement("h1")
    heading.textContent = "Main Menu"
    const menu = document.createElement("ul")
    for (const item of menuItems){
        const listItem = document.createElement("li")
        listItem.textContent = item;
        menu.appendChild(listItem);
    }
    content.appendChild(heading)
    content.appendChild(menu)
    main.appendChild(content)
}

export {loadMenu}