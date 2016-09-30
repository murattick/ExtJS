Ext.define('ExtMVC.view.order.Formula', {
    extend: 'Ext.window.Window',
    alias : 'widget.updateForm',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Edit Order',
    layout: 'fit',
    autoShow: true,
    width: 300,


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
					    name : 'OrderID',
					    fieldLabel: 'OrderID',
						readOnly: true
					},{
					    xtype: 'textfield',
					    name : 'ItemID',
					    fieldLabel: 'ItemID',
						readOnly: true
					},    
                    {
                        xtype: 'textfield',
                        name : 'Title',
                        fieldLabel: 'Title',
						readOnly: true
                    },{
                        xtype: 'textfield',
                        name: 'Code',
                        fieldLabel: 'ItemCode',
						readOnly: true
                    },{
                        xtype: 'radiogroup',
                        name : 'Status',
                        fieldLabel: 'Status',
						columns: 3,
                        vertical: true,
						items: [
                            { boxLabel: 'Open', name: 'Status', inputValue: 'Open', checked: true },
                            { boxLabel: 'Post', name: 'Status', inputValue: 'Post' },
                            { boxLabel: 'Close', name: 'Status', inputValue: 'Close' }
                        ]
                    },{
                        xtype: 'textfield',
                        name : 'Count',
                        fieldLabel: 'Count',
						readOnly: true
                    },{
                        xtype: 'textfield',
                        name : 'Price',
                        fieldLabel: 'Price',
						readOnly: true,
						renderer: Ext.util.Format.usMoney
                    }, {
                        xtype: 'datefield',
                        altFormats: 'd.m.Y',
                        name: 'ChangeStatus',
                        fieldLabel: 'ChangeStatus',
                        value: new Date(),  // defaults to today
                        maxValue: new Date(),
                        allowBlank: false,
                        readOnly: true
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
