import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mailBoxComponent from './mail.component';

let mail = angular.module('mail-box', [
    uiRouter
]);

mail.config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home.mail-box', {
            url: '/',
            component: 'mailBox'
        });
});

mail.component('mailBox', mailBoxComponent);

export default mail.name;
