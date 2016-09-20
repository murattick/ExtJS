Ext.define('ExtMVC.store.Autorization', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Account',
    autoLoad: true,
    pageSize: 10,
    autoLoad: { start: 0, limit: 10 },

    proxy: {
        type: 'ajax',
        api: {
            //read: '/Checkout/Get',
            create: '/Account/LoginUser',
            //update: '/Checkout/Update',
            //destroy: '/Checkout/Delete',
        },
        reader: {
            type: 'json',
            idProperty: 'UserId',
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