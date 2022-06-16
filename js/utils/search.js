const searchBar = document.querySelector('.search__input')
const errorMsg = document.querySelector('#error-msg')

async function searchEachWord(keywords) {
  const inputText = keywords //this.value
  const wordsList = inputText.split(' ')
  const baseList = [...new Set(recipesList)]
  errorMsg.style.display = 'none'
  let filteredList = []
  if (inputText.length >= 3) {
    // filter
    filteredList = baseList
    wordsList.forEach(async (word) => {
      for (i = 0; i < baseList.length; i++) {
        if (baseList[i].name.toLowerCase().includes(word)) {
        } else {
          if (baseList[i].description.toLowerCase().includes(word)) {
          } else {
            let ingredientFound = false
            baseList[i].ingredients.forEach((ingredient) => {
              if (ingredient.ingredient.toLowerCase().includes(word)) {
                ingredientFound = true
              }
              if (!ingredientFound) {
                filteredList.splice(i, 1)
              }
            })
          }
        }
      }
      // delete double
      filteredList = [...new Set(filteredList)]
    })
  } else {
    filteredList = recipesList
  }
  // refresh view and list
  if (filteredList.length === 0) {
    errorMsg.style.display = 'block'
  }
  await displayRecipes(filteredList)
  await displayOptions(filteredList)
}

// search by keyword
searchBar.onkeyup = function () {
  searchEachWord(this.value) // search for each keyword
}
