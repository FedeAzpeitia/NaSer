const hamburger = document.getElementById('hamburguer')
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')

let menuOpen = false

function openMenu() {
    menuOpen = true
    overlay.style.display = 'block'
    sidebar.style.display = '300px'
}

function closeMenu() {
    menuOpen = false
    overlay.style.display = 'none'
    sidebar.style.display = '0px'
}


hamburger.addEventListener('click', function() {
    if (!menuOpen) {
        openMenu()
    }
})


overlay.addEventListener('click', function() {
    if (menuOpen) {
        closeMenu()
    }
})