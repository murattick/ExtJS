Ext.define('ExtMVC.view.cart.Formula', {
    extend: 'Ext.window.Window',
    alias : 'widget.itemform',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Edit Caunt',
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
					    name : 'ItemID',
					    fieldLabel: 'Id',
					    hidden:true
					},    
                    {
                        xtype: 'textfield',
                        name : 'Title',
                        fieldLabel: 'Title',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'Code',
                        emptyText: 'xx-xxxx-xxxx',
                        regex: /^\d{2}-\d{4}-[A-Z]{2}\d{2}$/,
                        regexText: 'Must be in the format 12-3456-AB78',
                        fieldLabel: 'Code',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        name : 'Price',
                        fieldLabel: 'Price',
                        readOnly: true,
                        renderer: Ext.util.Format.usMoney
                    },
                     {
                         xtype: 'numberfield',
                         name: 'Count',
                         fieldLabel: 'Count',
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
