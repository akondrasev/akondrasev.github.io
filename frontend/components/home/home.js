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
            url: "/:boxId",
            component: 'home',
            resolve: {
                mailBoxes: function (mailService) {
                    "ngInject";
                    return mailService.getMailBoxes();
                },
                letters: function (mailService) {
                    "ngInject";
                    return mailService.getLetters();
                },
                contacts: function (userService) {
                    "ngInject";
                    return userService.getUsers();
                }
            }
        });
});

homeModule.component('home', homeComponent);

export default homeModule.name;
