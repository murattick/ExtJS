Ext.define('ExtMVC.controller.Account', {
    extend: 'Ext.app.Controller',
    //аккаунт контройлер
    stores: ['Account', 'AllAccount'],
    models: ['Account'],

    views: ['login.AccountGrid', 'login.AllAccountGrid', 
         'menu.TopMenu',
        'item.TabPanel', ],

    refs: [
    {
        ref: 'accountGrid',
        selector: 'grid'
    },
     {
         ref: 'allaccountGrid',
         selector: 'grid'
     },
    {
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
            'accountGrid dataview': {
                itemdblclick: this.editAccount
            },
            'allaccountGrid dataview': {
                itemdblclick: this.adminEditAccount
            },
            'addressform button[action=save]': {
                click: this.updateAccount
            },
            'addressDiscountform button[action=save]': {
                click: this.adminUpdateAccount
            },

        });
    },

   
    //добвление адреса аккаунту
    editAccount: function (grid, record) {
        var edit = Ext.create('ExtMVC.view.login.Formula').show();
        if (record) {
            edit.down('form').loadRecord(record);
        }
    },
    //добвление скидки к аккаунту и редактирование
    adminEditAccount: function (grid, record) {
        var edit = Ext.create('ExtMVC.view.login.FormulaAdmin').show();
        if (record) {
            edit.down('form').loadRecord(record);
        }
    },

    updateAccount: function (button, event) {
		
        var win = button.up('window'),
        form = win.down('form').getForm();
        record = form.getRecord(),
        values = form.getValues();

		if(form.isValid()) {
			  
            record.set(values);
        }
        else Ext.Msg.alert('Invalid form!', 'Please try again.');

        win.close();
        this.getAccountStore().sync();
    },

    adminUpdateAccount: function (button, event) {
		
        var win = button.up('window'),
        form = win.down('form').getForm();
        record = form.getRecord(),
        values = form.getValues();

        if(form.isValid()) {
			  
            record.set(values);
        }
        else Ext.Msg.alert('Invalid form!', 'Please try again.');

        win.close();
        this.getAllAccountStore().sync();
    }

});