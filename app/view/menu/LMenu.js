Ext.define('ExtMVC.view.menu.LMenu', { //левое меню
    extend: 'Ext.menu.Menu',
    alias: 'widget.leftMenu',
    floating: false,
    renderTo: Ext.getBody(),

    items: [{
        text: 'Audio',
        handler: function () {
         
            var audio = Ext.getStore('Shop'); //отфильтрован store по категории аудио
            audio.clearFilter();
            audio.filter('Category', 'Audio');
        },

    }, {
        xtype: 'menuseparator'
    }, {

        text: 'Flash',
        handler: function (num) {
            
            var Flash = Ext.getStore('Shop'); //отфильтрован store по категории Flash
            Flash.clearFilter();
            Flash.filter('Category', 'Flash');
        },
      
    }, {
        xtype: 'menuseparator'
    }, {

        text: 'HDD',
        handler: function (num) {
         
            var hdd = Ext.getStore('Shop'); //отфильтрован store по категории HDD
            hdd.clearFilter();
            hdd.filter('Category', 'HDD');
        }
    }, {
        xtype: 'menuseparator'
    }, {

        text: 'Laptop',
        handler: function (num) {
           
            var Laptop = Ext.getStore('Shop'); //отфильтрован store по категории Laptop
            Laptop.clearFilter();
            Laptop.filter('Category', 'Laptop')

        }
    }, {
        xtype: 'menuseparator'
    }, {

        text: 'Mause',
        handler: function (num) {
        
            var Mause = Ext.getStore('Shop'); //отфильтрован store по категории Mouse
            Mause.clearFilter();
            Mause.filter('Category', 'Mouse')

        }
    }, {
        xtype: 'menuseparator'
    }, {

        text: 'Monitor',
        handler: function (num) {
      
            var Monitor = Ext.getStore('Shop'); //отфильтрован store по категории Monitor
            Monitor.clearFilter();
            Monitor.filter('Category', 'Monitor')

        }
    }, {
        xtype: 'menuseparator'
    }, {

        text: 'Phone',
        handler: function (num) {
           
            var Phone = Ext.getStore('Shop'); //отфильтрован store по категории Phone
            Phone.clearFilter();
            Phone.filter('Category', 'Phone')

        }
    }, {
        xtype: 'menuseparator'
    }, {

        text: 'Photo',
        handler: function (num) {
         
            var Photo = Ext.getStore('Shop'); //отфильтрован store по категории Photo
            Photo.clearFilter();
            Photo.filter('Category', 'Photo')
        }
    }, {
        xtype: 'menuseparator'
    }, {

        text: 'TV',
        handler: function (num) {
          
            var TV = Ext.getStore('Shop'); //отфильтрован store по категории TV
            TV.clearFilter();
            TV.filter('Category', 'TV')

        }
    }, {
        xtype: 'menuseparator'
    }, {

        text: 'Video',
        handler: function (num) {
          
            var Video = Ext.getStore('Shop'); //отфильтрован store по категории Video
            Video.clearFilter();
            Video.filter('Category', 'Video')
        }
    },{
    xtype: 'menuseparator'
}, {
    text: 'Coming soon',
    disabled: true,
    handler: function (num) {
        Ext.getCmp('tabs').add({
            title: '...',
            dockedItems: [{
                xtype: '...' //для примера добавил grid в добавляемую tab
            }],
            closable: true,               
        });
    }
}, {
xtype: 'menuseparator'
}, {
    text: 'Coming soon',
    disabled: true,
    handler: function (num) {
        Ext.getCmp('tabs').add({
            title: '...',
            dockedItems: [{
                xtype: '...' //для примера добавил grid в добавляемую tab
            }],
            closable: true,
        });
    }
}, {
xtype: 'menuseparator'
}, {
    text: 'Coming soon',
    disabled: true,
    handler: function (num) {
        Ext.getCmp('tabs').add({
            title: '...',
            dockedItems: [{
                xtype: '...' //для примера добавил grid в добавляемую tab
            }],
            closable: true,
        });
    }
}, {
xtype: 'menuseparator'
}, {
    text: 'Coming soon',
    disabled: true,
    handler: function (num) {
        Ext.getCmp('tabs').add({
            title: '...',
            dockedItems: [{
                xtype: '...' //для примера добавил grid в добавляемую tab
            }],
            closable: true,
        });
    }
}, {
xtype: 'menuseparator'
}, {
    text: 'Coming soon',
    disabled: true,
    handler: function (num) {
        Ext.getCmp('tabs').add({
            title: '...',
            dockedItems: [{
                xtype: '...' //для примера добавил grid в добавляемую tab
            }],
            closable: true,
        });
    }
}, {
xtype: 'menuseparator'
}, {
    text: 'Coming soon',
    disabled: true,
    height: 32,
    handler: function (num) {
        Ext.getCmp('tabs').add({
            title: '...',
            dockedItems: [{
                xtype: '...' //для примера добавил grid в добавляемую tab
            }],
            closable: true,
        });
    }
}
    ]
});