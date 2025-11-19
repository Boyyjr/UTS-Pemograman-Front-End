document.addEventListener('DOMContentLoaded', function() {

    const showModalButton = document.getElementById('showAddTaskModal');
    const closeModalButton = document.getElementById('closeModal');
    const addTaskModal = document.getElementById('addTaskModal');
    const plannerForm = document.getElementById('plannerForm');
    const taskInput = document.getElementById('taskInput');
    const dateInput = document.getElementById('dateInput');
    const taskListPending = document.getElementById('taskListPending');
    const taskListCompleted = document.getElementById('taskListCompleted');

    showModalButton.addEventListener('click', function() {
        addTaskModal.classList.remove('hidden');
    });

    closeModalButton.addEventListener('click', function() {
        addTaskModal.classList.add('hidden');
    });

    plannerForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const taskText = taskInput.value;
        const dateText = dateInput.value;

        if (taskText.trim() === '' || dateText.trim() === '') {
            alert('Nama tugas dan tenggat waktu tidak boleh kosong!');
            return;
        }

        const newTaskElement = createTaskElement(taskText, dateText);
        
        taskListPending.appendChild(newTaskElement);

        plannerForm.reset();
        addTaskModal.classList.add('hidden');
    });

    function createTaskElement(task, date) {
        const li = document.createElement('li');
        li.className = 'task-item';

        li.innerHTML = `
            <span>${task} <em>(${date})</em></span>
            <div class="task-buttons">
                <button class="btn btn-success btn-complete">Selesai</button>
                <button class="btn btn-danger btn-delete">Hapus</button>
            </div>
        `;

        const completeButton = li.querySelector('.btn-complete');
        const deleteButton = li.querySelector('.btn-delete');

        completeButton.addEventListener('click', function() {
            li.classList.add('completed');
            taskListCompleted.appendChild(li);
            completeButton.remove();
        });

        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        return li;
    }
});