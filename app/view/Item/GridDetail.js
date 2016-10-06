Ext.define('ExtMVC.view.item.GridDetail', {
    extend: 'Ext.Panel',
    alias: 'widget.griddetail',
    // add tplMarkup as a new property
    tpl: [
        '<img align="right" src="/Content/Images/placeholder.gif"/>',
        '<b>Title:</b> {Title}<br/>',
        '<b>Code:</b> {Code}<br/>',
        '<b>Category:</b> {Category}<br/>',
        '<b>Brand:</b> {Brand}<br/>',
        '<b>Price:</b> {Price}<br/>'
    ],
    // startingMarup as a new property
    startingMarkup: 'Please select a Item to see additional details',

    bodyPadding: 7,
    // override initComponent to create and compile the template
    // apply styles to the body of the panel and initialize
    // html to startingMarkup
    initComponent: function () {
        this.html = this.startingMarkup;
        // call the superclass's initComponent implementation
        this.callParent();
    }
});