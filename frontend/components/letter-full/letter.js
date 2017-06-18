import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './letter.component';

const module = angular.module('', [
    uiRouter
]);

module.component('fullLetter', component);

module.config(($stateProvider) => {
    "ngInject";

    $stateProvider
        .state('home.letter', {
            url: "letter/:letterId",
            component: 'fullLetter',
            resolve: {
                letter: function (mailService, $stateParams) {
                    "ngInject";
                    return mailService.getLetter($stateParams.letterId);
                }
            }
        });
});

export default module.name;