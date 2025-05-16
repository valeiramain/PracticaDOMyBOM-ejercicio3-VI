

//agregar tarea con innerHTML
function agregarTarea(e) {
    e.preventDefault(); //evitar que recargue la pagina

    //busca la tabla de tareas con la etiqueta tr
    const tablaTareas = document.querySelector('table')

    //seleccionar el texto que escribio en la tarea
    const tarea = document.querySelector('#tareaInput').value

    tablaTareas.innerHTML += `<td class="col-10 justify-content-start align-item-center">${tarea}</td>
                              <td class="col-2 justify-content-center align-item-center"><button class="btn btn-danger"><i class="bi bi-trash3-fill"></i></button></td>`

    // blanquer input
    formularioTareas.reset();
}



//-------------------eventos---------------------

// lista tareas
const formularioTareas = document.querySelector('#tareaForm')
formularioTareas.addEventListener('submit', agregarTarea)
