var app = new Vue({
    el: '#app',
    data: {
        passwordtype: 'password',
    },
    computed:{

    },
    methods: {
        showHidePassword: ()=> {
            console.log(app.passwordtype);
            if(app.passwordtype == 'password') {
                app.passwordtype = 'text'
            } else {
                app.passwordtype = 'password'
            }
        }
    }
});

