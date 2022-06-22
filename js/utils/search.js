const searchBar = document.querySelector('.search__input')
const errorMsg = document.querySelector('#error-msg')

// creation d'une grande liste
let recipesList2 = [...recipes]
function bigList() {
  for (i = 0; i < 4; i++) {
    recipesList2 = [...recipesList2, ...recipes1]
  }
  console.log(recipesList2)
}
bigList()

console.log(recipesList2.length)

async function searchEachWord(keywords) {
  console.time('test-2')

  const inputText = keywords //this.value
  const wordsList = inputText.split(' ')
  const baseList = [...recipesList2]
  console.log(baseList.length)

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
      // filteredList = [...new Set(filteredList)]
    })
  } else {
    filteredList = recipes1
  }
  // refresh view and list
  if (filteredList.length === 0) {
    errorMsg.style.display = 'block'
  }
  await displayRecipes(filteredList)
  await displayOptions(filteredList)
  console.timeLog('test-2')

  console.log(filteredList.length)
  console.timeEnd('test-2')
}

// search by keyword
searchBar.onkeyup = function () {
  searchEachWord(this.value) // search for each keyword
}
