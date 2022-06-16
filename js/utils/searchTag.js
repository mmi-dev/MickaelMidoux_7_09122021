const searchTagInputs = document.querySelectorAll('.category__input')

function searchTag() {
  // keyword to search in tags
  const keyword = this.value
  // innit filtered list of option
  let filteredList
  // filter list function
  const tagList = (list) => {
    filteredList = [...new Set(list)]
    for (i = 0; i < list.length; i++) {
      if (!list[i].toLowerCase().includes(keyword.toLowerCase())) {
        filteredList.splice(filteredList.indexOf(list[i]), 1)
      } else {
      }
    }
    return filteredList
  }
  // filter
  switch (this.dataset.type) {
    case 'ingredients':
      tagList(ingredientsList)
      break
    case 'appareils':
      tagList(applianceList)
      break
    case 'ustensiles':
      tagList(ustensilsList)
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
