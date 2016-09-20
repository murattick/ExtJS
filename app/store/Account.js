Ext.define('ExtMVC.store.Account', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Account',
    autoLoad: true,
    pageSize: 10,
    autoLoad: { start: 0, limit: 1 },

    proxy: {
        type: 'ajax',
        api: {
            read: '/MyAccount/Get',
            update: '/MyAccount/Update',
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