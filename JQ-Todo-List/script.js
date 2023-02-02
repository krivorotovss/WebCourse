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
        newTodoTextInput.removeClass("invalid");

        if (newTodoText.length === 0) {
            newTodoTextInput.addClass("invalid");
            return;
        }

        function setEditMode() {
            todoItem.html("<input class='edit-todo-item' type='text'>\
                <button class='save-button' type='button'>Save</button>\
                <button class='cancel-button' type='button'>Cancel</button>\
                <div style='display: none' class='edit-error-message'>Field is required</div>");

            todoItem.find(".edit-todo-item").val(newTodoText);

            todoItem.find(".cancel-button").click(function () {
                setViewMode();
            });

            todoItem.find(".save-button").click(function () {
                var editedTodoText = todoItem.find(".edit-todo-item").val().trim();
                var editErrorMessage = todoItem.find(".edit-error-message");

                if (editedTodoText.length === 0) {
                    todoItem.find(".edit-todo-item").addClass("invalid");
                    todoItem.find(".edit-todo-item").addClass("edit-error-message");
                    editErrorMessage.show();
                    todoItem.find(".edit-todo-item").removeClass("edit-error-message");
                    return;
                }

                newTodoText = editedTodoText;
                setViewMode();
            });
        }

        function setViewMode() {
            todoItem.html("<span class='todo-item-text'></span>\
                <button class='edit-button' type='button'>Edit</button>\
                <button class='delete-button' type='button'>Delete</button>");

            todoItem.find(".todo-item-text").text(newTodoText);

            todoItem.find(".delete-button").click(function () {
                todoItem.remove();
            });

            todoItem.find(".edit-button").click(function () {
                setEditMode();
            });
        }

        var todoItem = $("<li>").addClass("todo-item");

        setViewMode();

        todoList.append(todoItem);

        newTodoTextInput.val("");
    });
});