//стор корзины
Ext.define('ExtMVC.store.Cart', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Cart',
    autoLoad: false,

    proxy: {
        type: 'ajax',
        api: {
            read: '/ShoppingCart/Get',
            create: '/ShoppingCart/AddToCart',
            update: '/ShoppingCart/Update'
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