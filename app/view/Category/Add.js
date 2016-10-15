Ext.define('ExtMVC.view.Category.Add', { //модалка на добавление нового Category
    extend: 'Ext.window.Window',
    alias: 'widget.categoryform',
    store: 'Shop',
    requires: ['Ext.form.Panel', 'Ext.form.field.Text'],

    title: 'Add Category',
    layout: 'fit',
    autoShow: true,
    width: 300,

    initComponent: function () {

        var category = Ext.data.StoreManager.get("Category");
        category.load();

        this.items = [
            {
                xtype: 'form',

                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',

                fieldDefaults: {
                    anchor: '100%',
                    labelAlign: 'right',
                    allowBlank: false,
                    combineErrors: true,
                    msgTarget: 'side'
                },

                items: [

                    {
                        xtype: 'textfield',
                        name: 'Name',
                        fieldLabel: 'Name',

                    }
                ]
            }
        ];

        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            id: 'buttons',
            ui: 'footer',
            items: ['->', {
                iconCls: 'icon-save',
                text: 'Create',
                action: 'addingCategory'
            }, {
                iconCls: 'icon-reset',
                text: 'Cancel',
                scope: this,
                handler: this.close
            }]
        }];

        this.callParent(arguments);
    }
});
