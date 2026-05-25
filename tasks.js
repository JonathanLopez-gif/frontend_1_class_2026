// OBTENER INPUT DE TAREAS
const taskInput = document.getElementById("taskInput");

// OBTENER BOTÓN AGREGAR
const addTaskBtn = document.getElementById("addTaskBtn");

// OBTENER LISTA DE TAREAS
const tasksList = document.getElementById("tasksList");

// OBTENER TEXTO DE PENDIENTES
const pendingText = document.getElementById("tasksPending");

// OBTENER TEXTO DE COMPLETAS
const completeText = document.getElementById("tasksComplete");

// CREAR CONTADOR GENERAL
let tasksCounter = 0;


// FUNCIÓN PARA ACTUALIZAR CONTADORES
const updateCounters = () => {

    // OBTENER TOTAL DE TAREAS
    let totalTasks = document.getElementsByClassName("taskItem").length;

    // OBTENER TODOS LOS CHECKBOXES
    let checkboxes = document.getElementsByClassName("taskCheck");

    // CREAR CONTADOR DE COMPLETADAS
    let checkedTasks = 0;

    // RECORRER CHECKBOXES
    for(let i = 0; i < checkboxes.length; i++){

        // VALIDAR SI ESTÁ MARCADO
        if(checkboxes[i].checked){

            // SUMAR COMPLETADA
            checkedTasks++;

        }

    }

    // CALCULAR PENDIENTES
    let pendingTasks = totalTasks - checkedTasks;

    // MOSTRAR PENDIENTES
    pendingText.textContent = `Tareas pendientes: ${pendingTasks}`;

    // MOSTRAR COMPLETADAS
    completeText.textContent = `Tareas completas: ${checkedTasks}`;
};


// FUNCIÓN PARA ACTUALIZAR NÚMEROS
const updateTaskNumbers = () => {

    // OBTENER TODAS LAS TAREAS
    let tasks = document.getElementsByClassName("taskItem");

    // RECORRER TAREAS
    for(let i = 0; i < tasks.length; i++){

        // OBTENER NÚMERO DE LA TAREA
        let numbers = tasks[i].getElementsByClassName("taskNumber");

        // ACTUALIZAR NÚMERO
        numbers[0].textContent = `${i + 1}.`;

    }

    // ACTUALIZAR CONTADOR GENERAL
    tasksCounter = tasks.length;
};


// FUNCIÓN PARA AGREGAR TAREA
const addTask = () => {

    // OBTENER TEXTO DEL INPUT
    let taskText = taskInput.value.trim();

    // VALIDAR INPUT VACÍO
    if(taskText === ""){

        // MOSTRAR ALERTA
        alert("Por favor escribe una tarea");

        // DETENER FUNCIÓN
        return;
    }

    // AUMENTAR CONTADOR
    tasksCounter++;

    // CREAR ELEMENTO LI
    let li = document.createElement("li");

    // AGREGAR CLASE AL LI
    li.classList.add("taskItem");

    // INSERTAR HTML EN EL LI
    li.innerHTML = `

        <div class="taskNew">

            <span class="taskNumber">${tasksCounter}.</span>

            <span class="taskText">${taskText}</span>

        </div>

        <div class="taskActions">

            <input class="taskCheck" type="checkbox">

            <img class="taskDelete" src="img/delete.png" alt="Eliminar tarea">

        </div>

    `;

    // AGREGAR TAREA A LA LISTA
    tasksList.appendChild(li);

    // LIMPIAR INPUT
    taskInput.value = "";

    // OBTENER BOTÓN ELIMINAR
    const deleteBtn = li.getElementsByClassName("taskDelete")[0];

    // OBTENER CHECKBOX
    const checkbox = li.getElementsByClassName("taskCheck")[0];

    // OBTENER TEXTO DE LA TAREA
    const taskTextElement = li.getElementsByClassName("taskText")[0];


    // EVENTO PARA ELIMINAR
    deleteBtn.addEventListener("click", () => {

        // ELIMINAR TAREA
        li.remove();

        // ACTUALIZAR NÚMEROS
        updateTaskNumbers();

        // ACTUALIZAR CONTADORES
        updateCounters();

    });


    // EVENTO PARA COMPLETAR
    checkbox.addEventListener("change", () => {

        // VALIDAR SI ESTÁ MARCADO
        if(checkbox.checked){

            // TACHAR TEXTO
            taskTextElement.style.textDecoration = "line-through";

            // BAJAR OPACIDAD
            taskTextElement.style.opacity = "0.6";

        }else{

            // QUITAR TACHADO
            taskTextElement.style.textDecoration = "none";

            // RESTAURAR OPACIDAD
            taskTextElement.style.opacity = "1";

        }

        // ACTUALIZAR CONTADORES
        updateCounters();

    });


    // ACTUALIZAR CONTADORES
    updateCounters();

};


// EVENTO CLICK DEL BOTÓN
addTaskBtn.addEventListener("click", addTask);


// EVENTO ENTER EN INPUT
taskInput.addEventListener("keydown", (e) => {

    // VALIDAR TECLA ENTER
    if(e.key === "Enter"){

        // AGREGAR TAREA
        addTask();

    }

});


// INICIAR CONTADORES
updateCounters();