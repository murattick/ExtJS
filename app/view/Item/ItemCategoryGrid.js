Ext.define('ExtMVC.view.item.ItemCategoryGrid' ,{ //��� ��� ������ � ��������� ���� ������ ������� � ���������
        extend: 'Ext.Panel',
        alias: 'widget.ItemCategoryGrid',

        frame: true,
        width: 580,
        height: 520,
        layout: 'border',

    // override initComponent
        initComponent: function () {
            this.items = [{
                xtype: 'adminitemgrid', //��������� ����� � item
                region: 'north',
                height: 250,
                split: true
            }, {
                
                xtype: 'categorygrid',  //�������� ����� � Category
                region: 'south'
                
            }];
            // call the superclass's initComponent implementation
            this.callParent();
        }
});