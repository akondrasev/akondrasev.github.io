import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mailBoxComponent from './mail.component';
import Letter from './letter/letter';

let mail = angular.module('mail-box', [
    uiRouter,
    Letter
]);

mail.component('mailBox', mailBoxComponent);

export default mail.name;
