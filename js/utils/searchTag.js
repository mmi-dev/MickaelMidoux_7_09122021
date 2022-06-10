const searchTagInputs = document.querySelectorAll('.category__input')

function searchTag() {
  // keyword to search in tags
  const keyword = this.value
  // innit filtered list of option
  let filteredList
  // filter list function
  const tagList = (list) => {
    return list.filter((tag) => {
      return tag.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    })
  }
  // filter
  switch (this.dataset.type) {
    case 'ingredients':
      filteredList = tagList(ingredientsList)
      break
    case 'appareils':
      filteredList = tagList(applianceList)
      break
    case 'ustensiles':
      filteredList = tagList(ustensilsList)
      break
    default:
  }
  // update options list
  const optionsFilter = document.querySelector(this.dataset.list)
  optionsFilter.innerHTML = ''
  const optionsModel = optionsListFactory(this.dataset.type, filteredList)
  const optionsListDOM = optionsModel.getOptionsListDOM()
  optionsFilter.appendChild(optionsListDOM)
}

searchTagInputs.forEach((input) => (input.onkeyup = searchTag))
