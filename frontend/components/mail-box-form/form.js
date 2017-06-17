import angular from 'angular';
import component from './form.component';

const formModule = angular.module('mailBoxForm', []);

formModule.config(($stateProvider) => {
    "ngInject";

    $stateProvider.state('home.new-message', {
        url: '/new-message',
        component: 'mailBoxForm'
    });
});

formModule.component('mailBoxForm', component);

export default formModule.name;