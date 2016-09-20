Ext.define('ExtMVC.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'border',
    loadingText: 'Loading list...',
    waitTitle: 'Please wait...',
    waitMsg: 'Please wait...',

    defaults: {
        //добавляем свётрывание
        collapsible: true,
        split: true,

    },
    //определяем положение окон
    items: [
        {
            //верхнее окно 
            region: 'north',
            height: 28,
            dockedItems:
                [{
                    xtype: 'topMenu' //горизонтальное меню
                }],
            split: false,
            collapsible: false,
        },
        {
            //нижнее окно 
            title: 'Footer',
            region: 'south',
            xtype: 'toolbar',
            height: 38,
            split: false,
            collapsible: false

        },
    //левое онко
    {
        title: 'Menu',
        region: 'west',
        margins: '5 0 0 0',
        cmargins: '5 5 0 0',
        width: 175,
        minSize: 100,
        maxSize: 250,
        //добавляем меню в левое окно
        dockedItems: [{
            xtype: 'leftMenu'
        }],
    },

    //центральное окно
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
