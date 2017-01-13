Ext.define('ExtMVC.controller.Order', {
    extend: 'Ext.app.Controller',
    //контройлер заказов
    stores: ['Order', 'TrackOrder', 'AllAccount'],
    models: ['Order', 'Account' ],

    views: ['order.TrackOrder', 'order.OrderGrid', 'order.AddToOrder', 'order.Formula', 'order.OrderUser', 
        'menu.TopMenu',
        'item.TabPanel', 'item.AdminItemGrid',
        'cart.CartGrid', ],

    refs: [
    {
        ref: 'cartGrid',
        selector: 'grid'
    }, {
        ref: 'orderGrid',
        selector: 'grid'
    }, {
        ref: 'OrderUserGrid',
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
            'orderGrid dataview': {
                itemdblclick: this.editItem
            },
			'updateForm button[action=save]': {
                click: this.updateItem
            },
            'orderform button[action=createOrder]': {
                click: this.PostOrder
            },
            'orderForm button[action=saveOrder]': {
                click: this.PostOrder
            },
            'orderGrid button[itemId=deleteOrder]': {
                click: this.deleteItem
			} 
        });
    },
    //добавление заказа
    
    PostOrder: function (button) {
        var grid = this.getCartGrid();
        var win = button.up('window'),
        form = win.down('form'),

        record = grid.getSelectionModel().getSelection()[0],
        values = form.getValues();

        var novo = false;

        if (values > 0) {
            record.set(values);
            this.getOrderStore().add(record);
        } else {
            record = Ext.create('ExtMVC.model.Order');
            record.set(values);
            this.getOrderStore().add(record);
            this.getOrderStore().load()
            novo = true;
            Ext.Msg.alert('Status', 'Complite. Order added!');
        }

        win.close();
        this.getOrderStore().sync();
    },

    //редактирование заказа
    editItem: function (grid, record) {
        var edit = Ext.create('ExtMVC.view.order.Formula').show();

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
        this.getOrderStore().sync();
    },

    //удаление заказа
    deleteItem: function (button, event) {
        Ext.Msg.confirm("Confirmation", "Do you want to Delete Order?", function (btnText) {
            if (btnText === "no") {
                // function on click no
            }
            else if (btnText === "yes") {

                var grid = this.getOrderGrid();
                var record = grid.getSelectionModel().getSelection();
                var store = this.getOrderStore();
                
                if (record.length)
                {
                    store.remove(record);
                    Ext.Msg.alert('Status', 'Complite. Order deleted!');
                }
                else Ext.Msg.alert('Invalid!', 'Please try again.');
                this.getOrderStore().sync();
            }
        }, this);
           
    }
});