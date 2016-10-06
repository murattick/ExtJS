Ext.define('ExtMVC.view.item.AdminItemGrid', { //грид админа
        extend: 'Ext.grid.Panel',
        alias: 'widget.adminitemgrid',

        store: 'AdminShop',
        requires: ['Ext.toolbar.Paging'],
        loadingText: 'Loading list...',
	 

		initComponent: function () {
		    var me = this;
            this.columns = [
               { xtype: 'rownumberer' },
               { text: 'ID', width: 170, dataIndex: 'ItemID', flex: 1 },
               { text: 'Title', width: 170, dataIndex: 'Title', flex: 1 },
               { text: 'Code', width: 170, dataIndex: 'Code', flex: 1 },
               { text: 'Brand', width: 170, dataIndex: 'Brand', flex: 1 },
               { text: 'Category', width: 170, dataIndex: 'Category', flex: 1 },
               { text: 'Price', width: 170, dataIndex: 'Price', flex: 1, renderer: Ext.util.Format.usMoney },
               {
                   xtype: 'actioncolumn',
                   width: 50,
                   text: 'Action',
                   items: [{
                       icon: 'Content/Images/Cart.png',  // добавит в корзину
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
            
            this.dockedItems = [{
                xtype: 'toolbar',
                items: [{ //кнопка добавления
                    itemId: 'add',
                    text: 'Add',
                    action: 'add'
                }, '-', { //кнопка удаления
                    text: 'Delete',
					itemId: 'delete' 
                }, '-', { //поиск
                    xtype: 'textfield',
                    emptyText: 'Search for Title or Category',
                    width: 170,
                    listeners: {
                        change: function (field, newValue, oldValue, options) {
                            var grid = me;
                            grid.store.clearFilter();


                            if (newValue) {
                                var matcher = new RegExp(Ext.String.escapeRegex(newValue), "i");
                                grid.store.filter({
                                    filterFn: function (record) {
                                        return  matcher.test(record.get('Title')) ||
                                                matcher.test(record.get('Category'));
                                    }
                                });
                            }
                        }
                    }
                }, '->', { //открывание новой таб с заказами
                    text: 'Grid Order',
                    width: 70,
                    handler: function (num) {
                        Ext.getCmp('tabs').add({
                            title: 'Grid Order',
                            dockedItems: [{
                                xtype: 'OrderUserGrid'
                            }],
                            closable: true
                        });
                    }
                },'-',{
            text: 'All Account', //открывавние табки с аккаунтами
            handler: function (num) {
                Ext.getCmp('tabs').add({
                    title: 'All account',
                    dockedItems: [{
                        xtype: 'allaccountGrid'
                    }],
                    closable: true
                });
            }
        }
                ]
            },
            {
                xtype: 'pagingtoolbar',
                dock: 'top',
                store: 'AdminShop',
                displayInfo: true,
                displayMsg: 'View Items {0} - {1} of {2}',
                emptyMsg: "No Data"
            }];

            this.callParent();
        }
    });
