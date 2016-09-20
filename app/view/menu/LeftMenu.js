Ext.define('ExtMVC.view.menu.LeftMenu', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.leftMenu',
    floating: false, 
    renderTo: Ext.getBody(), 
    //layout: 'fit',

    items: [{
        text: 'Audio',
        handler: function (num) {           
                Ext.getCmp('tabs').add({
                    title: 'Audio',
                    dockedItems: [{
                        xtype: 'itemGridAudio' //для примера добавил grid в добавляемую tab
                                  }],
                    closable : true
                });
            
        }
,

    }, {
        xtype: 'menuseparator'
    }, {

        text: 'Flash',
		handler: function (num) {           
                Ext.getCmp('tabs').add({
                    title: 'Flash',
                    dockedItems: [{
                        xtype: 'itemGridFlash' //для примера добавил grid в добавляемую tab
                                  }],
                    closable : true
                });
            
        }
    },{
        xtype: 'menuseparator'
    }, {

        text: 'HDD',
		handler: function (num) {           
                Ext.getCmp('tabs').add({
                    title    : 'HDD',
                    dockedItems: [{
                        xtype: 'itemGridHDD' //для примера добавил grid в добавляемую tab
                                  }],
                    closable : true
                });
            
        }
    },{
        xtype: 'menuseparator'
    }, {

        text: 'Laptop',
		handler: function (num) {           
                Ext.getCmp('tabs').add({
                    title    : 'Laptop',
                    dockedItems: [{
                        xtype: 'itemGridLaptop' //для примера добавил grid в добавляемую tab
                                  }],
                    closable : true
                });
            
        }
    },{
        xtype: 'menuseparator'
    }, {

        text: 'Mause',
		handler: function (num) {           
                Ext.getCmp('tabs').add({
                    title    : 'Mouse',
                    dockedItems: [{
                        xtype: 'itemGridMause' //для примера добавил grid в добавляемую tab
                                  }],
                    closable : true
                });
            
        }
    },{
        xtype: 'menuseparator'
    }, {

        text: 'Monitor',
		handler: function (num) {           
                Ext.getCmp('tabs').add({
                    title    : 'Monitor',
                    dockedItems: [{
                        xtype: 'itemGridMonitor' //для примера добавил grid в добавляемую tab
                                  }],
                    closable : true
                });
            
        }
    },{
        xtype: 'menuseparator'
    }, {

        text: 'Phone',
		handler: function (num) {           
                Ext.getCmp('tabs').add({
                    title    : 'Phone',
                    dockedItems: [{
                        xtype: 'itemGridPhone' //для примера добавил grid в добавляемую tab
                                  }],
                    closable : true
                });
            
        }
    },{
        xtype: 'menuseparator'
    }, {

        text: 'Photo',
		handler: function (num) {           
                Ext.getCmp('tabs').add({
                    title    : 'Photo',
                    dockedItems: [{
                        xtype: 'itemGridPhoto' //для примера добавил grid в добавляемую tab
                                  }],
                    closable : true
                });
            
        }
    }, {
        xtype: 'menuseparator'
    }, {

        text: 'TV',
        handler: function (num) {
            Ext.getCmp('tabs').add({
                title: 'TV',
                dockedItems: [{
                    xtype: 'itemGridTV' //для примера добавил grid в добавляемую tab
                }],
                closable: true
            });

        }
    }, {
        xtype: 'menuseparator'
    }, {

        text: 'Video',
        handler: function (num) {
            Ext.getCmp('tabs').add({
                title: 'Video',
                dockedItems: [{
                    xtype: 'itemGridVideo' //для примера добавил grid в добавляемую tab
                }],
                closable: true
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