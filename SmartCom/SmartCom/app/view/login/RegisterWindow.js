Ext.define('ExtMVC.view.login.RegisterWindow', { //модалка для регистрации
	extend: 'Ext.window.Window',
	alias: 'widget.registerWindow',
	id: 'registerWindow',
	width: 300,
	y: 42,
	layout: 'fit',
	autoShow: true,
    title: 'Please go registration',


    defaults: {
        anchor: '100%',
        allowBlank: false,
        msgTarget: 'side',
        labelWidth: 75
    },
	
	dockedItems: [{
		xtype: 'registerform',       //подгрузка формы регистрации                 
                    }],
   
});