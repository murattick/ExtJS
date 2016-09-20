Ext.define('ExtMVC.view.order.OrderUser' ,{
        extend: 'Ext.Panel',
        alias: 'widget.OrderUserGrid',
        //store: 'Shop',

        frame: true,
        width: 580,
        height: 520,
        layout: 'border',

    // override initComponent
        initComponent: function () {
            this.items = [{
                xtype: 'orderGrid',
                //itemId: 'gridPanel',
                region: 'north',
                height: 280,
                split: true
            }, {
                xtype: 'allaccountGrid',
                //itemId: 'detailPanel',
                region: 'center'
            }];
            // call the superclass's initComponent implementation
            this.callParent();
        }
});