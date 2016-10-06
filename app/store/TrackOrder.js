//стор на отслеживание заказа
Ext.define('ExtMVC.store.TrackOrder', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Order',
    autoLoad: false,
    pageSize: 10,
    autoLoad: { start: 0, limit: 10 },

    proxy: {
        type: 'ajax',
        api: {
            read: '/Checkout/OrderUser',
            create: '/Checkout/AddressAndPayment',
            update: '/Checkout/Update',
            destroy: '/Checkout/Delete',
        },
        reader: {
            type: 'json',
            idProperty: 'OrderID',
            totalProperty: 'total',
            root: 'Data',
            messageProperty: 'message',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            listful: true,
            returnJson: true,
            encode: false,
            root: 'Data'
        }
    }
});