/* Selectores 
getElement
    getElementByid - Seleccicona elemento por un id
    getElementByclass - Selecciona elemento por clase
    getElementByTagName - Selecciona elemento por nombre de etiqueta

querySelector
    querySelector - Permite seleccionar por id, por clase y por etiqueta
    querySelectorAll - Permite seleccionar por id, por clase y por etiqueta
*/




/* console.log(document.getElementById("Usuario")) Solo muestra un elemento 
console.log(document.getElementsByClassName("form")) Siempre muestra un arreglo 
console.log(document.getElementsByTagName("input"))  Siempre muestra un arreglo 


console.log(document.querySelector("form"))
console.log(document.querySelectorAll("form")) */


import { Usuario } from "../../../model/ModelUsarios.js"

console.log(Usuario)



Usuario.map((index) =>{
    console.log(index)
}) 


document.getElementById('btnIniciar').addEventListener('click', iniciarSesion)



function iniciarSesion(){ //Función declarativa
    let Usuario = document.getElementById("Usuario").value
    let Contraseña = document.getElementById("Contraseña").value
    if(Usuario == 'admin' && Contraseña == '12345'){
        console.log('Bienvenido')
    } else {
        console.log('Error de credenciales')
    }
}



/* let iniciarSesion = function(){ Función de expresión 
    let Usuario = document.getElementById("Usuario");
    let Contraseña = document.getElementById("Contraseña");
    console.log(Usuario)
    console.log(Contraseña)
    console.log('Iniciar Sesión'); 
}
iniciarSesion() */


/* console.log(Contraseña)
console.log(Usuario); */