Ext.define('ExtMVC.view.order.AddToOrder', {
    extend: 'Ext.window.Window',
    alias: 'widget.orderForm',

    requires: ['Ext.form.Panel', 'Ext.form.field.Text'],

    title: 'Add To Order Item',
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
                        name: 'OrderID',
                        fieldLabel: 'OrderID',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'ItemID',
                        fieldLabel: 'ItemID',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'Code',
                        fieldLabel: 'Code',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'Title',
                        fieldLabel: 'Title',
                        readOnly: true,
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
                        xtype: 'datefield',
                        format: 'd/m/Y',
                        name: 'OrderDate',
                        fieldLabel: 'OrderDate',
						value: new Date(),  // defaults to today
                        allowBlank: false,
						readOnly: true
                    }, {
                        xtype: 'datefield',
                        format: 'd/m/Y',
                        name: 'ChangeStatus',
                        fieldLabel: 'ChangeStatus',
                        value: new Date(),  // defaults to today
                        allowBlank: false,
                        readOnly: true
                    }, {
                        xtype: 'textfield',
                        name: 'Status',
                        fieldLabel: 'Status',
                        allowBlank: false,
                        value: 'Open',
                        readOnly: true
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
                text: 'Add To Order',
                action: 'saveOrder'
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
