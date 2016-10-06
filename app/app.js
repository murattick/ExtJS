Ext.Loader.setConfig({enabled: true});
//имя проекта
Ext.application({
    name: 'ExtMVC',
    //контройлеры проекта
    controllers: [
        'Item', 'Login', 'Cart', 'Order', 'Account'
    ],
    
    autoCreateViewport: true
});
