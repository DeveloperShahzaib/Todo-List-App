// Execute the script when the window has finished loading
window.addEventListener('load', () => {

    // Select relevant DOM elements
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    // Add a submit event listener to the form
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get the task value from the input field
        const task = input.value;

        // Check if the task is empty
        if (!task) {
            alert("Please fill out the task");
            return;
        }

        // Create elements for the new task
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";

        // Add event listeners for the edit and delete buttons of the new task
        task_edit_el.addEventListener('click', () => {

            // Toggle between edit and save functionality
           if (task_edit_el.innerText.toLowerCase() == "edit") {
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_el.innerText = "Save";
           } else { 
            task_input_el.setAttribute("readonly","readonly");
            task_edit_el.innerText = "Edit";
           }
        });

        task_delete_el.addEventListener('click', () => {

            // Remove the task from the task list
            list_el.removeChild(task_el);
        }); 
    });
});