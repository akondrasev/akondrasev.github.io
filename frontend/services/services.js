import angular from 'angular';
import MailService from './MailService/MailService';
import AuthenticationService from  './AuthorizationService/AuthorizationService';
import UserService from  './UserService/UserService';

let componentModule = angular.module('app.services', [
    MailService,
    AuthenticationService,
    UserService
]).name;

export default componentModule;