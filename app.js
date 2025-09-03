// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')
const moonBtn = document.getElementById('moon')
const sunBtn = document.getElementById('sun')
const body = document.querySelector('body')

navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links')
})

// ===== Dark Mode =====
moonBtn.addEventListener('click', () => {
    if (!body.classList.contains('dark_mode')){
      body.classList.add('dark_mode')
      moonBtn.src = 'img/dark_mode_moon.svg'
      sunBtn.src = 'img/dark_mode_sun.svg'
    }
  }
)

sunBtn.addEventListener('click', () => {
  if (body.classList.contains('dark_mode')){
      body.classList.remove('dark_mode')
      moonBtn.src = 'img/light_mode_moon.svg'
      sunBtn.src = 'img/light_mode_sun.svg'
    }
})