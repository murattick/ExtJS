Ext.define('ExtMVC.view.order.OrderGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.orderGrid',
    itemId: 'orderGrid',
    store: 'Order',
    requires: ['Ext.toolbar.Paging'],
    loadingText: 'Loading list...',

    initComponent: function () {
        var me = this;
        this.columns = [
    { xtype: 'rownumberer' },
    { header: 'OrderID', width: 170, dataIndex: 'OrderID', flex: 1 },
    { text: 'UserName', width: 170, dataIndex: 'UserName', flex: 1 },
    { header: 'ItemID', width: 170, dataIndex: 'ItemID', flex: 1 },
    { text: 'ItemCode', width: 170, dataIndex: 'Code', flex: 1 },
    { text: 'Title', width: 170, dataIndex: 'Title', flex: 1 },
    { text: 'Price', width: 170, dataIndex: 'Price', flex: 1, renderer: Ext.util.Format.usMoney },
	{ text: 'Count', width: 170, dataIndex: 'Count', flex: 1 },
	{ text: 'Status', width: 170, dataIndex: 'Status', flex: 1 },
    { text: 'OrderDate', width: 170, dataIndex: 'OrderDate', flex: 1 },
    { text: 'ChangeStatus', width: 170, dataIndex: 'ChangeStatus', flex: 1 },
    {
        id: 'Total',
        header: 'Total',
        width: 75,
        sortable: false,
        groupable: false,
        renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
            return Ext.util.Format.usMoney(record.get('Price') * record.get('Count'));
        },
        dataIndex: 'Total',
        summaryType: function(records){
            var i = 0,
                length = records.length,
                total = 0,
                record;

            for (; i < length; ++i) {
                record = records[i];
                total += record.get('Price') * record.get('Count');
            }
            return total;
        },
        summaryRenderer: Ext.util.Format.usMoney
    },
              
        ];
            
        this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                text: 'Delete',
                action: 'delete',
                itemId: 'deleteOrder' 
            },'-', {
                xtype: 'textfield',
                emptyText: 'Search',
                listeners: {
                    change: function (field, newValue, oldValue, options) {
                        var grid = me;
                        grid.store.clearFilter();


                        if (newValue) {
                            var matcher = new RegExp(Ext.String.escapeRegex(newValue), "i");
                            grid.store.filter({
                                filterFn: function (record) {
                                    return matcher.test(record.get('ItemID')) ||
                                            matcher.test(record.get('Title')) ||
                                            matcher.test(record.get('UserName')) ||
                                            matcher.test(record.get('Status'));
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
            store: 'Order',
            displayInfo: true,
            displayMsg: 'View Items {0} - {1} of {2}',
            emptyMsg: "No Data"
        }];

        this.callParent();
    }

    
});