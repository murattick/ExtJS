Ext.define('ExtMVC.view.menu.TopMenu', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.topMenu',
    floating: false, // usually you want this set to True (default)
    renderTo: Ext.getBody(), // usually rendered by it's containing components


    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [ {
          //  xtype: 'splitbutton',
            text: 'All Items',
			width: 60,
			handler: function (num) {           
                Ext.getCmp('tabs').add({
                    title    : 'All Items',
                    dockedItems: [{
                        xtype: 'gridmasterdetail' //для примера добавил grid в добавляемую tab
                        
                    }],
                    closable: true,
                    activeTab: true,
                });
            
        }
        },'-' // <- эта хрень разделяет кнопки
		,{          
            text: 'Cart',
            width: 50,
            disabled: true,
            id: 'cartbtn',
			handler: function (num) {           
                Ext.getCmp('tabs').add({
                    title: 'Cart',
                    dockedItems: [{
                        xtype: 'cartGrid' //для примера добавил grid карзины в добавляемую tab
                                  }],
                    closable: true

                });
            
        }            
		},'-', {
    text: 'Track Order',
    width: 70,
    disabled: true,
    id: 'trackbtn',
    handler: function (num) {
        Ext.getCmp('tabs').add({
            title: 'Track Order',
            dockedItems: [{
                xtype: 'trackOrderGrid' //для примера добавил grid отслеживания заказа в добавляемую tab 
            }],
            closable: true
        });
    }
		},'-', {
		    text: 'My Account',
		    disabled: true,
		    id: 'accountbtn',
		    handler: function (num) {
		        Ext.getCmp('tabs').add({
		            title: 'My account',
		            dockedItems: [{
		                xtype: 'accountGrid'
		            }],
		            closable: true
		        });
		    }
		}, '-', {
            text: 'About',
            width: 50,
			handler: function (num) {           
                Ext.getCmp('tabs').add({
                    title    : 'About',
                    dockedItems: [{
                        loader: {
                         url: 'app/html/about.html',
                         autoLoad: true
                        }, //для примера добавил html страницу в добавляемую tab
                                  }],
                    closable : true
                });
            
        }            
        },'-',{          
            text: 'Contacts',
            width: 55,
			handler: function (num) {           
                Ext.getCmp('tabs').add({
                    title    : 'Contacts',
                    dockedItems: [{
                        loader: {
                         url: 'app/html/contacts.html',
                         autoLoad: true
                        }, //для примера добавил html в добавляемую tab
                                  }],
                    closable : true
                });
            
        }            
        }, '->', {
            text: 'Admin',
            disabled: true,
            id: 'adminbtn',
            handler: function (num) {
                Ext.getCmp('tabs').add({
                    title: 'Admin',
                    dockedItems: [{
                        xtype: 'adminitemgrid'
                    }],
                    closable: true
                });
            }
        },'-',{
            xtype: 'splitbutton',
            text: 'Autorization',
            menu: {
                items: [{
                    text: 'Login',
                    action: 'login',
                    id: 'login',
                }, {
                    text: 'Register',
                    action: 'register',
                    id: 'register',
                    handler: function () {
                        Ext.Msg.alert('Внимание!!!', 'Для оформления заказа не забудте добавить Ваш адресс.');
                    }
                }, '-', {
                    text: 'Logout',
                    id: 'logout',
                    //disabled: true,
                    handler: function (button, event) {
                        //me.expand();
                        Ext.Msg.show({
                            title: 'Confirmation',
                            msg: 'Are you sure to exit the application?',
                            icon: Ext.Msg.QUESTION,
                            buttons: Ext.Msg.YESNO,
                            fn: function (btn) {
                                if (btn == 'yes') {
                                    Ext.Ajax.request({
                                        url: 'Account/LogOff', // УРЛ!!!
                                        method: 'POST',
                                        success: function (response) {
                                            var result = Ext.JSON.decode(response.responseText);

                                            if (result.success) {
                                                setTimeout(function () {
                                                    window.location = "http://localhost:5211/simple.html";
                                                }, 700);
                                            } else {
                                                console.log('Failed to exit the application');
                                            }
                                        },
                                        failure: function (response) {
                                            console.log('Failed : ' + response);
                                        }

                                    });
                                    var redirect = 'simple.html';
                                    window.location = redirect;
                                }
                            }
                        });

                    },
                }]
            }
        }]
    }]
});