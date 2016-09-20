Ext.define('ExtMVC.controller.Login', {
    extend: 'Ext.app.Controller',

    stores: ['Autorization', 'Account'],
    //models: ['Contact'],

    views: ['login.Login', 'login.Register', 'login.LoginWindow', 'login.RegisterWindow', 'login.AccountGrid',
        'menu.LeftMenu', 'menu.TopMenu',
        'item.TabPanel'],

    refs: [{
        ref: 'contatoPanel',
        selector: 'panel'
    }, {
        ref: 'leftMenu',
        selector: 'menu'
    }, {
        ref: 'topMenu',
        selector: 'menu'
    }, {
        ref: 'tabpanel',
        selector: 'panel'
    }
    ],

    init: function () {
        this.control({

            'topMenu menuitem[action=login]': {
                click: this.loginUser
            },
            'topMenu menuitem[action=register]': {
                click: this.registerUser
            },
			'loginform button[action=login]' : {
                                click : this.onLoginRequest   
            },
			'loginform button[action=logout]' : {
                                click : this.onLogoutRequest   
            },
			'registerform button[action=registering]' : {
                                click : this.onRegisterRequest   
            }
        });
    },

    loginUser: function (menu) {
        var login = Ext.create('ExtMVC.view.login.LoginWindow').show();

    },

    onLoginRequest: function (button) {
        var win = button.up('window');
        
                //just a console log to show when the Login Ajax request starts
	    console.log('Login Ajax Request in progress');

	            loadingText: 'Loading list...';
                var form = button.up('form').getForm();
                if(form.isValid()){
                    //create an AJAX request
         
                    Ext.Ajax.request({
                        waitTitle: 'Please wait...',
                        waitMsg: 'Try to login..,',
                        url: 'Account/Login',
                        method: 'post',
                        params: { UserName: form.getValues().UserName, Password: form.getValues().Password, RememberMe: Ext.getCmp('RememberMe').isChecked() },

                        //scope : this,
                        //method to call when the request is successful
                        failure: function (response) {

                            data = Ext.decode(response.responseText);
                            Ext.Msg.alert('Login Error', data.errorMessage, Ext.emptyFn);

                        },
                        success: function (response, opts) {
                          
                            var account = Ext.data.StoreManager.get("Account");
                            var adminShop = Ext.data.StoreManager.get("AdminShop");
                            var allAccount = Ext.data.StoreManager.get("AllAccount");
                            var order = Ext.data.StoreManager.get("Order");
                            var shop = Ext.data.StoreManager.get("Shop");
                            var trackOrder = Ext.data.StoreManager.get("TrackOrder");

                            account.load();
                            adminShop.load();
                            allAccount.load();
                            order.load();
                            shop.load();
                            trackOrder.load();


                            Ext.getCmp('adminbtn').enable(); // I've also tried Ext.query('buttonID')
                            Ext.getCmp('cartbtn').enable();
                            Ext.getCmp('trackbtn').enable();
                            Ext.getCmp('accountbtn').enable();
                            //Ext.getCmp('logout').enable();
                            Ext.getCmp('login').disable();
                            Ext.getCmp('register').disable();

                            data = Ext.decode(response.responseText);
                            if (data.errorMessage != null) {
                                Ext.Msg.alert('Login Message', data.errorMessage, Ext.emptyFn);

                            } else {
                                //show the next screen
                            }
                        }
                }); 
                }
                win.close();
            },
		
    registerUser: function (menu) {
        var reg = Ext.create('ExtMVC.view.login.RegisterWindow').show();
    },
	
    onRegisterRequest: function (button) {
                var win = button.up('window');
                //just a console log to show when the Login Ajax request starts
                console.log('Register Ajax Request in progress');
                               
                var form = button.up('form').getForm();
                if(form.isValid()){
                    //create an AJAX request

                    Ext.Ajax.request({
                        waitTitle: 'Please wait...',
                        waitMsg: 'Try to login..,',
                        url: 'Account/Register',
                        method: 'post',
                        params: { UserName: form.getValues().UserName, Password: form.getValues().Password, Email: form.getValues().Email, },

                        //scope : this,
                        //method to call when the request is successful
                        failure: function (response) {

                            data = Ext.decode(response.responseText);
                            Ext.Msg.alert('Login Error', data.errorMessage, Ext.emptyFn);

                        },
                        success: function (response, opts) {
                            var account = Ext.data.StoreManager.get("Account");
                            var adminShop = Ext.data.StoreManager.get("AdminShop");
                            var allAccount = Ext.data.StoreManager.get("AllAccount");
                            var order = Ext.data.StoreManager.get("Order");
                            var shop = Ext.data.StoreManager.get("Shop");
                            var trackOrder = Ext.data.StoreManager.get("TrackOrder");

                            account.load();
                            adminShop.load();
                            allAccount.load();
                            order.load();
                            shop.load();
                            trackOrder.load();

                            Ext.getCmp('adminbtn').enable(); // I've also tried Ext.query('buttonID')
                            Ext.getCmp('cartbtn').enable();
                            Ext.getCmp('trackbtn').enable();
                            Ext.getCmp('accountbtn').enable();
                            //Ext.getCmp('logout').enable();
                            Ext.getCmp('login').disable();
                            Ext.getCmp('register').disable();

                            data = Ext.decode(response.responseText);
                            if (data.errorMessage != null) {
                                win.close();
                              
                                Ext.Msg.alert('Register Message', data.errorMessage, Ext.emptyFn);      
                            } else {
                             
                            }
                        }
                    });
                }
                win.close();
            }
           
});