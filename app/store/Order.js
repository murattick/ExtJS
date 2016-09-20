Ext.define('ExtMVC.store.Order', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Order',
    autoLoad: true,
    pageSize: 10,
    autoLoad: { start: 0, limit: 10 },

    proxy: {
        type: 'ajax',
        api: {
            read: '/Checkout/Get',
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