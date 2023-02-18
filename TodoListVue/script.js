new Vue({
    el: "#app",

    data: {
        items: [],
        newItemText: "",
        isNewItemInvalid: false,
        isItemInvalid: false,
        itemId: 1
    },

    methods: {
        addItem: function () {
            var value = this.newItemText.trim();
            this.isNewItemInvalid = value.length === 0;

            if (this.isNewItemInvalid) {
                return;
            }

            this.items.push({
                id: this.itemId,
                text: value,
                isEditing: false,
                editText: ""
            });

            this.itemId++;
            this.newItemText = "";
        },

        deleteItem: function (itemIndex) {
            this.items.splice(itemIndex, 1);
        },

        editItem: function (item) {
            item.editText = item.text;
            item.isEditing = true;
        },

        saveItem: function (item) {
            itemOldValue = item.text;

            item.text = item.editText.trim();
            this.isItemInvalid = item.text.length === 0;

            if (this.isItemInvalid) {
                item.text = itemOldValue;
                return;
            }

            item.isEditing = false;
        },

        cancelEditing: function (item) {
            this.isItemInvalid = item.text.length === 0;
            item.isEditing = false;
        }
    }
});