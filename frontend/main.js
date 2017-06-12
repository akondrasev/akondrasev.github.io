'use strict';
const app = angular.module('fakeGmail', ['ui.router']);

app.config(($stateProvider) => {
    $stateProvider.state({
        name: 'home',
        url: '/',
        template: '<home></home>',
    });

    $stateProvider.state({
        name: 'userList',
        url: '/users',
        template: '<user-list></user-list>',
        controllerAs: '$ctrl'
    });

    $stateProvider.state({
        name: 'mailList',
        url: '/mail-list',
        template: '<mail-box></mail-box>',
        controllerAs: '$ctrl'
    });

    $stateProvider.state({
        name: 'user',
        url: '/users/:userId',
        template: '<div class="warning">User details: {{$ctrl.userId}}</div>',
        controller: function ($stateParams) {
            this.userId = $stateParams.userId;
        },
        controllerAs: '$ctrl'
    });

    $stateProvider.state({
        name: 'login',
        url: '/login',
        template: '<login></login>',
        controllerAs: '$ctrl'
    });
});

app.service("authorizationService", AuthorizationService);
app.service("userService", UserService);
app.service("mailService", MailService);

app.component('appRoot', appRoot);
app.component('home', home);
app.component('userList', userList);
app.component('userCard', userCard);
app.component('login', login);
app.component('avatar', avatar);
app.component('mailBox', mailBox);
app.component('mailLetter', mailLetter);


function generateTimeout(handler) {
    let randomInterval = Math.floor(Math.random() * (8 - 3)) + 3;
    return setTimeout(handler, randomInterval * 1000);
}