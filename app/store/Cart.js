Ext.define('ExtMVC.store.Cart', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Cart',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {
            read: '/ShoppingCart/Get',
            create: '/ShoppingCart/AddToCart',
            update: '/ShoppingCart/Update',
            //destroy: '/ShoppingCart/Delete',
        },
        reader: {
            type: 'json',
            idProperty: 'CartID',
            totalProperty: 'total',
            root: 'Data',
            messageProperty: 'message',
            successProperty: 'success'
        }
    }
});