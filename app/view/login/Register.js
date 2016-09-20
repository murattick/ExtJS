Ext.define('ExtMVC.view.login.Register', {
 extend: 'Ext.form.Panel',
 alias: 'widget.registerform',

 title: 'Registration Form',
 method: 'POST',
 width : 300,
 frame: true,
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
			 minLength: 3,
			 maxLength : 25,
             emptyText: 'Login',
             fieldLabel: 'Login'
          }, {
             xtype: 'textfield',
             name: 'Email',
             minLength: 3,
             maxLength: 25,
             emptyText: 'Email',
             fieldLabel: 'Email',
             vtype: 'email'
         },
         {
             xtype: 'textfield',
             allowBlank: false,
             fieldLabel: 'Password',
             name: 'Password',
			 minLength: 3,
			 maxLength : 15,
             emptyText: 'Password',
             inputType: 'password'
         },
         {
             xtype: 'textfield',
             allowBlank: false,
             fieldLabel: 'Repeat Password',
             name: 'Password',
			 minLength: 3,
		     maxLength : 15,
             emptyText: 'Password',
             inputType: 'password',
			  validator: function(value) {
			      var password1 = this.previousSibling('[name=Password]');
                return (value === password1.getValue()) ? true : 'Passwords do not match.'
            }
         }],

    dockedItems: [{
		xtype: 'container',
            dock: 'bottom',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            padding: '10 10 5',
			 items: [{
				         xtype: 'component',
						 flex: 1,
                
				setErrors: function(errors) {
                    var me = this,
                        baseCls = me.baseCls,
                        tip = me.getTip();

                    errors = Ext.Array.from(errors);

                    // Update CSS class and tooltip content
                    if (errors.length) {
                        me.addCls(baseCls + '-invalid');
                        me.removeCls(baseCls + '-valid');
                        me.update(me.invalidText);
                        tip.setDisabled(false);
                        tip.update(me.tipTpl.apply(errors));
                    } else {
                        me.addCls(baseCls + '-valid');
                        me.removeCls(baseCls + '-invalid');
                        me.update(me.validText);
                        tip.setDisabled(true);
                        tip.hide();
                    }
                }
            },{
				xtype: 'button',
				text: 'Submit',
				type: 'submit',
				formBind: true,
				disabled: true,
				action: 'registering'
    },
    {
        text: 'Reset Form',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }]
   }]

});