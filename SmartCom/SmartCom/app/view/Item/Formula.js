Ext.define('ExtMVC.view.item.Formula', { // модалка редактирования
    extend: 'Ext.window.Window',
    alias : 'widget.itemform',
    store: 'Shop',
    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Edit Item',
    layout: 'fit',
    autoShow: true,
    width: 280,


    initComponent: function () {
        var category = Ext.data.StoreManager.get("Category");
        category.load();
        var shop = Ext.data.StoreManager.get("Shop");
        shop.load();
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
					    name : 'ItemID',
					    fieldLabel: 'Id',
					    hidden:true
					},
                    {
                        xtype: 'textfield',
                        name: 'Level',
                        fieldLabel: 'Level',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        name : 'Title',
                        fieldLabel: 'Title'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Code',
                        emptyText: 'xx-xxxx-xxxx',
                        regex: /^\d{2}-\d{4}-[A-Z]{2}\d{2}$/, 
                        regexText: 'Must be in the format 12-3456-AB78',
                        fieldLabel: 'Code'
                    },
                    {  //вывод из стора списка добавленных категорий
                        xtype: 'combobox',
                        fieldLabel: 'Choose Category',
                        displayField: 'Name',
                        valueField: 'CategoryID',
                        store: category,
                        name: 'CategoryID',
                        queryMode: 'local',
                    },
                    { //вывод из стора списка добавленных брендов
                        xtype: 'combobox',
                        fieldLabel: 'Choose Brand',
                        displayField: 'Brand',
                        valueField: 'Brand',
                        store: shop,
                        name: 'Brand',
                        queryMode: 'local',

                    },
                    {
                        xtype: 'numberfield',
                        name : 'Price',
                        fieldLabel: 'Price',
                        renderer: Ext.util.Format.usMoney,
                        minValue: 1

                    }
                ]
            }
        ];
        
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            id:'buttons',
            ui: 'footer',
            items: ['->', {
                iconCls: 'icon-save',
                text: 'Save',
                action: 'saveItem'
            },{
                iconCls: 'icon-reset',
                text: 'Cancel',
                scope: this,
                handler: this.close
            }]
        }];

        this.callParent(arguments);
    }
});
