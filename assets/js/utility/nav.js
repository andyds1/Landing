// Initialize burger menu for mobile navigation
function initBurgerMenu () {
  const burgerMenu = document.querySelector('.burger-menu')
  const mainNav = document.querySelector('nav.main-nav')

  if (!burgerMenu) return

  burgerMenu.addEventListener('click', function () {
    this.classList.toggle('active')
    mainNav.classList.toggle('active')
  })

  // Close menu when clicking a nav link
  const navLinks = mainNav.querySelectorAll('a')
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      burgerMenu.classList.remove('active')
      mainNav.classList.remove('active')
    })
  })
}

export { initBurgerMenu }