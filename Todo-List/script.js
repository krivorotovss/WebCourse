document.addEventListener("DOMContentLoaded", function () {
    var addButton = document.getElementById("add-button");
    var newTodoTextInput = document.getElementById("new-todo-text");
    var todoList = document.getElementById("todo-list");
    var form = document.getElementById("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    addButton.addEventListener("click", function () {
        var newTodoText = newTodoTextInput.value.trim();
        newTodoTextInput.classList.remove("invalid");

        if (newTodoText.length === 0) {
            newTodoTextInput.classList.add("invalid");
            return;
        }

        var todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");

        function setEditMode() {
            todoItem.innerHTML = "<input class='edit-todo-item' type='text'>\
                <div class='save-cancel-buttons'>\
                <button class='save-button' type='button'>Save</button>\
                <button class='cancel-button' type='button'>Cancel</button>\
                <div style='display: none' class='edit-error-message'>Field is required</div>\
                </div";

            var editTodoItem = todoItem.querySelector(".edit-todo-item");

            editTodoItem.value = newTodoText;

            todoItem.querySelector(".cancel-button").addEventListener("click", function () {
                setViewMode();
            });

            todoItem.querySelector(".save-button").addEventListener("click", function () {
                var editedTodoText = editTodoItem.value.trim();
                var editErrorMessage = todoItem.querySelector(".edit-error-message");

                if (editedTodoText.length === 0) {
                    editTodoItem.classList.add("invalid");
                    editErrorMessage.style.display = "block";
                    return;
                }

                newTodoText = editedTodoText;
                setViewMode();
            });
        }

        function setViewMode() {
            todoItem.innerHTML = "<span class='todo-item-text'></span>\
                <div class='edit-delete-buttons'>\
                <button class='edit-button' type='button'>Edit</button>\
                <button class='delete-button' type='button'>Delete</button>\
                </div>";

            todoItem.querySelector(".todo-item-text").textContent = newTodoText;

            todoItem.querySelector(".delete-button").addEventListener("click", function () {
                todoItem.remove();
            });

            todoItem.querySelector(".edit-button").addEventListener("click", function () {
                setEditMode();
            });
        }

        setViewMode();

        todoList.appendChild(todoItem);

        newTodoTextInput.value = "";
    });
});