import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './contact.component';

const module = angular.module('contact', [uiRouter]);

module.config(($stateProvider) => {
    "ngInject";

    $stateProvider.state("contact", {
        url: "/contact/:userId",
        resolve: {
            contacts: function (userService, $stateParams) {
                "ngInject";
                let userId = $stateParams.userId;

                return userService.getUser(userId);
            }
        },
        component: "contact"
    });

    $stateProvider.state("new-contact", {
        url: "/contact/new-contact",
        resolve: {
            contacts: function (userService) {
                "ngInject";

                return userService.getDraftUser();
            },
            isDraft: function () {
                return true;
            }
        },
        component: "contact"
    });
});

module.component("contact", component);

export default module.name;