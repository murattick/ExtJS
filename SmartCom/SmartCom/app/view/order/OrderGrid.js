Ext.define('ExtMVC.view.order.OrderGrid' ,{ //грид всех заказов
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
    { header: 'UserName', width: 170, dataIndex: 'UserName', flex: 1 },
    { header: 'Discount %', width: 170, dataIndex: 'Discount', flex: 1 },
    { header: 'ItemID', width: 170, dataIndex: 'ItemID', flex: 1 },
    { header: 'ItemCode', width: 170, dataIndex: 'Code', flex: 1 },
    { header: 'Title', width: 170, dataIndex: 'Title', flex: 1 },
    { header: 'Price', width: 170, dataIndex: 'Price', flex: 1, renderer: Ext.util.Format.usMoney },
	{ header: 'Count', width: 170, dataIndex: 'Count', flex: 1 },
	{ header: 'Status', width: 170, dataIndex: 'Status', flex: 1 },
    {
        header: 'OrderDate', width: 170, dataIndex: 'OrderDate', xtype:'datecolumn',
        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'), flex: 1
    },
{
    header: 'ChangeStatus', width: 170, dataIndex: 'ChangeStatus', xtype: 'datecolumn',
    renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'), flex: 1
},
    { //вывод итоговой стоимости закза 
        id: 'Total',
        header: 'Total',
        width: 75,
        sortable: false,
        groupable: false,
        renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
            return Ext.util.Format.usMoney(record.get('Price') * record.get('Count') - (record.get('Price') * record.get('Count') * record.get('Discount') / 100));
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
        {
            xtype: 'actioncolumn',     //удаление заказа
            width: 50,
            text: 'Action',
            items: [{
                icon: 'Content/Images/Delete.gif',

                tooltip: 'Delete',
                handler: function (grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    Ext.Msg.confirm("Confirmation", "Do you want to Delete your order '" + rec.get('OrderID') + "'? Order will be removed if the order status is 'Open' if you are not an administrator.", function (btnText) {
                        if (btnText === "no") {
                            // function on click no
                        }
                        else if (btnText === "yes") {

                            grid.getStore().remove(rec);
                            grid.getStore().sync();
                        }
                    }, this);

                }
            }]
        },
        ];
            
        this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                xtype: 'textfield',
                emptyText: 'Search',        //поиск
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