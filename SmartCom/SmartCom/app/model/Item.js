//модель товара
Ext.define('ExtMVC.model.Item', {
    extend: 'Ext.data.Model',
    idProperty: 'ItemID',

    fields: [
        { name: 'ItemID', type: 'int' },
        { name: 'Title', type: 'string', mapping: 'Title' },
        { name: 'Code', type: '' },
        { name: 'Brand', type: 'string' },
        { name: 'CategoryID', type: 'int' },
        { name: 'Price', type: 'decimal' },
        { name: 'ItemArtUrl', type: 'string' },
        { name: 'Level', type: 'int' }],

    //associations: [{
    //    model: 'ExtMVC.model.Category',
    //    type: 'belongsTo',
    //    autoLoad: true,
    //    name: 'category'
    //}],
	
    
});