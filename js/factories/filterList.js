let ingredientsList
let applianceList
let ustensilsList

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
  optionsFilter.innerHTML = ''
  let options = []
  // list all options
  for (let i = 0; i < recipesList.length; i++) {
    switch (type) {
      case 'ingredients':
        recipesList[i].ingredients.forEach((e) => {
          options.push(e.ingredient)
        })
        ingredientsList = [...new Set(options)]
        break
      case 'appareils':
        options.push(recipesList[i].appliance)
        applianceList = [...new Set(options)]
        break
      case 'ustensiles':
        recipesList[i].ustensils.forEach((e) => {
          options.push(e)
        })
        ustensilsList = [...new Set(options)]
        break
      default:
    }
  }
  // delete double
  options = [...new Set(options)]
  // sort
  options.sort()

  const optionsModel = optionsListFactory(type, options)
  const optionsListDOM = optionsModel.getOptionsListDOM()
  optionsFilter.appendChild(optionsListDOM)
  return { ingredientsList, applianceList, ustensilsList }
}
