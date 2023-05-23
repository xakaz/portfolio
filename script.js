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
    [
        'hypnos', 
        'https://hypnos-three.vercel.app/', 
        "Projet Titre Professionnel Niv 5"
    ], 
    [
        'watowatch', 
        "https://tv-shows-data.vercel.app/", 
        "Formation Udemy"
    ]
]

for (let i = 0; i < listOfProjects.length; i++) {
    let p = document.createElement('h2')
    let a = document.createElement('a')
    let img = document.createElement('img')
    let div = document.createElement('div')
    let span = document.createElement('span')

    div.style.display = "flex"
    div.style.alignItems = "center"
    div.style.gap = "10px"

    span.innerText = listOfProjects[i][2]
    span.style.fontStyle = "oblique"
    span.style.fontWeight = "normal"
    span.style.marginLeft = "15px"
    span.style.color = "rgb(255, 148, 110)"

    img.setAttribute('src', './assets/images/' + listOfProjects[i][0] + '/logo.png')
    img.style.width = "80px"
    img.style.padding = "10px"
    img.style.borderRadius = "20px"

    a.setAttribute('href', listOfProjects[i][1])
    a.setAttribute('target', '_blank')
    a.classList.add("link-project")

    div.classList.add("label-project")

    a.append(listOfProjects[i][0].toUpperCase())
    p.append(a)
    p.append(span)
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
        'Action & Communication Commerciale',
        'Baccalauréat',
        'Lycée Marcelin Berthelot - Toulouse'
    ]
]

for (let i = 0; i < trainingInfo.length; i++) {
    const divTraining = document.createElement('div')
    divTraining.style.display = "flex"
    divTraining.style.marginBottom = "10px"

    const divDateTraining = document.createElement('div')

    const divTitleTraining = document.createElement('div')
    const divCompanyTraining = document.createElement('div')

    const h2TrainingDate = document.createElement('h2')
    const h2LabelTraining = document.createElement('h2')
    const pCompanyTraining = document.createElement('p')

    h2TrainingDate.append(trainingInfo[i][0])

    h2LabelTraining.append(trainingInfo[i][1])
    h2LabelTraining.style.color = "rgb(255, 148, 110)"

    pCompanyTraining.append(trainingInfo[i][2] + " - " + trainingInfo[i][3])

    divDateTraining.appendChild(h2TrainingDate)
    divTitleTraining.appendChild(h2LabelTraining)
    divTitleTraining.appendChild(pCompanyTraining)
    // divTitleTraining.style.display = 'flex'
    // divTitleTraining.style.alignItems = 'center'

    divTraining.appendChild(divDateTraining)
    divTraining.appendChild(divTitleTraining)
    training.appendChild(divTraining)
}

////////////////////////////// XP

const xp = document.querySelector('#xp')

const xpList = [
    [
        "2023", 
        "Tikilearning", 
        "Stage Développeur FullStack", 
        [
            ["python", "Création de modules Odoo"],
            ["odoo","Création de modules avec Python"], 
            ["vuejs", "Création de l'UI, Mobile First & Responsive"], 
            ["tailwind", "Création de l'UI, Mobile First & Responsive"], 
            ["jira", "Méthode Agile, US, Tickets, Sprint"], 
            ["docker", "Utilisation de conteneur"]
        ]
    ],
    [
        "2022",
        "Hypnos",
        "Projet Titre Professionnel",
        [
            ["react", "Création de l'UI, Mobile First & Responsive"],
            ["php", "Interface Administrateur, API"],
            ["git", "Gestion du versionning"],
            ["bootstrap", "Création de l'UI, Mobile First & Responsive"],
            ["mysql", "Gestion C.R.U.D."]
        ]
    ],
]

for (let i = 0; i < xpList.length; i++) {

    const xpDate = document.createElement('h2')
    const xpCompany = document.createElement('h2')
    const xpProfil = document.createElement('h2')
    const xpImgDivContainer = document.createElement('div')
    const divTextXp = document.createElement('div')
    const textXp = document.createElement('p')


    xpImgDivContainer.style.display = "flex"
    xpImgDivContainer.style.gap = "10px"

    divTextXp.style.display = "flex"
    divTextXp.style.alignItems = "center"
    divTextXp.style.height = "50px"

    xpDate.append(xpList[i][0])
    xpCompany.append(xpList[i][1])
    xpCompany.style.color = "rgb(255, 148, 110)"
    xpProfil.append(xpList[i][2])

    const div = document.createElement('div')
    div.style.display = "flex"
    // div.style.width = "100%"
    div.appendChild(xpDate)
    div.appendChild(xpCompany)
    div.appendChild(xpProfil)

    xp.appendChild(div)

    for (let y = 0; y < xpList[i][3].length; y++) {

        let imgDivxp = document.createElement('div')
        let imgxp = document.createElement('img')
        let language = xpList[i][3][y][0].toUpperCase()
        let languageDescription = xpList[i][3][y][1]

        imgDivxp.style.display = "flex"
        imgDivxp.style.height = "50px"
        imgDivxp.style.marginTop = "10px"
        imgDivxp.style.borderRadius = "10px"
        imgDivxp.style.alignItems = "center"
        imgDivxp.style.background = "rgba(255,255,255,1)"


        imgSrc = `./assets/icons/${xpList[i][3][y][0]}.png`
        imgxp.setAttribute('src', imgSrc)
        imgxp.style.filter = 'grayscale(1)'
        imgxp.style.margin = "5px"
        imgxp.style.height = "80%"
        imgxp.style.cursor = "pointer"
        imgxp.addEventListener('mouseenter', () => {
            imgxp.style.filter = 'grayscale(0)'
        })
        imgxp.addEventListener('mouseleave', () => {
            imgxp.style.filter = 'grayscale(1)'
        })
        imgxp.addEventListener('click', () => {
            textXp.innerText = language + " : " + languageDescription
        })

        divTextXp.appendChild(textXp)
        imgDivxp.append(imgxp)
        xpImgDivContainer.appendChild(imgDivxp)
    }
    xp.appendChild(xpImgDivContainer)
    xp.appendChild(divTextXp)
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
