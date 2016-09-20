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
                        xtype: 'itemGridAudio' //��� ������� ������� grid � ����������� tab
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
                        xtype: 'itemGridFlash' //��� ������� ������� grid � ����������� tab
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
                        xtype: 'itemGridHDD' //��� ������� ������� grid � ����������� tab
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
                        xtype: 'itemGridLaptop' //��� ������� ������� grid � ����������� tab
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
                        xtype: 'itemGridMause' //��� ������� ������� grid � ����������� tab
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
                        xtype: 'itemGridMonitor' //��� ������� ������� grid � ����������� tab
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
                        xtype: 'itemGridPhone' //��� ������� ������� grid � ����������� tab
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
                        xtype: 'itemGridPhoto' //��� ������� ������� grid � ����������� tab
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
                    xtype: 'itemGridTV' //��� ������� ������� grid � ����������� tab
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
                    xtype: 'itemGridVideo' //��� ������� ������� grid � ����������� tab
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
                    xtype: '...' //��� ������� ������� grid � ����������� tab
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
                    xtype: '...' //��� ������� ������� grid � ����������� tab
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
                    xtype: '...' //��� ������� ������� grid � ����������� tab
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
                    xtype: '...' //��� ������� ������� grid � ����������� tab
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
                    xtype: '...' //��� ������� ������� grid � ����������� tab
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
                    xtype: '...' //��� ������� ������� grid � ����������� tab
                }],
                closable: true,
            });
        }
    }
	]
});