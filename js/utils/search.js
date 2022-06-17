const searchBar = document.querySelector('.search__input')
const errorMsg = document.querySelector('#error-msg')

async function searchWord(keywords) {
  const inputText = keywords

  errorMsg.style.display = 'none'
  let filteredList = []
  if (inputText.length >= 3) {
    // global filter
    filteredList = recipesList.filter((recipe) => {
      return (
        recipe.ingredients.filter((el) => {
          return (
            el.ingredient.toLowerCase().indexOf(inputText.toLowerCase()) !== -1
          )
        }).length !== 0 ||
        recipe.name.toLowerCase().indexOf(inputText.toLowerCase()) !== -1 ||
        recipe.description.toLowerCase().indexOf(inputText.toLowerCase()) !== -1
      )
    })
    // delete double
    filteredList = [...new Set(filteredList)]
    // refresh view and list
    if (filteredList.length === 0) {
      errorMsg.style.display = 'block'
    }

    await displayRecipes(filteredList)
    await displayOptions(filteredList)
  }
}

async function searchEachWord(keywords) {
  const inputText = keywords //this.value
  const wordsList = inputText.split(' ')
  const baseList = recipesList
  errorMsg.style.display = 'none'
  let filteredList = []
  if (inputText.length >= 3) {
    // filter
    filteredList = baseList
    wordsList.forEach(async (word) => {
      if (word.length !== 0) {
        filteredList = filteredList.filter((recipe) => {
          return (
            recipe.ingredients.filter((el) => {
              return (
                el.ingredient.toLowerCase().indexOf(word.toLowerCase()) !== -1
              )
            }).length !== 0 ||
            recipe.name.toLowerCase().indexOf(word.toLowerCase()) !== -1 ||
            recipe.description.toLowerCase().indexOf(word.toLowerCase()) !== -1
          )
        })
        // delete double
        filteredList = [...new Set(filteredList)]
      }
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

// search by individual keyword (false) or by group (true)
let searchByGroup = true

searchBar.onkeyup = function () {
  if (searchByGroup) {
    searchEachWord(this.value) // search for each keyword
  } else {
    searchWord(this.value) // search for keywords group
  }
}
