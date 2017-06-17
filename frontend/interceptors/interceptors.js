import angular from 'angular';
import responseFormatInterceptor from './ResponseFormatInterceptor';

const module = angular.module("interceptors", [
    responseFormatInterceptor
]);

export default module.name;