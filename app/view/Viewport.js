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
