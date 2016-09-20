Ext.define('ExtMVC.view.login.AddDiscount', {
    extend: 'Ext.window.Window',
    alias : 'widget.discountform',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Add Discount',
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
					    name: 'UserId',
					    fieldLabel: 'Id',
					    hidden: true
					},
					{
					    xtype: 'numberfield',
					    fieldLabel: 'Discount',
					    name: 'Discount',
					    allowBlank: false,
					    minValue: 1,
					    maxValue: 25,
					},
                    {
                        xtype: 'textfield',
                        name: 'Code',
                        emptyText: 'xxxx-xxxx',
                        regex: /^\d{4}-201\d{1}$/,
                        regexText: 'Must be in the format XXXX-YYYY X - int, Y - year',
                        fieldLabel: 'Code',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'FirstName',
                        fieldLabel: 'FirstName',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'LastName',
                        fieldLabel: 'LastName',
                        hidden: true
                    },
                    {
                        xtype: 'numberfield',
                        name: 'Phone',
                        fieldLabel: 'Phone',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'Country',
                        fieldLabel: 'Country',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'State',
                        fieldLabel: 'State',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'City',
                        fieldLabel: 'City',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'PostalCode',
                        emptyText: 'xxx-xxx',
                        //maskRe: /[\d\-]/,
                        regex: /^\d{3}-\d{3}$/,
                        regexText: 'Must be in the format 123-123',
                        fieldLabel: 'PostalCode',
                        hidden: true
                    },
                    {
                        xtype: 'textareafield',
                        name: 'Address',
                        fieldLabel: 'Address',
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
                text: 'Save',
                action: 'save'
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
