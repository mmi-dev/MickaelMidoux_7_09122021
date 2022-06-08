const optionsList = document.querySelectorAll('.category__list')
const filterTags = document.querySelector('.filters__tags')
// const searchTagInputs = document.querySelectorAll('.category__input')

let tagsList = []

// search tag in the list
const findTag = function (tagslist, name, type) {
  return tagsList.find(function (tag) {
    return tag.tagname === name && tag.tagtype === type
  })
}

// remove filter tag
async function removeTag(name, type, element) {
  // remove tag from list
  const indexToRemove = tagsList.findIndex((tag) => {
    return tag.tagname === name && tag.tagtype === type
  })
  tagsList.splice(indexToRemove, 1)
  // remove html tag element
  filterTags.removeChild(element)
  // refresh view
  await filterByTags(recipes, tagsList)
}

// create filter tag
async function createTag(name, type) {
  // add tag to list
  tagsList.push({ tagname: name, tagtype: type })
  // create html element
  const tag = document.createElement('div')
  tag.setAttribute('data-name', name)
  tag.classList.add('tags__item')
  tag.classList.add(type)
  const tagName = document.createElement('p')
  tagName.innerHTML = name
  const tagBtn = document.createElement('button')
  tagBtn.setAttribute('data-name', name)
  tagBtn.setAttribute('data-type', type)
  tagBtn.innerHTML = 'Supprimer'
  tag.appendChild(tagName)
  tag.appendChild(tagBtn)
  filterTags.appendChild(tag)
  // delete search tag input content
  searchTagInputs.forEach((e) => {
    console.log(e)
    e.value = ''
  })
  // set remove buttons
  const tagsBtn = document.querySelectorAll('.tags__item button')
  // create remove button listener
  tagBtn.addEventListener('click', async function (e) {
    // tag exist in the list
    if (findTag(tagsList, e.target.dataset.name, e.target.dataset.type)) {
      // remove tag
      await removeTag(
        e.target.dataset.name,
        e.target.dataset.type,
        e.target.parentElement
      )
    }
  })
}

// create tag when click on item's list
optionsList.forEach((list) => {
  list.addEventListener('click', async function (e) {
    // target is a link
    if (e.target.tagName === 'A') {
      // tag already exist
      if (findTag(tagsList, e.target.text, e.target.dataset.type)) {
        return false
      } else {
        createTag(e.target.text, e.target.dataset.type)
        // filterByTag(recipesList, e.target.text, e.target.dataset.type)
        await filterByTags(recipes, tagsList)
      }
    }
  })
})
