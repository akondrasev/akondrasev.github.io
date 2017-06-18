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

    // $rootScope.$on('$stateChangeStart', (event, toState) => {
    //     debugger;
    //     if (toState !== 'login' && !authenticationService.isAuthorized()) {
    //         event.preventDefault();
    //         $state.go('login');
    //     }
    // });

    // $transitions.onEnter({
    //     to: 'home.**'
    // }, function ($state$, $transition$) {
    //     "ngInject";
    //     debugger;
    //     if (!authenticationService.isAuthorized()) {
    //         $state.go('login');
    //         return $q.reject();
    //     }
    // });
});

export default module.name;