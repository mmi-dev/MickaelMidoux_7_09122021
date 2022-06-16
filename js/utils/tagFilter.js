async function filterByTags(list, tagList) {
  // let filteredList = []
  let filteredList = [...new Set(list)]
  tagList.forEach(function (tag) {
    switch (tag.tagtype) {
      case 'ingredients':
        for (i = 0; i < list.length; i++) {
          let ingredientFound = false
          list[i].ingredients.forEach((ingredient) => {
            if (ingredient.ingredient === tag.tagname) {
              ingredientFound = true
            }
          })
          if (!ingredientFound && filteredList.indexOf(list[i]) >= 0) {
            filteredList.splice(filteredList.indexOf(list[i]), 1)
          }
        }
        break
      case 'appareils':
        for (i = 0; i < list.length; i++) {
          if (
            list[i].appliance.toLowerCase() !== tag.tagname.toLowerCase() &&
            filteredList.indexOf(list[i]) >= 0
          ) {
            filteredList.splice(filteredList.indexOf(list[i]), 1)
          }
        }
        break
      case 'ustensiles':
        for (i = 0; i < list.length; i++) {
          let ustensilFound = false
          list[i].ustensils.forEach((ustensil) => {
            if (ustensil === tag.tagname) {
              ustensilFound = true
            }
          })
          if (!ustensilFound && filteredList.indexOf(list[i]) >= 0) {
            filteredList.splice(filteredList.indexOf(list[i]), 1)
          }
        }
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
    // console.log(recipesList)
    return { recipesCardsRefresh, optionsListRefresh, recipesList }
  }
}
