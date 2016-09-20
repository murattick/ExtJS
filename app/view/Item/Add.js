Ext.define('ExtMVC.view.item.Add', {
    extend: 'Ext.window.Window',
    alias : 'widget.itemform',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Add Item',
    layout: 'fit',
    autoShow: true,
    width: 300,
    
    iconCls: 'icon-user',

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
                        name: 'Title',
                        fieldLabel: 'Title',
						
                    },                    
                    {
                        xtype: 'textfield',
                        name: 'Code',
                        emptyText: 'xx-xxxx-xxxx',
                        regex: /^\d{2}-\d{4}-[A-Z]{2}\d{2}$/, 
						value: '12-3456-AB78',
                        regexText: 'Must be in the format 12-3456-AB78',
                        fieldLabel: 'Code'
                    },
                    {  
                            xtype: 'radiogroup',
                            fieldLabel: 'Category',
                            columns: 2,
                            vertical: true,
                            items: [
                                { boxLabel: 'Audio', name: 'Category', inputValue: 'Audio' },
                                { boxLabel: 'Flash', name: 'Category', inputValue: 'Flash' },
                                { boxLabel: 'HDD', name: 'Category', inputValue: 'HDD' },
                                { boxLabel: 'Laptop', name: 'Category', inputValue: 'Laptop' },
                                { boxLabel: 'Mause', name: 'Category', inputValue: 'Mause' },
                                { boxLabel: 'Monitor', name: 'Category', inputValue: 'Monitor' },
                                { boxLabel: 'Phone', name: 'Category', inputValue: 'Phone' },
                                { boxLabel: 'Photo', name: 'Category', inputValue: 'Photo' },
                                { boxLabel: 'TV', name: 'Category', inputValue: 'TV' },
                                { boxLabel: 'Video', name: 'Category', inputValue: 'Video' },
                            ] 
                    },
                    {
                        xtype: 'textfield',
                        name: 'Brand',
                        fieldLabel: 'Brand'
                    },
                    {
                        xtype: 'numberfield',
                        name: 'Price',
                        fieldLabel: 'Price',
                        renderer: Ext.util.Format.usMoney
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
                text: 'Add',
                action: 'adding'
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
