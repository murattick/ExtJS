Ext.define('ExtMVC.view.Category.Formula', { // модалка редактирования category
    extend: 'Ext.window.Window',
    alias : 'widget.categoryform',
    store: 'Category',
    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Edit Category',
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
					    name : 'CategoryID',
					    fieldLabel: 'Id',
					    hidden:true
					},    
                    {
                        xtype: 'textfield',
                        name : 'Name',
                        fieldLabel: 'Name'
                    },
                   
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
                action: 'saveCategory'
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
