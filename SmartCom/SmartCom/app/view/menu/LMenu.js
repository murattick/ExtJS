Ext.define('ExtMVC.view.menu.LMenu', { //левое меню
    extend: 'Ext.menu.Menu',
    alias: 'widget.leftMenu',
    floating: false,
    renderTo: Ext.getBody(),

    items: [{
        text: 'Clear Filter',
        handler: function () {
            var filter = Ext.getStore('Shop'); 
            filter.load();
        },

    }, {
        xtype: 'menugrid'

    }]
});