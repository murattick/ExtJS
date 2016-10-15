//стор на вывод товаров
Ext.define('ExtMVC.store.Category', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Category',

    autoLoad: true,
    pageSize: 20,
    autoLoad: { start: 0, limit: 20 },

    proxy: {
        type: 'ajax',
        api: {
            read: '/Category/Get',
            create: '/Category/Create',
            destroy: '/Category/Delete',
            update: '/Category/Update',
        },
        reader: {
            type: 'json',
            idProperty: 'CategoryID',
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