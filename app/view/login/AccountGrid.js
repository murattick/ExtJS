Ext.define('ExtMVC.view.login.AccountGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.accountGrid',
    requires: ['Ext.toolbar'],

    iconCls: 'icon-grid',

    store: 'Account',
    wight: 400,


    initComponent: function () {
        var me = this;
        this.columns = [
    { xtype: 'rownumberer' },
    { header: 'UserId', width: 170, dataIndex: 'UserId', flex: 1 },
    { header: 'Login', width: 170, dataIndex: 'UserName', flex: 1 },
	{ header: 'Code', width: 170, dataIndex: 'Code', flex: 1 },
	//{ header: 'Discount %', width: 170, dataIndex: 'Discount', flex: 1 },
    { header: 'FirstName', width: 170, dataIndex: 'FirstName', flex: 1 },
    { header: 'LastName', width: 170, dataIndex: 'LastName', flex: 1 },
	{ header: 'Address', width: 170, dataIndex: 'Address', flex: 1 },
	{ header: 'City', width: 170, dataIndex: 'City', flex: 1 },
	{ header: 'State', width: 170, dataIndex: 'State', flex: 1 },
	{ header: 'PostalCode', width: 170, dataIndex: 'PostalCode', flex: 1 },
	{ header: 'Country', width: 170, dataIndex: 'Country', flex: 1 },
	{ header: 'Phone', width: 170, dataIndex: 'Phone', flex: 1 },
	{ header: 'Email', width: 170, dataIndex: 'Email', flex: 1 },

        ];

        this.dockedItems = [{
            xtype: 'toolbar',
            //items: [{
            //    iconCls:'remove',
            //    text: 'Delete',
            //    action: 'delete',
            //    itemId: 'delete' 
            //}]
            
        }];

        this.callParent();
    }
});