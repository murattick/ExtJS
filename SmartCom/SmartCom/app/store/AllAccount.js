//стор на вывод всех аккаунтов
Ext.define('ExtMVC.store.AllAccount', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Account',
    autoLoad: false,
    pageSize: 10,
    autoLoad: { start: 0, limit: 10 },

    proxy: {
        type: 'ajax',
        api: {
            read: '/MyAccount/GetAll',
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