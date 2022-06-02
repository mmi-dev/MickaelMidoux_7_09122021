const filterMenu = document.querySelectorAll('.select-menu__category')
const filterBtn = document.querySelectorAll('.category__btn')

// management of the opening and closing of sorting menus
document.addEventListener('click', (e) => {
  if (!e.target.closest('.category')) {
    filterMenu.forEach((menu) => {
      menu.classList.remove('active')
    })
  } else {
    filterMenu.forEach((menu) => {
      if (!menu.contains(e.target)) {
        menu.classList.remove('active')
      } else {
        if (e.target.classList.contains('category__btn')) {
          menu.classList.toggle('active')
        } else {
          menu.classList.add('active')
        }
      }
    })
  }
})
