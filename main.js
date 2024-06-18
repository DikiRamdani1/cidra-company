const lightNight = document.getElementById("flexSwitchCheckDefault")
const body = document.body
const navbar = document.getElementById("nav")
const headText = document.querySelectorAll(".headText")
const bodyText = document.querySelectorAll(".bodyText")
const bodyIcon = document.querySelectorAll(".bodyIcon")
const dropdownMenu = document.querySelectorAll(".dropdown-menu-lightDark")
const dropdownLink = document.getElementById("dropdownLink")
const offcanvas = document.querySelector(".offcanvas")
const btn = document.querySelectorAll(".myBtn")
const imgGalery = document.querySelectorAll(".imgGalery")
const cardTextImg = document.querySelectorAll(".cardTextImg")
const storageLightNight = localStorage.getItem("status")
const tabText = document.querySelectorAll(".tabText")
const tabPane = document.querySelectorAll(".tab-pane")
const containerShowImg = document.getElementsByClassName("containerShowImg")
const showImg = document.getElementsByClassName("showImg")
const closeShowImg = document.getElementsByClassName("closeShowImg")
lightNight.checked = storageLightNight == "night" ? true : false

const handleLightNight = () => {
    if (lightNight.checked == true) {
        body.setAttribute('class', 'bg-dark')
        navbar.setAttribute('class', 'nav bg-dark d-flex align-items-center justify-content-between shadow')
        dropdownLink.setAttribute('class', 'nav-link dropdown-toggle text-white text-opacity-50')
        offcanvas.setAttribute("class", "offcanvas offcanvas-end w-75 bg-dark")
        localStorage.setItem("status", "night")

        for (let i = 0; i < headText.length; i++) {
            headText[i].setAttribute('class', 'headText text-white font-sansita')
        }

        for (let i = 0; i < bodyText.length; i++) {
            bodyText[i].setAttribute('class', 'bodyText nav-link text-white text-opacity-50 text-white-hover')
        }

        for (let i = 0; i < dropdownMenu.length; i++) {
            dropdownMenu[i].setAttribute('class', 'dropdown-menu dropdown-menu-lightDark dropdown-menu-dark bg-dark')
        }

        for (let i = 0; i < bodyIcon.length; i++) {
            bodyIcon[i].style.color = 'white'
        }

    } else {
        body.setAttribute('class', 'bg-white')
        navbar.setAttribute('class', 'nav bg-white text-secondary d-flex align-items-center justify-content-between shadow')
        dropdownLink.setAttribute('class', 'nav-link dropdown-toggle')
        offcanvas.setAttribute("class", "offcanvas offcanvas-end w-75")
        localStorage.setItem("status", "light")

        for (let i = 0; i < headText.length; i++) {
            headText[i].setAttribute('class', 'headText text-dark font-sansita')
        }

        for (let i = 0; i < bodyText.length; i++) {
            bodyText[i].setAttribute('class', 'bodyText nav-link text-dark text-opacity-50 text-opacity-100-hover')
        }

        for (let i = 0; i < dropdownMenu.length; i++) {
            dropdownMenu[i].setAttribute('class', 'dropdown-menu dropdown-menu-lightDark')
        }

        for (let i = 0; i < bodyIcon.length; i++) {
            bodyIcon[i].style.color = 'black'
        }

    }
}

handleLightNight()


lightNight.addEventListener('change', () => {
    handleLightNight()
})

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mouseover', () => {
        btn[i].style.transition = "0.4s"
        btn[i].style.background = "transparent"
    })
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mouseout', () => {
        btn[i].style.transition = "0.4s"
        btn[i].style.background = "#ff8037"
    })
}

for (let i = 0; i < imgGalery.length; i++) {
    imgGalery[i].addEventListener('mouseover', () => {
        cardTextImg[i].setAttribute("class", "container-fluid h-100 pt-3 d-flex cardTextImg flex-column justify-content-center position-absolute top-0 bg-dark opacity-75")
        imgGalery[i].style.cursor = "pointer"
        cardTextImg[i].style.cursor = "pointer"
    })
}

for (let i = 0; i < cardTextImg.length; i++) {
    cardTextImg[i].addEventListener('mouseover', () => {
        cardTextImg[i].setAttribute("class", "container-fluid h-100 pt-3 d-flex cardTextImg flex-column justify-content-center position-absolute top-0 bg-dark opacity-75")

    })
}

for (let i = 0; i < cardTextImg.length; i++) {
    cardTextImg[i].addEventListener('mouseout', () => {
        cardTextImg[i].setAttribute("class", "container-fluid h-100 pt-3 d-none cardTextImg flex-column justify-content-center position-absolute top-0 bg-dark opacity-75")

    })
}

for (let i = 0; i < cardTextImg.length; i++) {
    cardTextImg[i].addEventListener('click', () => {
        containerShowImg[0].style.transition = "0.4s"
        containerShowImg[0].style.height = "100vh"
        showImg[0].src = imgGalery[i].src
    })
}

if (closeShowImg.length == 1) {
    closeShowImg[0].addEventListener('click', () => {
        containerShowImg[0].style.transition = "0.4s"
        containerShowImg[0].style.height = "0"
        containerShowImg[0].style.paddingTop = "0"
    })
} else {
    null
}

const handleTabPane = (e1, e2, e3) => {
    e1.setAttribute("class", "tab-pane fade show active d-flex justify-content-center")
    e2.setAttribute("class", "tab-pane fade")
    e3.setAttribute("class", "tab-pane fade")
}

if (tabText.length == 3) {
    tabText[0].addEventListener('click', () => {
        handleTabPane(tabPane[0], tabPane[1], tabPane[2])
    })

    tabText[1].addEventListener('click', () => {
        handleTabPane(tabPane[1], tabPane[0], tabPane[2])
    })

    tabText[2].addEventListener('click', () => {
        handleTabPane(tabPane[2], tabPane[0], tabPane[1])
    })
} else {
    null
}

(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
const Inama = document.querySelector(".Inama")
const Ipesan = document.querySelector(".Ipesan")
const Itelepon = document.querySelector(".Itelepon")
const namaPesan = document.getElementById("namaPesan")
const isiPesan = document.getElementById("isiPesan")

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        namaPesan.textContent = Inama.value
        isiPesan.textContent = Ipesan.value
        if (Inama.value && Ipesan.value && Itelepon.value) {
            toastBootstrap.show()
        } else {
            null
        }
    })
}