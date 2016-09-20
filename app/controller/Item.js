Ext.define('ExtMVC.controller.Item', {
    extend: 'Ext.app.Controller',

    stores: ['Shop', 'AdminShop', 'ShopAudio', 'ShopFlash', 'ShopHDD', 'ShopLaptop', 'ShopMause', 'ShopMonitor', 'ShopPhone', 'ShopPhoto', 'ShopTV', 'ShopVideo'],
    models: ['Item'],

    views: ['item.Formula', 'item.Add', 'item.TabPanel', 'item.AdminItemGrid',
            'item.ItemGridAudio', 'item.ItemGridFlash', 'item.ItemGridHDD', 'item.ItemGridLaptop', 'item.ItemGridMause', 'item.ItemGridMonitor', 'item.ItemGridPhone', 'item.ItemGridPhoto', 'item.ItemGridTV', 'item.ItemGridVideo',
            'item.ItemGrid', 'item.GridDetail', 'item.GridMasterDetail',
            'menu.LeftMenu', 'menu.TopMenu', 
            'cart.CartGrid', 'cart.AddToCart'
    ],

    refs: [ {
        ref: 'itemGrid',
        selector: 'grid'
    },
    {
        ref: 'adminitemgrid',
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
            'adminitemgrid dataview': {
                itemdblclick: this.editItem
            },
            'adminitemgrid button[action=add]': {
                click: this.addItem
            },
            'itemform button[action=adding]': {
                click: this.addingItem
            },
            'itemform button[action=save]': {
                click: this.updateItem
            },
            'adminitemgrid button[itemId=delete]': {
                click: this.deleteItem
			} 
        });
    },

    addItem: function (grid, record) {
        var add = Ext.create('ExtMVC.view.item.Add').show();

        if (record) {
            add.down('form').loadRecord(record);
        }
    },
    addingItem: function (button, event) {
      
        var novo = false;
		
		var win = button.up('window'),
		form  = win.down('form').getForm();
		record = form.getRecord(),
        values = form.getValues();
		
		 if(form.isValid()) {
			  
            record = Ext.create('ExtMVC.model.Item');
            record.set(values);
            this.getAdminShopStore().add(record);
            novo = true;
        }
        else Ext.Msg.alert('Invalid form!', 'Please try again.');
			
        win.close();
        this.getAdminShopStore().sync();
    },

    editItem: function (grid, record) {
        var edit = Ext.create('ExtMVC.view.item.Formula').show();

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
        this.getAdminShopStore().sync();

    },
	//onDeleteClick: function () { 

	//	var ItemGrid = this.getItemGrid(); 
	//	var ShopStore = ItemGrid.getStore(); 

	//	//delete selected rows if selModel is checkboxmodel 
	//	var selectedRows = ItemGrid.getSelectionModel().getSelection(); 

	//	if (selectedRows.length) 
	//	ShopStore.remove(selectedRows); 

	//	else 
	//	Ext.Msg.alert('Status', 'Please select at least one record to delete!'); 
	//	this.getShopStore().sync(); 
	//	},

    deleteItem: function (button) {
        Ext.Msg.confirm("Confirmation", "Do you want to Delete Item ?", function (btnText) {
            if (btnText === "no") {
                // function on click no
            }
            else if (btnText === "yes") {

                var grid = this.getItemGrid();
                var record = grid.getSelectionModel().getSelection();
                var store = this.getAdminShopStore();

                if (record.length)
                store.remove(record);
                this.getAdminShopStore().sync();
            }
        }, this);
           
    }
    
});