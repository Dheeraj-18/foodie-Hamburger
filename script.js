const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close-icon')
const goToTopBtn = document.querySelector('.go-to-top')
const nav = document.querySelector('nav')

hamburgerIcon.addEventListener('click', (e) => {
  e.stopPropagation()
  headerContent.classList.add('menu-open')
})

closeIcon.addEventListener('click', () => {
  headerContent.classList.remove('menu-open')
})

nav.addEventListener('click', (e) => {
  e.stopPropagation()
})

window.addEventListener('click', () => {
  headerContent.classList.remove('menu-open')
})

goToTopBtn.addEventListener('click', () => {
  goToTopBtn.scrollTo(0, 0)
})
