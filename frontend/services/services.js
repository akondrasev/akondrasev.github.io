import angular from 'angular';
import MailService from './MailService/MailService';

let componentModule = angular.module('app.services', [
    MailService
]).name;

export default componentModule;