Ext.define('KS.view.ContentPanel', {
    extend: 'Ext.Panel',
    xtype: 'contentPanel',

    config: {
        bodyStyle: 'padding: 20px',

        dockedItems: [{
    		dock: 'top',
    		xtype: 'descriptionPanel',
            minHeight: 50,
            height: 'auto'
        }],
        autoScroll: true
    }
});