Ext.define('ExtMVC.view.item.ItemGridMause', {
        extend: 'Ext.grid.Panel',

        alias: 'widget.itemGridMause',
        store: 'ShopMause',
        requires: [
                   //'Ext.ux.grid.FiltersFeature',
                   'Ext.toolbar.Paging'],

        initComponent: function () {
            this.columns = [
               //{ xtype: 'rownumberer' },
               { text: 'Title', width: 170, dataIndex: 'Title', flex: 1 },
               { text: 'Code', width: 170, dataIndex: 'Code', flex: 1 },
               { text: 'Brand', width: 170, dataIndex: 'Brand', flex: 1 },
               { text: 'Category', width: 170, dataIndex: 'Category', flex: 1 },
               { text: 'Price', width: 170, dataIndex: 'Price', flex: 1 },
               {
                   xtype: 'actioncolumn',
                   width: 50,
                   text: 'Action',
                   items: [{
                       icon: 'app/img/cartLogo.png',  // Use a URL in the icon config
                       tooltip: 'AddToCart',
                       handler: function (grid, rowIndex, colIndex) {
                           var rec = grid.getStore().getAt(rowIndex);
                           var cart = Ext.create('ExtMVC.view.cart.AddToCart').show();

                           if (rec) {
                               cart.down('form').loadRecord(rec);
                           }
                       }
                   }]
               }
            ];
            
            this.dockedItems = [
            {
                xtype: 'pagingtoolbar',
                dock: 'top',
                store: 'ShopMause',
                displayInfo: true,
                displayMsg: 'View Items {0} - {1} of {2}',
                emptyMsg: "No Data"
            }];

            this.callParent();
        }
    });
