Ext.define('ExtMVC.view.item.GridMasterDetail' ,{
        extend: 'Ext.Panel',
        alias: 'widget.gridmasterdetail',
        store: 'Shop',

        frame: true,
        width: 580,
        height: 520,
        layout: 'border',

    // override initComponent
        initComponent: function () {
            this.items = [{ //добавление itemgrid
                xtype: 'itemgrid',
                itemId: 'gridPanel',
                region: 'north',
                height: 380,
                split: true
            }, { //добавление griddetail
                xtype: 'griddetail',
                itemId: 'detailPanel',
                region: 'center'
            }];
            // call the superclass's initComponent implementation
            this.callParent();
        },
        initEvents: function () {
            // call the superclass's initEvents implementation
            this.callParent();

            // now add application specific events
            // notice we use the selectionmodel's rowselect event rather
            // than a click event from the grid to provide key navigation
            // as well as mouse navigation
            var bookGridSm = this.getComponent('gridPanel').getSelectionModel();
            bookGridSm.on('selectionchange', this.onRowSelect, this);
        },
    // add a method called onRowSelect
    // This matches the method signature as defined by the 'rowselect'
    // event defined in Ext.selection.RowModel
        onRowSelect: function (sm, rs) {
            // getComponent will retrieve itemId's or id's. Note that itemId's
            // are scoped locally to this instance of a component to avoid
            // conflicts with the ComponentManager
            if (rs.length) {
                var detailPanel = this.getComponent('detailPanel');
                detailPanel.update(rs[0].getData());
            }

        }
});