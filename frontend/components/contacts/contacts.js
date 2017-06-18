import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './contacts.component';

const module = angular.module('contacts', [uiRouter]);

module.config(($stateProvider) => {
    "ngInject";

    $stateProvider.state("contacts", {
        url: "/contacts",
        resolve: {
            contacts: function (userService) {
                "ngInject";

                return userService.getUsers();
            }
        },
        component: "contacts"
    });
});

module.component("contacts", component);

export default module.name;