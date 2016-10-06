//модалка на добавление в корзину
Ext.define('ExtMVC.view.cart.AddToCart', {
    extend: 'Ext.window.Window',
    alias: 'widget.itemform',

    requires: ['Ext.form.Panel', 'Ext.form.field.Text'],

    title: 'Add To Cart Item',
    layout: 'fit',
    autoShow: true,
    width: 280,


    initComponent: function () {
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
                        name: 'Title',
                        fieldLabel: 'Title',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'Code',
                        fieldLabel: 'Code',
                        readOnly: true
                    },
                    {
                        xtype: 'numberfield',
                        name: 'Price',
                        fieldLabel: 'Price',
                        readOnly: true
                        
                    },
                    {
                        xtype: 'numberfield',
                        name: 'Count',
                        fieldLabel: 'Count',
                        allowBlank: false,
                        value: '1',
                        minValue: 1,
                        maskRe: /[1-9]/i //только числа
                    },
                    {
                        xtype: 'textfield',
                        name: 'ItemID',
                        fieldLabel: 'ItemID',
                        hidden: true
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
                text: 'Add To Cart',
                action: 'AddToCart'
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
