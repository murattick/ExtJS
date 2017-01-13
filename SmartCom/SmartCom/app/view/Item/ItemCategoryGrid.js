Ext.define('ExtMVC.view.item.ItemCategoryGrid' ,{ //код для вывода в табпанеле двух гридов заказов и аккаунтов
        extend: 'Ext.Panel',
        alias: 'widget.ItemCategoryGrid',

        frame: true,
        width: 580,
        height: 520,
        layout: 'border',

    // override initComponent
        initComponent: function () {
            this.items = [{
                xtype: 'adminitemgrid', //подгрузка грида с item
                region: 'north',
                height: 250,
                split: true
            }, {
                
                xtype: 'categorygrid',  //погрузка грида с Category
                region: 'south'
                
            }];
            // call the superclass's initComponent implementation
            this.callParent();
        }
});