const datosPersonas=[
    new Persona('Juan','Llontop'),
    new Persona('Mariela','Llontop')
]
function mostrarPersona() {
    let nombreCompleto=' '
    for(let persona of datosPersonas){
        nombreCompleto+=`<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('datoPersona').innerHTML=nombreCompleto
}
function agregarPersona() {
    const forma=document.forms['formulario']
    const nombre=forma['nombre']
    const apellido=forma['apellido']
    if (nombre.value!='' && apellido.value!='') {
        const persona=new Persona(nombre.value, apellido.value)
        datosPersonas.push(persona)
        mostrarPersona()
    } else {
        console.log('Por ahora información por agregar');
    }
    //Editado el clg
}