const optionsList = document.querySelectorAll('.category__list')
const filterTags = document.querySelector('.filters__tags')
// let tagsList = []

// search tag in the list
// const findTag = function (tagslist, name, type) {
//   return tagsList.find(function (tag) {
//     return tag.tagname === name && tag.tagtype === type
//   })
// }

// remove filter tag
function removeTag(name, type, element) {
  // remove tag from list
  // tagsList.pop({ tagname: name, tagtype: type })
  console.log('retiré de la liste:')
  console.log(name)
  console.log(type)
  // remove html element
  console.log(filterTags.childNodes)
  console.log('remove:')
  console.log(element)
  filterTags.removeChild(element)

  console.log(tagsList.length)
  console.log(filterTags.childNodes)
}

// create filter tag
function createTag(name, type) {
  // tagsList.push({ tagname: name, tagtype: type })
  console.log('creation de: ')
  console.log(name)
  console.log(type)
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
  console.log('ajout de: ')
  console.log(tag)
  // set remove buttons
  const tagsBtn = document.querySelectorAll('.tags__item button')
  // create remove button listener
  tagBtn.addEventListener('click', function (e) {
    console.log('click: ' & e.target.dataset.name & '-' & e.target.dataset.type)
    // tag exist in the list
    // if (findTag(tagsList, e.target.dataset.name, e.target.dataset.type)) {
    // remove tag
    removeTag(
      e.target.dataset.name,
      e.target.dataset.type,
      e.target.parentElement
    )
    // } else {
    //   console.log("pb: le tag n'est pas dans la liste")
    // }
  })
}

// create tag when click on item's list
optionsList.forEach((list) => {
  list.addEventListener('click', function (e) {
    console.log('click: ' & e.target.text & '-' & e.target.dataset.type)
    // target is a link
    if (e.target.tagName === 'A') {
      // tag already exist
      // if (findTag(tagsList, e.target.text, e.target.dataset.type)) {
      //   // console.log('deja dans la liste')
      //   return false
      // } else {
      createTag(e.target.text, e.target.dataset.type)
      // }
    }
  })
})
