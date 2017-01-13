Ext.define('ExtMVC.controller.Item', {
    extend: 'Ext.app.Controller',

    stores: ['Shop', 'AdminShop'],
    models: ['Item', 'Itemview'],

    views: ['item.Formula', 'item.Add', 'item.TabPanel', 'item.AdminItemGrid', 
            'item.ItemGrid', 'item.GridDetail', 'item.GridMasterDetail',
            'Category.CategoryGrid', 
            'menu.TopMenu', 'menu.LMenu',
            'cart.CartGrid', 'cart.AddToCart'
    ],

    refs: [ {
        ref: 'itemGrid',
        selector: 'grid'
    },
    {
        ref: 'adminitemGrid',
        selector: 'grid'
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
            'adminitemgrid button[action=addItem]': {
                click: this.addItem
            },
            'itemform button[action=addingItem]': {
                click: this.addingItem
            },
            'itemform button[action=saveItem]': {
                click: this.updateItem
            },
            'adminitemgrid button[itemId=deleteItem]': {
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
            this.getShopStore().add(record);
            novo = true;
        }
        else Ext.Msg.alert('Invalid form!', 'Please try again.');
			
        win.close();
        this.getAdminShopStore().sync();
        this.getShopStore().load();
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
        if (form.isValid()) {
            //AJAX запрос на вход

            Ext.Ajax.request({
                url: 'Shop/Update',
                method: 'post',
                params: { ItemID: form.getValues().ItemID, Level: form.getValues().Level, Title: form.getValues().Title, Code: form.getValues().Code, CategoryID: form.getValues().CategoryID, Brand: form.getValues().Brand, Price: form.getValues().Price },

                //scope : this,
                //method to call when the request is successful
                failure: function (response) {

                    data = Ext.decode(response.responseText);
                    Ext.Msg.alert('Update Error', data.errorMessage, Ext.emptyFn);

                    var adminShop = Ext.data.StoreManager.get("AdminShop");
                    var Shop = Ext.data.StoreManager.get("Shop");

                    adminShop.load();
                    Shop.load();
                },
                //после успешной авторизации подгружаются сторы и активируются кнопки меню
                success: function (response, opts) {

                    data = Ext.decode(response.responseText);
                    if (data.errorMessage != null) {
                        Ext.Msg.alert('Update Message', data.errorMessage, Ext.emptyFn);

                        var adminShop = Ext.data.StoreManager.get("AdminShop");
                        var Shop = Ext.data.StoreManager.get("Shop");

                        adminShop.load();
                        Shop.load();

                    } else {
                        //show the next screen
                    }
                }
            });
        }
        
        win.close();
        this.getAdminShopStore().sync();
        this.getShopStore().load();
        this.getAdminShopStore().load();

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

                var admingrid = this.getAdminGrid();
                var record = admingrid.getSelectionModel().getSelection();
                var store = this.getAdminShopStore();
                var store2 = this.getShopStore();
                debugger;
                if (record.length)
                    store.remove(record);
                    store2.remove(record);

                this.getAdminShopStore().sync();
                this.getShopStore().load();
            }
        }, this);
           
    }
    
});