Ext.define('ExtMVC.view.order.TrackOrder' ,{ //грид для отслеживание заказа
    extend: 'Ext.grid.Panel',
    alias : 'widget.trackOrderGrid',
    requires: ['Ext.toolbar.Paging'],
    store: 'TrackOrder',
    wight: 400,

    initComponent: function () {
        var me = this;
        this.columns = [
    { xtype: 'rownumberer' },
    { header: 'OrderNumber', width: 170, dataIndex: 'OrderID', flex: 1 },
    { text: 'UserName', width: 170, dataIndex: 'UserName', flex: 1 },
    { header: 'ItemID', width: 170, dataIndex: 'ItemID', flex: 1 },
    { text: 'Title', width: 170, dataIndex: 'Title', flex: 1 },
    { text: 'Price', width: 170, dataIndex: 'Price', flex: 1, renderer: Ext.util.Format.usMoney },
	{ text: 'Count', width: 170, dataIndex: 'Count', flex: 1 },
	{ text: 'Status', width: 170, dataIndex: 'Status', flex: 1 },
    { text: 'ItemCode', width: 170, dataIndex: 'Code', flex: 1 },
    { text: 'OrderDate', width: 170, dataIndex: 'OrderDate', xtype: 'datecolumn', renderer: Ext.util.Format.dateRenderer('d/m/Y'), flex: 1 },
    { text: 'ChangeStatus', width: 170, dataIndex: 'ChangeStatus', xtype: 'datecolumn', renderer: Ext.util.Format.dateRenderer('d/m/Y'), flex: 1 },
    {                        //вывод итоговой стоимости
        id: 'Total',
        header: 'Total',
        width: 75,
        sortable: false,
        groupable: false,
        renderer: function (value, metaData, record, rowIdx, colIdx, store, view) {
            return Ext.util.Format.usMoney(record.get('Price') * record.get('Count'));
        },
        dataIndex: 'Total',
        summaryType: function (records) {
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
    }, {
        xtype: 'actioncolumn',     //удаление заказа
        width: 50,
        text: 'Action',
        items: [{
            icon: 'Content/Images/Delete.gif', 

            tooltip: 'Delete',
            handler: function (grid, rowIndex, colIndex) {
                var rec = grid.getStore().getAt(rowIndex);
                Ext.Msg.confirm("Confirmation", "Do you want to Delete your order '" + rec.get('OrderID') + "'? Order will be removed if the order status is 'Open'.", function (btnText) {
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
                emptyText: 'Search', //поиск
                xtype: 'textfield',
                listeners: {
                    change: function (field, newValue, oldValue, options) {
                        var grid = me;
                        grid.store.clearFilter();


                        if (newValue) {
                            var matcher = new RegExp(Ext.String.escapeRegex(newValue), "i");
                            grid.store.filter({
                                filterFn: function (record) {
                                    return matcher.test(record.get('Status')) ||
                                            matcher.test(record.get('Title')) ||
                                            matcher.test(record.get('OrderID'));
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
        store: 'TrackOrder'
    }];

        this.callParent();
    }
});