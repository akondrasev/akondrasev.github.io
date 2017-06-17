import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
    uiRouter
]);

homeModule.config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            data: {
                title: "Home",
                roles: ["user"]
            },
            url: '/',
            component: 'home'
        });
});

homeModule.component('home', homeComponent);

export default homeModule.name;
