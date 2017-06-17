import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mailBoxComponent from './mail.component';

let mail = angular.module('mail-box', [
    uiRouter
]);

mail.component('mailBox', mailBoxComponent);

export default mail.name;
