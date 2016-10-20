Ext.define('ExtMVC.view.item.ItemGrid', { //грид товаров
        extend: 'Ext.grid.Panel',
        alias: 'widget.itemgrid',
        id: 'itemgrid',

        store: 'Shop',
        requires: ['Ext.toolbar.Paging'],
        loadingText: 'Loading list...',

		initComponent: function () {
		    var me = this;
            this.columns = [
               { xtype: 'rownumberer' },
               //{ text: 'ID', width: 170, dataIndex: 'ItemID', flex: 1 },
               { text: 'Title', dataIndex: 'Title', flex: 1 },
               { text: 'Code', dataIndex: 'Code', flex: 1 },
               { text: 'Brand', dataIndex: 'Brand', flex: 1 },
               { text: 'CategoryID', dataIndex: 'CategoryID', flex: 1, hidden: true },
               { text: 'Category Name', dataIndex: 'Category.Name', flex: 1, }, //поле "имя" категории
               { text: 'Price', dataIndex: 'Price', flex: 1, renderer: Ext.util.Format.usMoney },
               {
                   xtype: 'actioncolumn',
                   width: 50,
                   text: 'Action',
                   items: [{ //добавление товара в корзину
                       icon: 'Content/Images/Cart.png',  // Use a URL in the icon config
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
            
            var GridFilter1 = this.dockedItems = [{ //поиск
                xtype: 'toolbar',
                items: [{                    
                    xtype: 'textfield',
                    emptyText: 'Search for Title or Code',
                    value: '',
                    width: 170,
                    listeners: {
                        change: function (field, newValue, oldValue, options) {
                            id: 'GridFilter';
                            var grid = me;
                            grid.store.clearFilter();

                            if (newValue) {
                                var matcher = new RegExp(Ext.String.escapeRegex(newValue), "i");
                                id: 'matcher';
                                grid.store.filter({
                                    filterFn: function (record) {
                                        return matcher.test(record.get('Title')) ||
                                               matcher.test(record.get('Code'));
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
                store: 'Shop',
                displayInfo: true,
                displayMsg: 'View Items {0} - {1} of {2}',
                emptyMsg: "No Data"
            }];

            this.callParent();
        }
    });
