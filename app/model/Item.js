Ext.define('ExtMVC.model.Item', {
    extend: 'Ext.data.Model',
    idProperty: 'ItemID',

    fields: [
        { name: 'ItemID', type: 'int' },
        { name: 'OrderDetail_OrderDetailID', type: 'int' },
        { name: 'Title', type: 'string', mapping: 'Title' },
        { name: 'Code', type: '' },
        { name: 'Brand', type: 'string' },
        { name: 'Category', type: 'string' },
        { name: 'Price', type: 'decimal' },
        { name: 'ItemArtUrl', type: 'string' }]
	
    
});