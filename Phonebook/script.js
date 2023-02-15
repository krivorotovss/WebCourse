$(function () {
    var addButton = $("#add-button");

    var newLastnameTextInput = $("#new-lastname-text");
    var newFirstnameTextInput = $("#new-firstname-text");
    var newPhoneTextInput = $("#new-phone-text");

    var lastnameErrorMessage = $(".lastname-error-message");
    var firstnameErrorMessage = $(".firstname-error-message");
    var phoneErrorMessage1 = $(".phone-error-message1");
    var phoneErrorMessage2 = $(".phone-error-message2");

    var contactsRows = $(".contacts-rows");

    var form = $("#form");

    form.submit(function (e) {
        e.preventDefault();
    });

    addButton.click(function () {
        var newLastnameText = newLastnameTextInput.val().trim();
        newLastnameTextInput.removeClass("invalid");
        lastnameErrorMessage.hide()

        var newFirstnameText = newFirstnameTextInput.val().trim();
        newFirstnameTextInput.removeClass("invalid");
        firstnameErrorMessage.hide();

        var newPhoneText = newPhoneTextInput.val().trim();
        newPhoneTextInput.removeClass("invalid");
        phoneErrorMessage1.hide();
        phoneErrorMessage2.hide();

        if (checkContainedPhone(newPhoneText)) {
            return;
        }

        if (!validateInputData(newFirstnameText, newLastnameText, newPhoneText)) {
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
            setRowsNumbers();
        });

        element.find(".lastname").text(newLastnameText);
        element.find(".firstname").text(newFirstnameText);
        element.find(".phone").text(newPhoneText);

        contactsRows.append(element);
        newLastnameTextInput.val("");
        newFirstnameTextInput.val("");
        newPhoneTextInput.val("");

        setRowsNumbers();
    });

    function validateInputData(firstname, lastname, phone) {
        var isValid = true;

        if (lastname.length === 0) {
            newLastnameTextInput.addClass("invalid");
            lastnameErrorMessage.show();
            isValid = false;
        }

        if (firstname.length === 0) {
            newFirstnameTextInput.addClass("invalid");
            firstnameErrorMessage.show();
            isValid = false;
        }

        if (phone.length === 0 || isNaN(phone)) {
            newPhoneTextInput.addClass("invalid");
            phoneErrorMessage1.show();
            isValid = false;
        }

        return isValid;
    }

    function checkContainedPhone(inputPhone) {
        var isContained = false;

        contactsRows.find(".phone").each(function () {
            if ($(this).text() === inputPhone) {
                newPhoneTextInput.addClass("invalid");
                phoneErrorMessage2.show();
                isContained = true;
            }
        });

        return isContained;
    }

    function setRowsNumbers() {
        $(".contacts-rows tr").each(function (i) {
            var number = i + 1;
            $(this).find("td:first-child").text(number);
        });
    }
});