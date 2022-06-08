let recipesList

// async function getRecipes() {
//   const recipesData = recipes
//   const tester = { recipesData }
//   console.log(recipes)
//   console.log(recipesData)
//   console.log(tester)
//   // recipesList=recipesData.
//   return { recipesData }
// }

async function displayRecipes(recipesList) {
  const recipesSection = document.querySelector('#recipes')
  recipesSection.innerHTML = ''
  const liste = recipesList
  for (let i = 0; i < liste.length; i++) {
    const recipeModel = recipesFactory(liste[i])
    const recipeCardDOM = recipeModel.getRecipeCardDOM()
    recipesSection.appendChild(recipeCardDOM)
  }
}

async function displayOptions(recipesList) {
  // ingredients list creation
  const ingredientsList = await displayOptionsList(
    recipesList,
    '#ingredients-list',
    'ingredients'
  )

  // appliance list creation
  const appliancesList = await displayOptionsList(
    recipesList,
    '#appliances-list',
    'appareils'
  )

  // ustensils list creation
  const ustensilsList = await displayOptionsList(
    recipesList,
    '#ustensils-list',
    'ustensiles'
  )
}

async function init() {
  // recipesList = await getRecipes()
  recipesList = recipes
  // recipes cards creation
  const recipesCards = await displayRecipes(recipesList)
  // options lists creation
  const optionsList = await displayOptions(recipesList)
  return { recipesCards, optionsList, recipesList }
}
init()
