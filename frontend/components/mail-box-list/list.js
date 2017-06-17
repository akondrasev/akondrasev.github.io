import angular from 'angular';
import component from './list.component';

const module = angular.module('mailBoxList', []);

module.component('mailBoxList', component);

export default module.name;