/*************************************************************************************
 *Requerimiento 3: Este JS interactúa con el archivo html "3_pintar.html"             *
 *************************************************************************************/

const pintar = function (ele,color) {
  ele.style.backgroundColor = color
}

const element = document.getElementById('ele1')
element.setAttribute('style', 'color:green')
element.addEventListener('click', () => pintar(element,'yellow'))
