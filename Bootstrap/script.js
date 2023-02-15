$(function () {
    var addButton = $("#add-button");
    var newTodoTextInput = $("#new-todo-text");
    var todoList = $("#todo-list");
    var form = $("#form");

    form.submit(function (e) {
        e.preventDefault();
    });

    addButton.click(function () {
        var newTodoText = newTodoTextInput.val().trim();
        newTodoTextInput.removeClass("is-invalid");

        if (newTodoText.length === 0) {
            newTodoTextInput.addClass("is-invalid");
            return;
        }

        var todoItem = $("<li class='list-group-item'>").addClass("todo-item");

        setViewMode();

        todoList.append(todoItem);

        newTodoTextInput.val("");

        function setEditMode() {
            todoItem.html("<div class='row mb-2 mt-2'>" +
                "<div class='col-1 col-lg-1'></div>" +
                "<div class='col-6 col-lg-8'>" +
                "<input class='edit-todo-item form-control' type='text' >" +
                "<div class='edit-error-message invalid-feedback'>Field is required</div>" +
                "</div>" +
                "<div class='col-4 col-lg-3 text-start'>" +
                "<button class='save-button btn btn-success me-2' type='button'>Save</button>" +
                "<button class='cancel-button btn btn-secondary btn-outline-light' type='button'>Cancel</button></div>" +
                "</div>");

            todoItem.find(".edit-todo-item").val(newTodoText);

            todoItem.find(".cancel-button").click(function () {
                setViewMode();
            });

            todoItem.find(".save-button").click(function () {
                var editedTodoText = todoItem.find(".edit-todo-item").val().trim();
                var editErrorMessage = todoItem.find(".edit-error-message");

                if (editedTodoText.length === 0) {
                    todoItem.find(".edit-todo-item").addClass("is-invalid");
                    return;
                }

                newTodoText = editedTodoText;
                setViewMode();
            });
        }

        function setViewMode() {
            todoItem.html("<div class='row mb-2 mt-2'>" +
                "<div class='col-1 col-lg-1'></div>" +
                "<div class='col-6 col-lg-8 text-start'><span class='todo-item-text'></span></div>" +
                "<div class='col-5 col-lg-3 text-start'>" +
                "<button class='edit-button btn btn-secondary btn-outline-light me-2' type='button'>Edit</button>" +
                "<button class='delete-button btn btn-danger' type='button'>Delete</button></div>" +
                "</div>");

            todoItem.find(".todo-item-text").text(newTodoText);

            todoItem.find(".delete-button").click(function () {
                todoItem.remove();
            });

            todoItem.find(".edit-button").click(function () {
                setEditMode();
            });
        }
    });
});