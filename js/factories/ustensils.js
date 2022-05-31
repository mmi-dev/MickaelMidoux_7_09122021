function ustensilsFactory(liste) {
  const ustensilsList = liste

  function getUstensilsListDOM() {
    const list = document.createElement('ul')
    list.setAttribute('class', 'ustensiles')
    ustensilsList.forEach((e) => {
      const listItem = document.createElement('li')
      listItem.innerHTML = `<a>${e}</a>`
      list.appendChild(listItem)
    })

    return list
  }

  return { getUstensilsListDOM }
}
