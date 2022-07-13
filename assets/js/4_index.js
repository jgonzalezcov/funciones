/*************************************************************************************
 *Requerimiento 4: Este JS interacual con el archivo html "4_index.html"             *
 *************************************************************************************/
let Colors = ['red', 'blue', 'green', 'yellow']
let bgColor = Colors[0]
document.querySelectorAll('div').forEach((item, i) => {
  document.querySelector('#' + item.id).setAttribute('style','width: 200px; height: 200px; background-color:' + Colors[i])
})
document.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'a') {
    bgColor =  Colors[0]
  } else if (event.key.toLowerCase() === 's') {
    bgColor = Colors[1]
  } else if (event.key.toLowerCase() === 'd') {
    bgColor = Colors[2]
  } else if (event.key.toLowerCase() === 'f') {
    bgColor = Colors[3]
  }
})
document.querySelectorAll('div').forEach((item) => {
  item.addEventListener('click', (e) => {
    document.querySelector('#' + e.target.id).style.backgroundColor = bgColor
  })
})


