//модель заказов
Ext.define('ExtMVC.model.Order', {
    extend: 'Ext.data.Model',
    idProperty: 'OrderID',

    fields: [
        { name: 'OrderID', type: 'int' },
        { name: 'ItemID', type: 'int' },
        { name: 'Title', type: 'string' },
        { name: 'Code', type: 'string' },
        { name: 'Status', type: 'string' },
        { name: 'Count', type: 'int' },
        { name: 'Price', type: 'int' },
        { name: 'Discount', type: 'int'},
        { name: 'OrderDate', type: 'date', dateFormat: 'MS' },
        { name: 'ChangeStatus', type: 'date', dateFormat: 'MS' },
        { name: 'UserName', type: 'string' }
    ],

});