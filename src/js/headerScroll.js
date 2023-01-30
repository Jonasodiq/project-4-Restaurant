const headerScroll = () => {

    // Get element from DOM
    const header = document.querySelector('.site-header')

    // Toggle Header Class
    const toggleHeaderClass = () => {

        if (window.scrollY > 350) {

            header.classList.add('site-header--scroll')
        } else {
            header.classList.remove('site-header--scroll')
        }
    }

    window.addEventListener('scroll', toggleHeaderClass)
}

headerScroll()