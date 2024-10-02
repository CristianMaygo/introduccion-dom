/* Selectores 
getElement
    getElementByid - Seleccicona elemento por un id
    getElementByclass - Selecciona elemento por clase
    getElementByTagName - Selecciona elemento por nombre de etiqueta

querySelector
    querySelector - Permite seleccionar por id, por clase y por etiqueta
    querySelectorAll - Permite seleccionar por id, por clase y por etiqueta
*/



console.log(document.getElementById("Usuario")) /* Solo muestra un elemento */
console.log(document.getElementsByClassName("form")) /* Siempre muestra un arreglo */
console.log(document.getElementsByTagName("input")) /* Siempre muestra un arreglo */


console.log(document.querySelector("form"))
console.log(document.querySelectorAll("form"))