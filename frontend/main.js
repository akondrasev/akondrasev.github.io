import AuthorizationService from './services/AuthorizationService/AuthorizationService';
import MailService from './services/MailService/MailService';
import UserService from './services/UserService/UserService';

import appRoot from './components/root/app-root';
import home from './components/home/home';
import userList from './components/user/user-list/user-list';
import userCard from './components/user/user-card/user-card';
import login from './components/login/login';
import avatar from './components/user/avatar/avatar';
import mailBox from './components/mail/mail-box/mail-box';
import mailLetter from './components/mail/mail-letter/mail-letter';

import './main.css';
import 'bootstrap/dist/css/bootstrap.css'

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