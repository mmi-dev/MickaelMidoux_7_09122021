function recipesFactory(data) {
  const {
    id,
    name,
    servings,
    ingredients,
    time,
    description,
    appliance,
    ustensils,
  } = data

  function getRecipeCardDOM() {
    const article = document.createElement('article')
    article.setAttribute('class', 'recipes__card card')
    // liste des ingredients

    let listeIngredients = ''

    for (let i = 0; i < ingredients.length; i++) {
      // ingrédient
      let ingredient = ingredients[i].ingredient + ':'
      // quantity
      let quantity = ''
      if (ingredients[i].quantity === undefined) {
        quantity = ''

        ingredient = ingredients[i].ingredient
      } else {
        quantity = ' ' + ingredients[i].quantity
      }
      // unit
      let unit = ''
      if (ingredients[i].unit === undefined) {
        unit = ''
      } else {
        switch (ingredients[i].unit) {
          case '':
            unit = ''
            break
          case 'undifined':
            unit = ''
            break
          case 'grammes':
            unit = ' g'
            break
          case 'cuillères à soupe':
          case 'cuillère à soupe':
            unit = ' cs'
            break
          default:
            unit = ' ' + ingredients[i].unit
        }
      }
      li = `<li class="ingredient"><span><b>${ingredient}</b>${quantity}${unit}</span></li>
      `
      listeIngredients += li
    }
    // contenu html
    article.innerHTML = `
            <div class="card__img"><img src="" alt="" /></div>
            <div class="card__details">
              <div class="tittle-container">
                <h2 class="card__tittle">${name}</h2>
                <span class="card__time">${time} min</span>
              </div>
              <ul class="card__ingredients">
                ${listeIngredients}
              </ul>
              <p class="card__preparation">
              ${description}
              </p>
            </div>
`
    return article
  }

  return { name, ingredients, appliance, ustensils, getRecipeCardDOM }
}
