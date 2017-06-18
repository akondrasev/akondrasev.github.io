import angular from 'angular';
import component from './form.component';

const formModule = angular.module('mailBoxForm', []);

formModule.config(($stateProvider) => {
    "ngInject";

    $stateProvider.state('home.new-message', {
        url: 'letter/new-letter',
        component: 'mailBoxForm',
        resolve: {
            boxId: function (mailService) {
                "ngInject";
                return mailService.getMailBoxes().then((boxes) => boxes[0]._id)
            },
            contacts: function (userService) {
                "ngInject";
                return userService.getUsers();
            }
        }
    });
});

formModule.component('mailBoxForm', component);

export default formModule.name;