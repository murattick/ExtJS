var tabs = Ext.define('ExtMVC.view.item.TabPanel', { //код табпанели
    extend: 'Ext.tab.Panel',
    alias: 'widget.tabpanel',
    activeTab: 0,
    id: 'tabs',
    

    initComponent: function () {
        var me = this;

        Ext.MessageBox.show({
            title:'Info',
            msg: 'Hello! Shopping login or register. Thank you.',
        buttons: Ext.MessageBox.OK,
        icon: Ext.MessageBox.INFO,    // иконка мб {ERROR,INFO,QUESTION,WARNING}
        width:300,                       // есть еще minWidth
        closable:true,                  // признак наличия иконки закрытия окна
        });

        Ext.applyIf(me, {

            items: [{
                xtype: 'gridmasterdetail', //для примера добавил grid в добавляемую tab   

                title: 'The Big Shop',
                closable: false,
            }]
        });
        me.callParent(arguments);
    }

});