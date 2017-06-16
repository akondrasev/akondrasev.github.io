import angular from 'angular';
import navbar from './navbar.component';

let navbarComponent = angular.module('navbar', []);

navbarComponent.component('navbar', navbar);

export default navbarComponent.name;
