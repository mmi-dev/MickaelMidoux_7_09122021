function appliancesFactory(liste) {
  const appliancesList = liste

  function getAppliancesListDOM() {
    const list = document.createElement('ul')
    list.setAttribute('class', 'appareils')
    appliancesList.forEach((e) => {
      const listItem = document.createElement('li')
      listItem.innerHTML = `<a>${e}</a>`
      list.appendChild(listItem)
    })

    return list
  }

  return { getAppliancesListDOM }
}
