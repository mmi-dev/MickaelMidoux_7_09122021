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
// bigList()

console.log(recipesList2.length)

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
  console.time('test-1')
  const inputText = keywords //this.value
  const wordsList = inputText.split(' ')
  const baseList = recipesList2
  console.log(baseList.length)
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
    filteredList = recipesList2
  }
  // refresh view and list
  if (filteredList.length === 0) {
    errorMsg.style.display = 'block'
  }
  await displayRecipes(filteredList)
  await displayOptions(filteredList)
  console.timeLog('test-1')

  console.log(filteredList.length)
  console.timeEnd('test-1')
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
