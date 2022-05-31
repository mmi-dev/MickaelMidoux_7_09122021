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

async function displayIngredientsList(recipesList) {
  const ingredientsFilter = document.querySelector('#ingredients-list')

  let ingredients = []
  // list all ingredients
  for (let i = 0; i < recipesList.length; i++) {
    recipesList[i].ingredients.forEach((e) => {
      ingredients.push(e.ingredient)
    })
  }
  // delete double
  ingredients = [...new Set(ingredients)]
  // sort
  ingredients.sort()

  const ingredientsModel = ingredientsFactory(ingredients)
  const ingeredientsListDOM = ingredientsModel.getIngredientsListDOM()
  ingredientsFilter.appendChild(ingeredientsListDOM)
}

async function displayAppliancesList(recipesList) {
  const appliancesFilter = document.querySelector('#appliances-list')

  let appliances = []
  // list all appliances
  for (let i = 0; i < recipesList.length; i++) {
    appliances.push(recipesList[i].appliance)
  }
  // delete double
  appliances = [...new Set(appliances)]
  // sort
  appliances.sort()

  const appliancesModel = appliancesFactory(appliances)
  const appliancesListDOM = appliancesModel.getAppliancesListDOM()
  appliancesFilter.appendChild(appliancesListDOM)
}

async function displayUstensilsList(recipesList) {
  const ustensilsFilter = document.querySelector('#ustensils-list')

  let ustensils = []
  // list all ustensils
  for (let i = 0; i < recipesList.length; i++) {
    recipesList[i].ustensils.forEach((e) => {
      ustensils.push(e)
    })
  }
  // delete double
  ustensils = [...new Set(ustensils)]
  // sort
  ustensils.sort()

  const ustensilsModel = ustensilsFactory(ustensils)
  const ustensilsListDOM = ustensilsModel.getUstensilsListDOM()
  ustensilsFilter.appendChild(ustensilsListDOM)
}

async function init() {
  const recipesList = await getRecipes()
  // recipies cards creation
  const recipesCards = await displayRecipes(recipesList.recipesData)
  // ingredients list creation
  const ingredientsList = await displayIngredientsList(recipesList.recipesData)
  // appliance list creation
  const appliancesList = await displayAppliancesList(recipesList.recipesData)
  // ustensils list creation
  const ustensilsList = await displayUstensilsList(recipesList.recipesData)

  return { recipesCards }
}
init()
