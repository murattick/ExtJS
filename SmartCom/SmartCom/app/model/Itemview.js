//модель товара для отображения наименования ктегории
Ext.define('ExtMVC.model.Itemview', {
    extend: 'Ext.data.Model',
    idProperty: 'ItemID',

    fields: [
        { name: 'ItemID', type: 'int' },
        { name: 'Level', type: 'int' },
        { name: 'Category.Name' },
        { name: 'Title', type: 'string', mapping: 'Title' },
        { name: 'Code', type: '' },
        { name: 'Brand', type: 'string' },
        { name: 'CategoryID', type: 'int' },
        { name: 'Price', type: 'decimal' },
        { name: 'ItemArtUrl', type: 'string' }],

    //associations: [{
    //    model: 'ExtMVC.model.Category',
    //    type: 'hasMany',
    //    autoLoad: true
    //}],
	
    
});