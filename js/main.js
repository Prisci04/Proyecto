
/*ABRIR Y CERRAR HAMBURGUESITA*/
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");

})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

/*Validación formulario*/



//NUEVO
function validarEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
function enviarFormulario(){
   
    var mensaje=[];
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let email=document.getElementById("email").value;
    let pass=document.getElementById("contrasena").value;
    let celular=document.getElementById("celular").value;
    let error = document.getElementById("error");
    
    if(nombre==' '||nombre==null||nombre.length<3||nombre.length>20){
        mensaje.push('Ingresa bien nombre');

    }
    if(apellido==' '|| apellido==null||apellido.length<3 || apellido.length>20){
        mensaje.push('Ingresa tu apellido');

    }
    if(validarEmail(email)||email==" "||email==null){
        mensaje.push("email no valido");
    }
    if(pass.length<5 || pass.length>16||pass==" "){
        mensaje.push("Contraseña incorrecta");
    }
    if(celular.toString().length>8 ){
        mensaje.push("Celular incorrecto");
    }
    error.innerHTML=mensaje.join(', ');
    return false;
}






/*CARRITO*/


const elFormulario = document.querySelector('#elformulario')

const extraeInformacion = (form) => {
    const nombreProducto = form.elements['nombre-producto']


    form.addEventListener("submit", (eventito) => {
        eventito.preventDefault();
        agregarAlCarrito(nombreProducto.value)
    })
    
}

const agregarAlCarrito = (producto) => {
    console.log(producto);
    const unProducto = {
        nombre: producto
    }
    const carrito = []

    carrito.push(unProducto)

    return carrito
}

extraeInformacion(elFormulario);







