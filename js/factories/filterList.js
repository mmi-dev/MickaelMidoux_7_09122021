function optionsListFactory(type, liste) {
  const optionsList = liste

  function getOptionsListDOM() {
    const list = document.createElement('ul')
    list.setAttribute('class', type)
    optionsList.forEach((e) => {
      const listItem = document.createElement('li')
      listItem.innerHTML = `<a data-type="${type}">${e}</a>`
      list.appendChild(listItem)
    })

    return list
  }

  return { getOptionsListDOM }
}

async function displayOptionsList(recipesList, id, type) {
  const optionsFilter = document.querySelector(id)

  let options = []
  // list all options
  for (let i = 0; i < recipesList.length; i++) {
    switch (type) {
      case 'ingredients':
        recipesList[i].ingredients.forEach((e) => {
          options.push(e.ingredient)
        })
        break
      case 'appareils':
        options.push(recipesList[i].appliance)
        break
      case 'ustensiles':
        recipesList[i].ustensils.forEach((e) => {
          options.push(e)
        })
        break
      default:
    }
  }
  // delete double
  options = [...new Set(options)]
  // sort
  options.sort()

  const optionsModel = optionsListFactory(type, options)
  const optionssListDOM = optionsModel.getOptionsListDOM()
  optionsFilter.appendChild(optionssListDOM)
}
