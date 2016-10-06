Ext.define('ExtMVC.view.login.AllAccountGrid' ,{ //грид вывода всех аккаунтов
    extend: 'Ext.grid.Panel',
    alias : 'widget.allaccountGrid',
    requires: ['Ext.toolbar'],

    store: 'AllAccount',
    wight: 400,


    initComponent: function () {
        var me = this;
        this.columns = [
    { xtype: 'rownumberer' },
    { header: 'UserId', width: 170, dataIndex: 'UserId', flex: 1 },
    { header: 'Login', width: 170, dataIndex: 'UserName', flex: 1 },
	{ header: 'Code', width: 170, dataIndex: 'Code', flex: 1 },
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
            items: [{
                xtype: 'textfield',
                emptyText: 'Search', //поиск
                listeners: {
                    change: function (field, newValue, oldValue, options) {
                        var grid = me;
                        grid.store.clearFilter();


                        if (newValue) {
                            var matcher = new RegExp(Ext.String.escapeRegex(newValue), "i");
                            grid.store.filter({
                                filterFn: function (record) {
                                    return matcher.test(record.get('UserId')) ||
                                            matcher.test(record.get('UserName')) ||
                                            matcher.test(record.get('FirstName')) ||
                                            matcher.test(record.get('LastName')) ||
                                            matcher.test(record.get('Email'));
                                }
                            });
                        }
                    }
                }
            }
            ]
        },
            {
                xtype: 'pagingtoolbar',
                dock: 'top',
                store: 'AllAccount',
                displayInfo: true,
                displayMsg: 'View Acconts {0} - {1} of {2}',
                emptyMsg: "No Data"
            }];

        this.callParent();
    }
});