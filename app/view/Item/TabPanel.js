var tabs = Ext.define('ExtMVC.view.item.TabPanel', { //��� ���������
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
        icon: Ext.MessageBox.INFO,    // ������ �� {ERROR,INFO,QUESTION,WARNING}
        width:300,                       // ���� ��� minWidth
        closable:true,                  // ������� ������� ������ �������� ����
        });

        Ext.applyIf(me, {

            items: [{
                loader: {
                    url: 'app/html/home_tab.html', //��������� html �������� � ��� ������ ��� �������
                    autoLoad: true,

                },

                title: 'The Big Shop',
                closable: true,
            }]
        });
        me.callParent(arguments);
    }

});