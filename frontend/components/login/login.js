import component from './login.component';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


const module = angular.module('login', [
    uiRouter
]);

module.component('login', component);

module.config(($stateProvider) => {
    "ngInject";

    $stateProvider.state("login", {
        url: '/login',
        component: 'login'
    });
});

module.run(($rootScope, authenticationService, $state, $q, $transitions) => {
    "ngInject";

    $rootScope.$on('$locationChangeStart', (event, toState) => {
        if (toState !== 'login' && !authenticationService.isAuthorized()) {
            event.preventDefault();
            $state.go('login');
        }
    });
});

export default module.name;