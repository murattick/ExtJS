//модель корзины
Ext.define('ExtMVC.model.Cart', {
    extend: 'Ext.data.Model',
    idProperty: 'CartID',

    fields: [
        { name: 'CartID', type: 'int' },
        { name: 'ItemID', type: 'int' },
        { name: 'Count', type: 'int' },

    ]

});