Ext.define('ExtMVC.controller.Cart', {
    extend: 'Ext.app.Controller',
    //контройлер корзины
    stores: ['Cart', 'Shop', 'Order'],
    models: ['Cart', 'Item'],

    views: ['menu.TopMenu',
        'item.TabPanel', 'item.ItemGrid',
        'cart.CartGrid', 'cart.Formula', 'cart.AddToCart'],

    refs: [{
        ref: 'itemGrid',
        selector: 'grid'
    },{
        ref: 'cartGrid',
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
            'cartGrid dataview': {
                itemdblclick: this.editItem
            },

            'itemform button[action=save]': {
            click: this.updateItem
            },
            'itemgrid button[action=AddToCart]': {
                click: this.addItem
            },
            'itemform button[action=AddToCart]': {
                click: this.addingItemToCart
            },
            'cartGrid button[action=delete]': {
                click: this.deleteItem
            },
            'cartGrid button[itemId=delete]': { 
				click: this.onDeleteClick 
			} 
        });
    },
    //добавление в корзину
    addItem: function (grid, record) {
        var add = Ext.create('ExtMVC.view.cart.AddToCart').show();

        if (record) {
            add.down('form').loadRecord(record);
        }
    },

    addingItemToCart: function (button, event) {

		var win = button.up('window'),
		form  = win.down('form').getForm();
		record = form.getRecord(),
        values = form.getValues();
		
		 if(form.isValid()) {
			  
            record = Ext.create('ExtMVC.model.Cart');
            record.set(values);
            this.getCartStore().add(record);
            Ext.Msg.alert('Iformation!', 'Complite.');

        }
        else Ext.Msg.alert('Invalid form!', 'Please try again.');
		 
		 this.getCartStore().sync();
        win.close();
        
    },
    //редатирование в корзине
    editItem: function (grid, record) {
        var edit = Ext.create('ExtMVC.view.cart.Formula').show();

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
        this.getCartStore().sync();

    }
    
});