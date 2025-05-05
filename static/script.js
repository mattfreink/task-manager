
document.addEventListener("DOMContentLoaded", function () {
    // Manejo de alertas en el formulario
    const form = document.querySelector('form');
    const taskInput = document.querySelector('input[name="content"]');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Si no hay texto en el campo de la tarea
        if (taskInput.value.trim() === '') {
            alert('Por favor, escribe una tarea antes de agregarla.');
            return;
        }

        // Mostrar animación al agregar tarea
        const taskList = document.querySelector('.list-group');
        const newTask = document.createElement('li');
        newTask.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        newTask.textContent = taskInput.value;

        // Agregar botón de eliminar a la tarea
        const deleteButton = document.createElement('a');
        deleteButton.href = '#';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function () {
            newTask.style.transition = "opacity 0.5s ease";
            newTask.style.opacity = "0";
            setTimeout(function () {
                newTask.remove();
            }, 500);
        });

        // Agregar la tarea a la lista con animación
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);

        // Animación de deslizamiento
        newTask.style.transition = "transform 0.5s ease";
        newTask.style.transform = "translateY(20px)";
        setTimeout(function () {
            newTask.style.transform = "translateY(0)";
        }, 100);

        // Limpiar el campo de entrada
        taskInput.value = '';
    });

    // Alertas al eliminar tarea
    const deleteButtons = document.querySelectorAll('.btn-danger');
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (!confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
                e.preventDefault();
            }
        });
    });
});
``