

//agregar tarea con innerHTML
function agregarTarea(e) {
    e.preventDefault(); //evitar que recargue la pagina

    //busca lista de la tabla de tareas
    const listaTareas = document.querySelector('.list-group')
    console.log(listaTareas)

    //seleccionar el texto que escribio en el formulario
    const tarea = document.querySelector('#tareaInput').value
    console.log('tarea:'+tarea)

    listaTareas.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-start">${tarea}
                            <button class="btn btn-danger d-flex justify-content-between align-items-end" onclick="eliminarTarea()"><i class="bi bi-trash3-fill"></i></button></li>`
    console.log(indiceLista)
    indiceLista = indiceLista + 1
    // blanquer input
    formularioTareas.reset();
}

function eliminarTarea(){
    console.log('en funcion eliminar: ')
    const borrarTarea = document.getElementsByTagName('li')
    borrarTarea.remove()
}


//-------------------eventos---------------------
// formulario para ingresar tareas
const formularioTareas = document.querySelector('#tareaForm')
formularioTareas.addEventListener('submit', agregarTarea)


