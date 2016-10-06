Ext.define('ExtMVC.view.menu.LMenu', { //левое меню
    extend: 'Ext.menu.Menu',
    alias: 'widget.leftMenu',
    floating: false,
    renderTo: Ext.getBody(),

    items: [{
        text: 'Audio',
        handler: function () {
            Ext.getCmp('tabs').add({
                title: 'Audio',

                dockedItems: [{
                    xtype: 'itemgrid', //для примера добавил grid в добавляемую tab                    
                }],
                closable: true,
                setActiveTab: true,
               
            });
            var audio = Ext.getStore('Shop'); //отфильтрован store по категории аудио
            audio.clearFilter();
            audio.filter('Category', 'Audio');
        },

    }, {
        xtype: 'menuseparator'
    }, {

        text: 'Flash',
        handler: function (num) {
            Ext.getCmp('tabs').add({
                title: 'Flash',
                dockedItems: [{
                    xtype: 'itemgrid', //для примера добавил grid в добавляемую tab                    
                }],
                closable: true,
               
            });
            var Flash = Ext.getStore('Shop'); //отфильтрован store по категории Flash
            Flash.clearFilter();
            Flash.filter('Category', 'Flash');
        },
      
    }, {
        xtype: 'menuseparator'
    }, {

        text: 'HDD',
        handler: function (num) {
            Ext.getCmp('tabs').add({
                title: 'HDD',
                dockedItems: [{
                    xtype: 'itemgrid', //для примера добавил grid в добавляемую tab                    
                }],
                closable: true,

            });
            var hdd = Ext.getStore('Shop'); //отфильтрован store по категории HDD
            hdd.clearFilter();
            hdd.filter('Category', 'HDD');
        }
    }, {
        xtype: 'menuseparator'
    }, {

        text: 'Laptop',
        handler: function (num) {
            Ext.getCmp('tabs').add({
                title: 'Laptop',
                dockedItems: [{
                    xtype: 'itemgrid', //для примера добавил grid в добавляемую tab                    
                }],
                closable: true,

            });
            var Laptop = Ext.getStore('Shop'); //отфильтрован store по категории Laptop
            Laptop.clearFilter();
            Laptop.filter('Category', 'Laptop')

        }
    }, {
        xtype: 'menuseparator'
    }, {

        text: 'Mause',
        handler: function (num) {
            Ext.getCmp('tabs').add({
                title: 'Mouse',
                dockedItems: [{
                    xtype: 'itemgrid', //для примера добавил grid в добавляемую tab                    
                }],
                closable: true,

            });
            var Mause = Ext.getStore('Shop'); //отфильтрован store по категории Mouse
            Mause.clearFilter();
            Mause.filter('Category', 'Mouse')

        }
    }, {
        xtype: 'menuseparator'
    }, {

        text: 'Monitor',
        handler: function (num) {
            Ext.getCmp('tabs').add({
                title: 'Monitor',
                dockedItems: [{
                    xtype: 'itemgrid', //для примера добавил grid в добавляемую tab                    
                }],
                closable: true,

            });
            var Monitor = Ext.getStore('Shop'); //отфильтрован store по категории Monitor
            Monitor.clearFilter();
            Monitor.filter('Category', 'Monitor')

        }
    }, {
        xtype: 'menuseparator'
    }, {

        text: 'Phone',
        handler: function (num) {
            Ext.getCmp('tabs').add({
                title: 'Phone',
                dockedItems: [{
                    xtype: 'itemgrid', //для примера добавил grid в добавляемую tab                    
                }],
                closable: true,

            });
            var Phone = Ext.getStore('Shop'); //отфильтрован store по категории Phone
            Phone.clearFilter();
            Phone.filter('Category', 'Phone')

        }
    }, {
        xtype: 'menuseparator'
    }, {

        text: 'Photo',
        handler: function (num) {
            Ext.getCmp('tabs').add({
                title: 'Photo',
                dockedItems: [{
                    xtype: 'itemgrid', //для примера добавил grid в добавляемую tab                    
                }],
                closable: true,

            });
            var Photo = Ext.getStore('Shop'); //отфильтрован store по категории Photo
            Photo.clearFilter();
            Photo.filter('Category', 'Photo')
        }
    }, {
        xtype: 'menuseparator'
    }, {

        text: 'TV',
        handler: function (num) {
            Ext.getCmp('tabs').add({
                title: 'TV',
                dockedItems: [{
                    xtype: 'itemgrid', //для примера добавил grid в добавляемую tab                    
                }],
                closable: true,

            });
            var TV = Ext.getStore('Shop'); //отфильтрован store по категории TV
            TV.clearFilter();
            TV.filter('Category', 'TV')

        }
    }, {
        xtype: 'menuseparator'
    }, {

        text: 'Video',
        handler: function (num) {
            Ext.getCmp('tabs').add({
                title: 'Video',
                dockedItems: [{
                    xtype: 'itemgrid', //для примера добавил grid в добавляемую tab                    
                }],
                closable: true,

            });
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