Ext.define('ExtMVC.view.login.Formula', { //добавление адреса к аккаунту
    extend: 'Ext.window.Window',
    alias : 'widget.addressform',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Add Address',
    layout: 'fit',
    autoShow: true,
    width: 280,


    initComponent: function() {
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
					    name : 'UserId',
					    fieldLabel: 'Id',
					    hidden: true
					},
                    {
                        xtype: 'textfield',
                        name: 'Code',
                        emptyText: 'xxxx-xxxx',
                        regex: /^\d{4}-201\d{1}$/,
                        regexText: 'Must be in the format XXXX-YYYY X - int, Y - year',
                        fieldLabel: 'Code'
                    },    
                    {
                        xtype: 'textfield',
                        name: 'FirstName',
                        fieldLabel: 'FirstName'
                    },
                    {
                        xtype: 'textfield',
                        name: 'LastName',
                        fieldLabel: 'LastName'
                    },
                    {
                        xtype: 'numberfield',
                        name: 'Phone',
                        fieldLabel: 'Phone'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Country',
                        fieldLabel: 'Country'
                    },
                    {
                        xtype: 'textfield',
                        name: 'State',
                        fieldLabel: 'State'
                    },
                    {
                        xtype: 'textfield',
                        name: 'City',
                        fieldLabel: 'City'
                    },
                    {
                        xtype: 'textfield',
                        name: 'PostalCode',
                        emptyText: 'xxx-xxx',
                        //maskRe: /[\d\-]/,
                        regex: /^\d{3}-\d{3}$/,
                        regexText: 'Must be in the format 123-123',
                        fieldLabel: 'PostalCode'
                    },
                    {
                        xtype: 'textareafield',
                        name: 'Address',
                        fieldLabel: 'Address'
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
                action: 'save'
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
