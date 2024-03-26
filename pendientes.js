//Tomamos los elementos
let inputTarea = document.getElementById("tarea")
let btn = document.getElementById("agregar")
let listado = document.getElementById("listado")
let cantidad = document.getElementById("cantidad")

//Variable que lleva la cantidad de tareas

let total = 0

//Funcion que agrega la tarea al listado

btn.onclick = function() {
    //Controlamos si el campo esta vacio
    if(inputTarea.value==""){
        return
    }
    //tomamos el valor del campo
    let elemento = inputTarea.value 
    //creo un elemento li
    let li = document.createElement("li")
    li.textContent = elemento
    //agrego el li el listado
    listado.appendChild(li)

    //incremento la cantidad de tareas
    total++
    cantidad.innerHTML = total

    //Agregamos el boton eliminar a cada elemento li
    let btnEliminar = document.createElement("span")
    btnEliminar.textContent = "\u00d7"
    li.appendChild(btnEliminar)

    //Agregamos la funcionalidad que elimina la tarea del listado

    btnEliminar.onclick = function(){
        li.remove()
        total--
        cantidad.innerHTML = total
    }

    //Limpamos el campo input
    inputTarea.value = ""
}