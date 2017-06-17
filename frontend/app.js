import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import Services from './services/services';
import Interceptors from './interceptors/interceptors';
import AppComponent from './app.component';

angular.module('app', [
    uiRouter,
    Components,
    Services,
    Interceptors
]).config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
}).component('app', AppComponent);
