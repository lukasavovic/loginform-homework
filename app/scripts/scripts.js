'use strict';

var app = new Vue({
    el: '#app',
    data: {
        passwordtype: 'password',
        email: '',
        password: '',
        emailError: '',
        passwordError: ''
    },
    computed: {},
    methods: {
        showHidePassword: function showHidePassword() {
            if (app.passwordtype == 'password') {
                app.passwordtype = 'text';
            } else {
                app.passwordtype = 'password';
            }
        },
        formValidation: function formValidation(e) {
            e.preventDefault();
            if (app.email == '') {
                app.emailError = "Email is required!";
            } else if (!app.emailValidation(app.email)) {
                app.emailError = "Email is not valid!";
            } else {
                app.emailError = '';
            };
            if (app.password == '') {
                app.passwordError = 'Password is required!';
            } else if (app.password.length < 5) {
                app.passwordError = 'Password is minimum 5 characters!';
            } else {
                app.passwordError = '';
            }
        },
        emailValidation: function emailValidation() {
            var regularExpresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regularExpresion.test(app.email);
        }
    }
});