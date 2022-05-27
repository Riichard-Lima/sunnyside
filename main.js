function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duaration: '700'
}).reveal(
  '#home, #home img, #services, #services header, #about, #about header, #about .content'
)

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duaration: '2000'
}).reveal('#home .stats')

ScrollReveal({
  origin: 'left',
  distance: '30px',
  duaration: '200000000000.000'
}).reveal('#services .card')
