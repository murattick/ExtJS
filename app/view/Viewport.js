Ext.define('ExtMVC.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'border',
    loadingText: 'Loading list...',
    waitTitle: 'Please wait...',
    waitMsg: 'Please wait...',

    defaults: {
        //��������� ����������
        collapsible: true,
        split: true,

    },
    //���������� ��������� ����
    items: [
        {
            //������� ���� 
            region: 'north',
            height: 28,
            dockedItems:
                [{
                    xtype: 'topMenu' //�������������� ����
                }],
            split: false,
            collapsible: false,
        },
        {
            //������ ���� 
            title: 'Footer',
            region: 'south',
            xtype: 'toolbar',
            height: 38,
            split: false,
            collapsible: false

        },
    //����� ����
    {
        title: 'Menu',
        region: 'west',
        margins: '5 0 0 0',
        cmargins: '5 5 0 0',
        width: 175,
        minSize: 100,
        maxSize: 250,
        //��������� ���� � ����� ����
        dockedItems: [{
            xtype: 'leftMenu'
        }],
    },

    //����������� ����
    {
        title: 'Shop Company',
        collapsible: false,
        region: 'center',
        margins: '5 0 0 0',
        height: 'auto',
        dockedItems: [{
            xtype: 'tabpanel'
        }],

    }]

});
