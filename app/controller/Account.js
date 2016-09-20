Ext.define('ExtMVC.controller.Account', {
    extend: 'Ext.app.Controller',

    stores: ['Account', 'AllAccount'],
    models: ['Account'],

    views: ['login.AccountGrid', 'login.AllAccountGrid', 
        'menu.LeftMenu', 'menu.TopMenu',
        'item.TabPanel', ],

    refs: [
    {
        ref: 'accountGrid',
        selector: 'grid'
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
            'accountGrid dataview': {
                itemdblclick: this.editItem
            },
            'addressform button[action=save]': {
                click: this.updateItem
            },

            //'allaccountGrid dataview': {
            //    itemdblclick: this.editDiscount
            //},
            //'discountform button[action=save]': {
            //    click: this.updateDiscount
            //}
            
        });
    },

   

    editItem: function (grid, record) {
        var edit = Ext.create('ExtMVC.view.login.Formula').show();
        if (record) {
            edit.down('form').loadRecord(record);
        }
    },

    updateItem: function (button, event) {
		
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

    //editDiscount: function (grid, record) {
    //    var edit = Ext.create('ExtMVC.view.login.AddDiscount').show();
    //    if (record) {
    //        edit.down('form').loadRecord(record);
    //    }
    //},

    //updateDiscount: function (button, event) {

    //    var win = button.up('window'),
    //    form = win.down('form').getForm();
    //    record = form.getRecord(),
    //    values = form.getValues();

    //    if (form.isValid()) {

    //        record.set(values);
    //    }
    //    else Ext.Msg.alert('Invalid form!', 'Please try again.');

    //    win.close();
    //    this.getAllAccountStore().sync();
    //}

	
});