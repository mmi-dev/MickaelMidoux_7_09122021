async function getRecipes() {
  const recipesData = recipes
  return { recipesData }
}

async function displayRecipes(recipesList) {
  const recipesSection = document.querySelector('#recipes')
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
  const recipesList = await getRecipes()
  // recipies cards creation
  const recipesCards = await displayRecipes(recipesList.recipesData)
  // options lists creation
  const optionsList = await displayOptions(recipesList.recipesData)

  return { recipesCards }
}
init()
