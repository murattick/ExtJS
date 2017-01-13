Ext.define('ExtMVC.view.order.OrderUser' ,{ //��� ��� ������ � ��������� ���� ������ ������� � ���������
        extend: 'Ext.Panel',
        alias: 'widget.OrderUserGrid',

        frame: true,
        width: 580,
        height: 520,
        layout: 'border',

    // override initComponent
        initComponent: function () {
            this.items = [{
                xtype: 'orderGrid',  //�������� ����� � ��������
                region: 'north',
                height: 280,
                split: true
            }, {
                xtype: 'allaccountGrid', //��������� ����� � ����������
                region: 'center'
            }];
            // call the superclass's initComponent implementation
            this.callParent();
        }
});