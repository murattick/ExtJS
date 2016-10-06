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
            icon: 'Content/Images/Delete.gif',  // Use a URL in the icon config

            tooltip: 'Delete',
            handler: function (grid, rowIndex, colIndex, button, e, options) {
                //запрос на удаление
                var record = grid.getSelectionModel().getSelection();
                var store = grid.getStore();

                var rec = grid.getStore().getAt(rowIndex);
                
                if (store.getCount() >= 1 && record[0]) {
                    var idToDelete = record[0].get('OrderID');
                    var status = record[0].get('Status');
                    Ext.Msg.show({  //подтверждающее окно
                        title: 'Delete?',
                        msg: 'Delete confirm if order status = open! Are you sure you want to delete ID(' + idToDelete + ')?',
                        buttons: Ext.Msg.YESNO,
                        icon: Ext.Msg.QUESTION,
                        fn: function (buttonId) {
                            if (buttonId == 'yes') {
                                Ext.Ajax.request({ //запрос на удаление
                                    url: 'Checkout/DeleteTrackOrder/',
                                    method: 'post',
                                    params: { OrderID: idToDelete, Status: status },

                                    success: function (response, opts) { //сообщение от успешном выполнении
                                       
                                        data = Ext.decode(response.responseText);
                                        if (data.errorMessage != null) {
                                            Ext.Msg.alert('Delete Message', data.errorMessage, Ext.emptyFn);
                                            grid.getStore().remove(rec);
                                        } else {
                                           //
                                        }
                                    },
                                    failure: function (response) { //сообщение об ошибке
                                        data = Ext.decode(response.responseText);
                                        Ext.Msg.alert('Delete Error', data.errorMessage, Ext.emptyFn);
                                    },
                                });
                            }
                        }
                    });
                }
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
                                    return matcher.test(record.get('ItemID')) ||
                                            matcher.test(record.get('Title'));
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