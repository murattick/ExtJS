Ext.Loader.setConfig({enabled: true});
//��� �������
Ext.application({
    name: 'ExtMVC',
    //����������� �������
    controllers: [
        'Item', 'Login', 'Cart', 'Order', 'Account', 'Category'
    ],
    
    autoCreateViewport: true
});
