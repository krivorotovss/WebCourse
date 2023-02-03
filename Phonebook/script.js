$(function () {
    var addButton = $("#add-button");

    var newLastnameTextInput = $("#new-lastname-text");
    var newFirstnameTextInput = $("#new-firstname-text");
    var newPhoneTextInput = $("#new-phone-text");

    var lastnameErrorMessage = $(".lastname-error-message");
    var firstnameErrorMessage = $(".firstname-error-message");
    var phoneErrorMessage = $(".phone-error-message");

    var contactsRows = $(".contacts-rows");
    var deletedItem;

    var form = $("#form");

    form.submit(function (e) {
        e.preventDefault();
    });

    addButton.click(function () {
        var newLastnameText = newLastnameTextInput.val().trim();
        newLastnameTextInput.removeClass("invalid");

        var newFirstnameText = newFirstnameTextInput.val().trim();
        newFirstnameTextInput.removeClass("invalid");

        var newPhoneText = newPhoneTextInput.val().trim();
        newPhoneTextInput.removeClass("invalid");

        if (checkInvalidInputData(newFirstnameText, newLastnameText, newPhoneText)) {
            return;
        }

        var element = $("<tr>");

        element.html("<td class='counter'></td>" +
            "<td class='lastname'></td>" +
            "<td class='firstname'></td>" +
            "<td class='phone'></td>" +
            "<td><button class='delete-button' type='button' title='delete contact'>&#10006;</button></td>");

        element.find(".delete-button").click(function () {
            $(this).closest("tr").remove();
            setRowNumber();
        });

        element.find(".lastname").text(newLastnameText);
        element.find(".firstname").text(newFirstnameText);
        element.find(".phone").text(newPhoneText);

        contactsRows.append(element);
        newLastnameTextInput.val("");
        newFirstnameTextInput.val("");
        newPhoneTextInput.val("");

        setRowNumber();
    });

    function checkInvalidInputData(firstname, lastname, phone) {
        var isInvalid = false;

        if (lastname.length === 0) {
            newLastnameTextInput.addClass("invalid");
            lastnameErrorMessage.show();
            return true;
        }

        lastnameErrorMessage.hide();

        if (firstname.length === 0) {
            newFirstnameTextInput.addClass("invalid");
            firstnameErrorMessage.show();
            return true;
        }

        firstnameErrorMessage.hide();

        if (phone.length === 0 || isNaN(phone)) {
            newPhoneTextInput.addClass("invalid");
            phoneErrorMessage.show();
            return true;
        }

        phoneErrorMessage.hide();

        return isInvalid;
    };

    function setRowNumber() {
        $(".contacts-rows tr").each(function (i) {
            var number = i + 1;
            $(this).find("td:first-child").text(number);
        });
    };
});