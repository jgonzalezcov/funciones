/*************************************************************************************
 *Requerimiento 4: Este JS interacual con el archivo html "4_index.html"             *
 *************************************************************************************/
const colors = ['red', 'blue', 'green', 'yellow']
let bgColor = colors[0]
document.querySelectorAll('div').forEach((item, i) => {
  document.querySelector('#' + item.id).setAttribute('style','width: 200px; height: 200px; background-color:' + colors[i])
})
document.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'a') {
    bgColor =  colors[0]
  } else if (event.key.toLowerCase() === 's') {
    bgColor = colors[1]
  } else if (event.key.toLowerCase() === 'd') {
    bgColor = colors[2]
  } else if (event.key.toLowerCase() === 'f') {
    bgColor = colors[3]
  }
})
document.querySelectorAll('div').forEach((item) => {
  item.addEventListener('click', (e) => {
    document.querySelector('#' + e.target.id).style.backgroundColor = bgColor
  })
})


