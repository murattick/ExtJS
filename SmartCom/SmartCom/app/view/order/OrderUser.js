Ext.define('ExtMVC.view.order.OrderUser' ,{ //код для вывода в табпанеле двух гридов заказов и аккаунтов
        extend: 'Ext.Panel',
        alias: 'widget.OrderUserGrid',

        frame: true,
        width: 580,
        height: 520,
        layout: 'border',

    // override initComponent
        initComponent: function () {
            this.items = [{
                xtype: 'orderGrid',  //погрузка грида с заказами
                region: 'north',
                height: 280,
                split: true
            }, {
                xtype: 'allaccountGrid', //подгрузка грида с аккаунтами
                region: 'center'
            }];
            // call the superclass's initComponent implementation
            this.callParent();
        }
});