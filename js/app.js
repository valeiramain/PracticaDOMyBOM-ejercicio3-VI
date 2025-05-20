

//agregar tarea con innerHTML
function agregarTarea(e) {
    e.preventDefault(); //evitar que recargue la pagina

    //busca el tbody de la tabla de tareas
    const tablaTareas = document.querySelector('.list-group')
    console.log(tablaTareas)

    //seleccionar el texto que escribio en el formulario
    const tarea = document.querySelector('#tareaInput').value
    console.log('tarea:'+tarea)

    tablaTareas.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-start">${tarea}<button class="btn btn-danger d-flex justify-content-between align-items-end" onclick('eliminarTarea()')><i class="bi bi-trash3-fill"></i></button></li>`
    // blanquer input
    formularioTareas.reset();
}


//-------------------eventos---------------------

// lista tareas
const formularioTareas = document.querySelector('#tareaForm')
formularioTareas.addEventListener('submit', agregarTarea)




