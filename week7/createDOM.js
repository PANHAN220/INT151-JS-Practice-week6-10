// 1. create <p></p>
const pElement = document.createElement('p')

// 2. create id = 'p5'
const idAttr = document.createAttribute('id')
idAttr.value = 'p5'

// 3. binding id = 'p5' to <p>
pElement.setAttributeNode(idAttr)

// 4. create text value '#5'
const pText = document.createTextNode('#5')

//5. binding '#5' to <p>
pElement.appendChild(pText)

//6. binding <p id='p5'>#5</p> to body
const body = document.body
body.appendChild(pElement)