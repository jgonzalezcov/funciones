/*************************************************************************************
 *Requerimiento 3: Este JS interactúa con el archivo html "3_pintar.html"             *
 *************************************************************************************/
const element = document.getElementById('ele1')
element.setAttribute('style', 'background-color:green')
const pintar = function (ele, color) {
  ele.setAttribute('style', 'background-color:' + color)
}
element.addEventListener('click', () => pintar(element, 'yellow'))
