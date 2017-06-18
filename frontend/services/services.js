import angular from 'angular';
import MailService from './MailService/MailService';
import AuthenticationService from  './AuthorizationService/AuthorizationService';

let componentModule = angular.module('app.services', [
    MailService,
    AuthenticationService
]).name;

export default componentModule;