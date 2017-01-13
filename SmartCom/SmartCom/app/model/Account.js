//модель аккаунта
Ext.define('ExtMVC.model.Account', {
    extend: 'Ext.data.Model',
    idProperty: 'UserId',

    fields: [
        { name: 'UserId', type: 'int' },
		{ name: 'Code', type: 'string' },
		{ name: 'Discount' },
        { name: 'UserName', type: 'string' },
        { name: 'FirstName', type: 'string' },
        { name: 'LastName', type: 'string' },
        { name: 'Address', type: 'string' },
        { name: 'City', type: 'string' },
        { name: 'State', type: 'string' },
        { name: 'PostalCode', type: 'string' },
        { name: 'Country', type: 'string' },
        { name: 'Phone', type: 'string' },
        { name: 'Email', type: 'string' },
    ],

});