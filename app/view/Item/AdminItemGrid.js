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
               { text: 'Category', width: 170, dataIndex: 'CategoryID', flex: 1 },
               //{ text: 'Category', width: 170, dataIndex: 'Category.Name', flex: 1 },
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
                   }, {
                       icon: 'Content/Images/Delete.gif',  // удаление из корзины

                       tooltip: 'Delete',
                       handler: function (grid, rowIndex, colIndex) {
                           var rec = grid.getStore().getAt(rowIndex);
                           Ext.Msg.confirm("Confirmation", "Do you want to Delete item '" + rec.get('Title') + "'?", function (btnText) {
                               if (btnText === "no") {
                                   // function on click no
                               }
                               else if (btnText === "yes") {

                                   grid.getStore().remove(rec);
                                   grid.getStore().sync();
                                   var shop = Ext.data.StoreManager.get("Shop");
                                   shop.remove(rec);
                                   shop.load();
                               }
                           }, this);

                       }
                   }]
               }
              
            ];
            
            this.dockedItems = [{
                xtype: 'toolbar',
                items: [{ //кнопка добавления
                    itemId: 'addItem',
                    text: 'Add',
                    action: 'addItem'
                }, //'-', { //кнопка удаления
                //    itemId: 'deleteItem',
                //    text: 'Delete',
                //    action: 'deleteItem'
                //}, '-', 
                { //поиск
                    xtype: 'textfield',
                    emptyText: 'Search...',
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
                    text: 'Grid Category',
                    width: 80,
                    handler: function (num) {
                        Ext.getCmp('tabs').add({
                            title: 'Grid Category',
                            dockedItems: [{
                                xtype: 'categorygrid'
                            }],
                            closable: true
                        });
                    }
                }, '-', { //открывание новой таб с заказами
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
