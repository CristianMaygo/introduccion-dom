import { Usuario } from "../model/ModelUsarios.js"


export function buscarUsuario(){
    let auth = Usuario.some((index) => {
     let Usuario = document.getElementById("Usuario").value
     let Contraseña = document.getElementById("Contraseña").value
     if(Usuario == index.usario && Contraseña == index.contraseña){
         return true
     } else {
         return false
     }
 })
 return auth 
 }

