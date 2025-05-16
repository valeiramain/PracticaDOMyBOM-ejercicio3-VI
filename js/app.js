

//agregar tarea con innerHTML
function agregarTarea(e) {
    e.preventDefault(); //evitar que recargue la pagina
    console.log('agregar tareas')

    //busca la tabla de tareas con la etiqueta tr
    const tablaTareas = document.querySelector('tr')
    console.log(tablaTareas)

    //seleccionar el texto que escribio en la tarea
    const tarea = document.querySelector('#tareaInput').value
    console.log(tarea)

    tablaTareas.innerHTML += `<td class="col-10 justify-content-start align-item-center">${tarea}</td>
                              <td class="col-2 justify-content-center align-item-center"><button class="btn btn-danger"><i class="bi bi-trash3-fill"></i></button></td>`

    // blanquer input
    formularioTareas.reset();
}



//-------------------eventos---------------------

// lista tareas
const formularioTareas = document.querySelector('#tareaForm')
console.log(formularioTareas)
formularioTareas.addEventListener('submit', agregarTarea)
