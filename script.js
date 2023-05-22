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

function changeCrossDisplayMode() {
    if (getComputedStyle(cross).display === "block") {
        cross.style.display = "none"
        burger.style.display = "block"
        menu.style.display = "none"
    }
}

function changeBurgerDisplayMode() {
    if (getComputedStyle(burger).display === "block") {
        cross.style.display = "block"
        burger.style.display = "none"
        menu.style.display = "flex"
    }
}

cross.addEventListener('click', changeCrossDisplayMode)
burger.addEventListener('click', changeBurgerDisplayMode)

const menuElement = document.querySelectorAll('.menu-element')

for (let i = 0; i < menuElement.length; i++) {
    menuElement[i].addEventListener('click', changeCrossDisplayMode)
    menuElement[i].addEventListener('mouseenter', () => {
        menuElement[i].style.transform = 'scale(1.2,1.2)'
        menuElement[i].style.transition = 'transform 0.5s ease-in-out'
    })
    menuElement[i].addEventListener('mouseleave', () => {
        menuElement[i].style.transform = 'scale(1,1)'
        menuElement[i].style.transition = 'transform 0.5s ease-in-out'
    })
}

////////////////////////////// PROJECTS

const projects = document.querySelector('#list-projects')

const listOfProjects = [
    ['hypnos', 'https://hypnos-three.vercel.app/'], ['watowatch', "https://tv-shows-data.vercel.app/"]
]

for (let i = 0; i < listOfProjects.length; i++) {
    let p = document.createElement('h2')
    let a = document.createElement('a')
    let img = document.createElement('img')
    let div = document.createElement('div')

    div.style.display = "flex"
    div.style.alignItems = "center"
    div.style.gap = "10px"

    img.setAttribute('src', './assets/images/' + listOfProjects[i][0] + '/logo.png')
    img.style.width = "80px"
    img.style.padding = "10px"
    img.style.borderRadius = "20px"

    a.setAttribute('href', listOfProjects[i][1])
    a.classList.add("link-project")

    div.classList.add("label-project")

    a.append(listOfProjects[i][0].toUpperCase())
    p.append(a)
    div.appendChild(img)
    div.appendChild(p)
    projects.appendChild(div)
}

////////////////////////////// TRAINING

const training = document.querySelector('#training')

const trainingInfo = [
    [
        '2022',
        'Développeur web & web mobile',
        'Titre professionnel niveau 5',
        'Studi'
    ],
    [
        '2002',
        'Action & communication commerciale',
        'Baccalauréat',
        'Lycée Marcelin Berthelot - Toulouse'
    ]
]

for (let i = 0; i < trainingInfo.length ; i++){
    const divTraining = document.createElement('div')
    const h2TrainingDate = document.createElement('h2')
    const h2LabelTraining = document.createElement('h2')
    
    h2TrainingDate.append(trainingInfo[i][0])
    h2TrainingDate.style.marginRight = '20px'

    h2LabelTraining.append(trainingInfo[i][1])
    
    divTraining.appendChild(h2TrainingDate)
    divTraining.appendChild(h2LabelTraining)
    divTraining.style.display = 'flex'
    divTraining.style.alignItems = 'center'
    divTraining.style.gap = "10px"
    divTraining.style.padding = "10px"
    
    training.appendChild(divTraining)
}

////////////////////////////// ALL

const link = document.querySelectorAll('.link')
const label = document.querySelectorAll('.label')
const linkContact = document.querySelectorAll('.link-contact')

for (let i = 0; i < link.length; i++) {
    label[i].addEventListener('mouseenter', () => {
        link[i].style.color = "rgb(255, 148, 110)"

    })
    label[i].addEventListener('mouseleave', () => {
        link[i].style.color = "transparent"
    })
}
