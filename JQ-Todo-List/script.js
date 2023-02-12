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

        var todoItem = $("<li>").addClass("todo-item");

        function setEditMode() {
            todoItem.html("<input class='edit-todo-item' type='text'>\
                <div class='save-cancel-buttons'>\
                <button class='save-button' type='button'>Save</button>\
                <button class='cancel-button' type='button'>Cancel</button>\
                <div style='display: none' class='edit-error-message'>Field is required</div>\
                </div>");

            var editTodoItem = todoItem.find(".edit-todo-item")

            editTodoItem.val(newTodoText);

            todoItem.find(".cancel-button").click(function () {
                setViewMode();
            });

            todoItem.find(".save-button").click(function () {
                var editedTodoText = editTodoItem.val().trim();
                var editErrorMessage = todoItem.find(".edit-error-message");

                if (editedTodoText.length === 0) {
                    editTodoItem.addClass("invalid");
                    editErrorMessage.show();
                    return;
                }

                newTodoText = editedTodoText;
                setViewMode();
            });
        }

        function setViewMode() {
            todoItem.html("<span class='todo-item-text'></span>\
                <div class='edit-delete-buttons'>\
                <button class='edit-button' type='button'>Edit</button>\
                <button class='delete-button' type='button'>Delete</button>\
                <div>");

            todoItem.find(".todo-item-text").text(newTodoText);

            todoItem.find(".delete-button").click(function () {
                todoItem.remove();
            });

            todoItem.find(".edit-button").click(function () {
                setEditMode();
            });
        }

        setViewMode();

        todoList.append(todoItem);

        newTodoTextInput.val("");
    });
});