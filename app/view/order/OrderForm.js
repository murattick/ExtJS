Ext.define('ExtMVC.view.order.OrderForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.orderform',

    requires: ['Ext.form.Panel', 'Ext.form.field.Text'],

    title: 'Order',
    width: 500,
    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        this.items = [
        {
            xtype: 'form',
            padding: '5 5 0 5',
            border: false,
            style: 'background-color: #fff;',

            fieldDefaults: {
                anchor: '100%',
                labelAlign: 'left',
                allowBlank: false,
                combineErrors: true,
                msgTarget: 'side'
            },

            items: [
                {
                    xtype: 'textfield',
                    name: 'ItemID',
                    fieldLabel: 'ItemID'
                }, {
                    xtype: 'textfield',
                    name: 'CartID',
                    fieldLabel: 'CartID'
                },{
                    xtype: 'textfield',
                    name: 'Title',
                    fieldLabel: 'Title'
                }, {
                    xtype: 'textfield',
                    name: 'Code',
                    fieldLabel: 'Code'
                },{
                    xtype: 'textfield',
                    name: 'Price',
                    fieldLabel: 'Price'
                }, {
                    xtype: 'textfield',
                    name: 'Count',
                    fieldLabel: 'Count'
                },
            {
                xtype: 'textfield',
                name: 'FirstName',
                fieldLabel: 'First Name'
            },
            {
                xtype: 'textfield',
                name: 'LastName',
                fieldLabel: 'Last Name'
            },
            {
                xtype: 'textfield',
                name: 'Address',
                fieldLabel: 'Address'
            },
            {
                xtype: 'textfield',
                name: 'City',
                fieldLabel: 'City'
            },
            {
                xtype: 'textfield',
                name: 'Oblast',
                fieldLabel: 'Oblast'
            },
            {
                xtype: 'textfield',
                name: 'Postal_code',
                fieldLabel: 'Postal Code',
                //regex: /^\d{3}-\d{3}$/,
                regexText: 'Must be in the format 123-456'
            },
            {
                xtype: 'textfield',
                name: 'Country',
                fieldLabel: 'Country'
            },
            {
                xtype: 'textfield',
                name: 'Phone',
                fieldLabel: 'Phone'
            },
            {
                xtype: 'textfield',
                name: 'Email',
                fieldLabel: 'Email Address',
                vtype: 'email'
            }]
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
                action: 'createOrder'
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