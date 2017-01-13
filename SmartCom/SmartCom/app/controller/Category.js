Ext.define('ExtMVC.controller.Category', {//контройлер Category
    extend: 'Ext.app.Controller',
    
    stores: ['Shop', 'Category'],
    models: ['Category', 'Item'],

    views: ['menu.TopMenu',
        'item.TabPanel', 'item.ItemGrid',
        'Category.CategoryGrid', 'Category.Add', 'Category.MenuGrid', 'Category.Formula'],

    refs: [ {
        ref: 'CategoryGrid',
        selector: 'grid'
    },
    {
        ref: 'menugrid',
        selector: 'menu'
    }, {
        ref: 'topMenu',
        selector: 'menu'
    }, {
        ref: 'tabpanel',
        selector: 'panel'
    }
    ],

    init: function () {
        this.control({
            'categorygrid dataview': {
                itemdblclick: this.editItem
            },
            'categoryform button[action=saveCategory]': {
                click: this.updateItem
            },
            'categorygrid button[action=addCategory]': {
                click: this.addItem
            },
            'categoryform button[action=addingCategory]': {
                click: this.addingItem
            },
            'categorygrid button[itemId=deleteCategory]': {
                click: this.deleteItem
            }
        });
    },
    //edit category
    editItem: function (grid, record) {
        var edit = Ext.create('ExtMVC.view.Category.Formula').show();

        if (record) {
            edit.down('form').loadRecord(record);
        }
    },

    updateItem: function (button, event) {

        var win = button.up('window'),
        form = win.down('form').getForm();
        record = form.getRecord(),
        values = form.getValues();

        if (form.isValid()) {

            record.set(values);
        }
        else Ext.Msg.alert('Invalid form!', 'Please try again.');

        win.close();
        this.getCategoryStore().sync();

    },

    //add Category
    addItem: function (grid, record) {
        var add = Ext.create('ExtMVC.view.Category.Add').show();

        if (record) {
            add.down('form').loadRecord(record);
        }
    },

    addingItem: function (button, event) {

        var novo = false;

        var win = button.up('window'),
		form = win.down('form').getForm();
        record = form.getRecord(),
        values = form.getValues();

        if (form.isValid()) {

            record = Ext.create('ExtMVC.model.Category');
            record.set(values);
            this.getCategoryStore().add(record);
            novo = true;
        }
        else Ext.Msg.alert('Invalid form!', 'Please try again.');

        win.close();
        this.getCategoryStore().sync();
    },

    //delete Category
    deleteItem: function (button) {
        Ext.Msg.confirm("Confirmation", "Do you want to Delete Category?", function (btnText) {
            if (btnText === "no") {
                // function on click no
            }
            else if (btnText === "yes") {

                var grid = this.getCategoryGrid();
                var record = grid.getSelectionModel().getSelection();
                var store = this.getCategoryStore();

                if (record.length)
                    store.remove(record);
                this.getCategoryStore().sync();
            }
        }, this);

    }
    
});