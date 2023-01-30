const siteMenu = () => {

    // Get element from DOM
    const menuButton = document.querySelector('.menu-button')
    const menu = document.querySelector('.site-menu')
    const bookButton = document.querySelector('.site-header__button')

    // Toggle Menu
    const toggleMenu = () => {
        menu.classList.toggle('site-menu--visible')
        menuButton.classList.toggle('menu-button--close')
        bookButton.classList.toggle('site-header__button--menu-opened')
    }

    // Create Event
    menuButton.addEventListener('click', toggleMenu)


    console.log('Menu started...')
}

siteMenu()