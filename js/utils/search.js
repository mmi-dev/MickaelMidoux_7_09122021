const searchBar = document.querySelector('.search__input')

async function searchWords() {
  let inputText = this.value
  let filteredList = []
  console.log(inputText.length)
  if (inputText.length >= 3) {
    // ingredients filter
    filteredIngredientsList = recipesList.filter((recipe) => {
      return (
        recipe.ingredients.filter((el) => {
          return (
            el.ingredient.toLowerCase().indexOf(inputText.toLowerCase()) !== -1
          )
        }).length !== 0
      )
    })

    // appliance filter
    filteredApplianceList = recipesList.filter((recipe) => {
      return (
        recipe.appliance.toLowerCase().indexOf(inputText.toLowerCase()) !== -1
      )
    })

    // ustensils filter
    filteredUstensilsList = recipesList.filter((recipe) => {
      return (
        recipe.ustensils.filter((el) => {
          return el.toLowerCase().indexOf(inputText.toLowerCase()) !== -1
        }).length !== 0
      )
    })

    //merge filtered list
    filteredList = [
      ...filteredIngredientsList,
      ...filteredApplianceList,
      ...filteredUstensilsList,
    ]
    filteredList = [...new Set(filteredList)]

    // refresh view and list
    await displayRecipes(filteredList)
    await displayOptions(filteredList)
  }
}

searchBar.onkeyup = searchWords
