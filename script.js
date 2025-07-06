const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close-icon')
const goToTopBtn = document.querySelector('.go-to-top')

hamburgerIcon.addEventListener('click', () => {
  headerContent.classList.add('menu-open')
})

closeIcon.addEventListener('click', () => {
  headerContent.classList.remove('menu-open')
})

goToTopBtn.addEventListener('click', () => {
  goToTopBtn.scrollTo(0, 0)
})
