import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
    uiRouter
]);

homeModule.config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $stateProvider
        .state('home', {
            component: 'home',
            abstract: true
        });
});

homeModule.component('home', homeComponent);

export default homeModule.name;
