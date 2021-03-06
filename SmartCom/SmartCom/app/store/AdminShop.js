//стор административной панели
Ext.define('ExtMVC.store.AdminShop', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Item',

    autoLoad: false,
    pageSize: 20,
    autoLoad: { start: 0, limit: 20 },

    proxy: {
        type: 'ajax',
        api: {
            read: '/Shop/GetAdminGrid',
            create: '/Shop/Create',
            update: '/Shop/Update',
            destroy: '/Shop/Delete',
        },
        reader: {
            type: 'json',
            idProperty: 'ItemID',
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