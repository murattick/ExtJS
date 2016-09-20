Ext.define('ExtMVC.model.Cart', {
    extend: 'Ext.data.Model',
    idProperty: 'CartID',



    fields: [
        //{ name: 'RecordID', type: 'int' },
        { name: 'CartID', type: 'int' },
        { name: 'ItemID', type: 'int' },
        { name: 'Count', type: 'int' },

        //{ name: 'Title', type: 'string' },
        //{ name: 'Code', type: 'string' },
        //{ name: 'Price', type: 'int' },
        //{ name: 'DateCreated', type: 'date' }
    ],

    hasMany: { model: 'ExtMVC.model.Item', name: 'items' }
});