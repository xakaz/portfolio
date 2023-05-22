////////////////////////////// NAVBAR

const menuList = ["Accueil", "Projets", "Formations", "Experiences", "Contact"]

const menu = document.querySelector('ul')
const cross = document.querySelector('#cross')
const burger = document.querySelector('#burger')

for (let i = 0; i < menuList.length; i++) {
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.setAttribute('href', '#' + menuList[i].toLocaleLowerCase())
    li.classList.add("menu-element") 
    a.append(menuList[i].toUpperCase())
    li.append(a)
    menu.appendChild(li)
}

function changeCrossDisplayMode(){
    if (getComputedStyle(cross).display === "block"){
        cross.style.display = "none"
        burger.style.display = "block"
        menu.style.display = "none"
    }
}

function changeBurgerDisplayMode(){
    if (getComputedStyle(burger).display === "block"){
        cross.style.display = "block"
        burger.style.display = "none"
        menu.style.display = "flex"
    }
}

cross.addEventListener('click',changeCrossDisplayMode)
burger.addEventListener('click',changeBurgerDisplayMode)

const menuElement = document.querySelectorAll('.menu-element')

for (let i = 0; i < menuElement.length ; i++){
    menuElement[i].addEventListener('click', changeCrossDisplayMode)
}

