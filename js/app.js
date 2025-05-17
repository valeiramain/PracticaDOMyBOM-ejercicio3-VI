

//agregar tarea con innerHTML
function agregarTarea(e) {
    e.preventDefault(); //evitar que recargue la pagina

    //busca el tbody de la tabla de tareas
    const tablaTareas = document.querySelector('tbody')

    //seleccionar el texto que escribio en el formulario
    const tarea = document.querySelector('#tareaInput').value
    console.log('tarea:'+tarea)

    // inserta nueva tarea
    tablaTareas.innerHTML += `<tr>
                                <td class="col-10 justify-content-start align-item-center">${tarea}</td>
                                <td class="col-2 justify-content-center align-item-center"><button class="btn btn-danger" onclick('eliminarTarea()')><i class="bi bi-trash3-fill"></i></button></td>
                              </tr>`;

    // blanquer input
    formularioTareas.reset();
}

//elimina tarea
function eliminarTarea() {
    console.log('en funcion eliminar')

    const tareaAEliminar = document.querySelector('tr')
    console.log('tr a eliminar:')
    console.log(tareaAEliminar)

    // console.log(tareaAEliminar)
    // if (tareaAEliminar) {
    //     tareaAEliminar.remove();
    // }
}



//-------------------eventos---------------------

// lista tareas
const formularioTareas = document.querySelector('#tareaForm')
formularioTareas.addEventListener('submit', agregarTarea)





