Ext.define('ExtMVC.view.Category.CategoryGrid', { //грид Category
    extend: 'Ext.grid.Panel',
    alias: 'widget.categorygrid',

    store: 'Category',
    requires: ['Ext.toolbar.Paging'],
    loadingText: 'Loading list...',

    initComponent: function () {
        var me = this;
        this.columns = [
           { xtype: 'rownumberer' },
           { text: 'ID', width: 50, dataIndex: 'CategoryID' },
           { text: 'Title', width: 170, dataIndex: 'Name', flex: 1 },
           {
               xtype: 'actioncolumn',
               width: 50,
               text: 'Action',
               items: [{
                   icon: 'Content/Images/Delete.gif',  // удаление из категории

                   tooltip: 'Delete',
                   handler: function (grid, rowIndex, colIndex) {
                       var rec = grid.getStore().getAt(rowIndex);
                       Ext.Msg.confirm("Confirmation", "Do you want to Delete category '" + rec.get('Name') + "'?", function (btnText) {
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
           }
          
        ];

        this.dockedItems = [{ //поиск
            xtype: 'toolbar',
            items: [{ //кнопка добавления
                    itemId: 'addCategory',
                    text: 'Add',
                    action: 'addCategory'
            },
                //'-', { //кнопка удаления
                //    text: 'Delete',
                //    itemId: 'deleteCategory'
                //},
                '-', {
                xtype: 'textfield',
                emptyText: 'Search...',
                width: 70,
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
                                    return matcher.test(record.get('Name'));
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
            store: 'Category',
            displayInfo: true,
            displayMsg: 'View Category {0} - {1} of {2}',
            emptyMsg: "No Data"
        }];

        this.callParent();
    }
});
