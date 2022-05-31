function ingredientsFactory(liste) {
  const ingredientsList = liste

  function getIngredientsListDOM() {
    const list = document.createElement('ul')
    list.setAttribute('class', 'ingredients')
    ingredientsList.forEach((e) => {
      const listItem = document.createElement('li')
      listItem.innerHTML = `<a>${e}</a>`
      list.appendChild(listItem)
    })

    return list
  }

  return { getIngredientsListDOM }
}
