Ext.define('ExtMVC.view.cart.CartGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.cartGrid',

    store: 'Cart',
    
    features: [{
        ftype: 'summary'
    }],
    wight: 400,

    loadingText: 'Loading list...',

    columns: [
    { xtype: 'rownumberer' },
    { header: 'ItemID', width: 170, dataIndex: 'ItemID', flex: 1 },
    { header: 'Title', width: 170, dataIndex: 'Title', flex: 1 },
    { text: 'Code', width: 170, dataIndex: 'Code', flex: 1 },
    { text: 'Price', width: 170, dataIndex: 'Price', flex: 1, renderer: Ext.util.Format.usMoney},
    { text: 'Count', width: 170, dataIndex: 'Count', flex: 1 },
    {
        id: 'cost',
        header: 'Cost',
        width: 75,
        sortable: false,
        groupable: false,
        renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
            return Ext.util.Format.usMoney(record.get('Price') * record.get('Count'));
        },
        dataIndex: 'cost',
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
        xtype: 'actioncolumn',
        width: 50,
        text: 'Action',
        items: [{
            icon: 'Content/Images/Delete.gif',  // Use a URL in the icon config
            
            tooltip: 'Delete',
            handler: function (grid, rowIndex, colIndex) {
                var rec = grid.getStore().getAt(rowIndex);
                grid.getStore().remove(rec);
               
            }
        }]
    }, {
        xtype: 'actioncolumn',
        width: 50,
        text: 'Action',
        items: [{
            icon: 'Content/Images/cart.png',  // Use a URL in the icon config
            tooltip: 'AddToOrder',
            handler: function (grid, rowIndex, colIndex) {
                var rec = grid.getStore().getAt(rowIndex);
                var cart = Ext.create('ExtMVC.view.order.AddToOrder').show();

                if (rec) {
                    cart.down('form').loadRecord(rec);
                    grid.getStore().remove(rec);
                }
            }
        }]
    }
    ],


    initComponent: function () {
        var me = this;

        this.dockedItems = [{
            xtype: 'toolbar',
            items: [
            {
                iconCls: 'remove',
                text: 'Delete',
                handler: function () {

                    var selection = me.getView().getSelectionModel().getSelection();
                    var store = me.getView().getStore();
                    if (selection.length) {
                        store.remove(selection);           
                    }
                    else
                        Ext.Msg.alert('Status', 'Please select at least one record to delete!');
                }
            }]
        }];

        this.callParent(arguments);
    }
});