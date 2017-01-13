Ext.define('ExtMVC.view.Category.MenuGrid', { //грид Category для меню слева
    extend: 'Ext.grid.Panel',
    alias: 'widget.menugrid',
    height: 460,
    store: 'Category',
    loadingText: 'Loading list...',

    initComponent: function () {
        this.columns = [
           { text: 'Category', width: 170, id: 'CategoryName', dataIndex: 'Name', flex: 1 },
           {
               xtype: 'actioncolumn',
               dataIndex: 'Name',
               width: 40,
               text: 'Action',
               align: 'center',
               items: [{ //фильтр на вывод в товара по категории
                   icon: 'Content/Images/Search.png',  // Use a URL in the icon config
                   tooltip: 'Add Filter',
                  
                   handler: function(grid, rowIndex, colIndex) {
                       var rec = grid.getStore().getAt(rowIndex);
                       var data = rec.get('CategoryID');
                   

                       Ext.Ajax.request({
                           waitTitle: 'Please wait...',
                           waitMsg: 'Try to login..',
                           loadingText: 'Try to login..',
                           url: 'Shop/Get',
                           method: 'post',
                           params: { data: data },

                           //scope : this,
                           //method to call when the request is successful
                           failure: function (response) {

                           },
                           success: function (response, opts) {

                               Ext.getCmp('itemgrid').getStore().load({
                                   params: {
                                       data: JSON.stringify(data)
                                   }
                               });                               
                           }
                       });
                   }
               },]
           }
          
        ];

        this.callParent();
    }
});
