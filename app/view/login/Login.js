var loginForm = Ext.define('ExtMVC.view.login.Login', {
    extend: 'Ext.form.Panel',
	alias: 'widget.loginform',
    width: 500,
    frame: true,
    method: 'POST',
    title: 'Login Form',
    bodyPadding: '10 10 0',
    loadingText: 'Loading list...',

    defaults: {
        anchor: '100%',
        allowBlank: false,
        msgTarget: 'side',
        labelWidth: 75
    },

    items: [{
        xtype: 'textfield',
        name: 'UserName',
        id: 'UserName',
		minLength: 3,
		maxLength : 25,
		emptyText: 'Login',
		fieldLabel: 'Login',
		value: ''
    },{
        xtype: 'textfield',
        name: 'Password',
        id: 'Password',
		minLength: 3,
		maxLength : 15,
		emptyText: 'Password',
        fieldLabel: 'Password',
        inputType: 'password',
        value: ''
    },{
             xtype: 'checkboxfield',
             id: 'RememberMe',
             name: 'RememberMe',
             fieldLabel: 'Save login?',
             fieldWidth: '40%'
        }],

    buttons: [{
        text: 'Submit',
        action: 'login',
        type: 'submit'
    },
    {
        text: 'Reset Form',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }]
});