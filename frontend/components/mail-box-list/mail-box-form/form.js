import angular from 'angular';
import component from './form.component';

const formModule = angular.module('mailBoxForm', []);

formModule.component('mailBoxForm', component);

export default formModule.name;