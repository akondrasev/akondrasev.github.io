import angular from 'angular';
import component from './letter.component';

const module = angular.module('letter', []);
module.component('letter', component);

export default module.name;