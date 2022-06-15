async function filterByTag(list, tag, tagType) {
  let filteredList
  switch (tagType) {
    case 'ingredients':
      filteredList = list.filter(function (e) {
        let ingredients = []
        e.ingredients.forEach((el) => {
          ingredients.push(el.ingredient)
        })
        return ingredients.includes(tag)
      })
      break
    case 'appareils':
      filteredList = list.filter(function (e) {
        return e.appliance === tag
      })
      break
    case 'ustensiles':
      filteredList = list.filter(function (e) {
        return e.ustensils.includes(tag)
      })
      break
    default:
  }
  if (!filteredList) {
    // si la liste est vide
  } else {
    // recipies cards refresh
    const recipesCardsRefresh = await displayRecipes(filteredList)
    // options lists refresh
    const optionsListRefresh = await displayOptions(filteredList)
    // recipes list update
    recipesList = filteredList
    return { recipesCardsRefresh, optionsListRefresh, filteredList }
  }
}

async function filterByTags(list, tagList) {
  let filteredList = list
  tagList.forEach(function (tag) {
    switch (tag.tagtype) {
      case 'ingredients':
        filteredList = filteredList.filter(function (e) {
          let ingredients = []
          e.ingredients.forEach((el) => {
            ingredients.push(el.ingredient)
          })
          return ingredients.includes(tag.tagname)
        })
        break
      case 'appareils':
        filteredList = filteredList.filter(function (e) {
          return e.appliance === tag.tagname
        })
        break
      case 'ustensiles':
        filteredList = filteredList.filter(function (e) {
          return e.ustensils.includes(tag.tagname)
        })
        break
      default:
    }
  })
  if (!filteredList) {
    // si la liste est vide
  } else {
    // recipies cards refresh
    const recipesCardsRefresh = await displayRecipes(filteredList)
    // options lists refresh
    const optionsListRefresh = await displayOptions(filteredList)
    // recipes list update
    recipesList = filteredList
    return { recipesCardsRefresh, optionsListRefresh, recipesList }
  }
}
