const menu = document.querySelector('.menu-navbar')
const menuList = ["Accueil", "Projets", "Formations", "Experiences", "Contact"]
const home = document.querySelector('#home')

// NAVBAR
for (let i = 0; i < menuList.length; i++) {
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.setAttribute('href', '#' + menuList[i].toLocaleLowerCase())
    a.append(menuList[i].toUpperCase())
    li.append(a)
    menu.appendChild(li)
}

// HOME
