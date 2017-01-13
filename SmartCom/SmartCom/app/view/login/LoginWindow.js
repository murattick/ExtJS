Ext.define('ExtMVC.view.login.LoginWindow', { //модалка для входа в систеу
	extend: 'Ext.window.Window',
	alias: 'widget.loginWindow',
	width: 300,
	layout: 'fit',
	autoShow: true,
    title: 'Please authorization',


    defaults: {
        anchor: '100%',
        allowBlank: false,
        msgTarget: 'side',
        labelWidth: 75
    },
	
	dockedItems: [{
		xtype: 'loginform',     //подгрузка логин формы                   
                    }],
   
});