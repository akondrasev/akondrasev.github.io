import angular from 'angular';

const ResponseFormatInterceptor = function ($q) {
    "ngInject";
    this.response = function(response) {
        return response.data;
    }
};

const module = angular
    .module("responseFormatInterceptor", [])
    .service('responseFormatInterceptor', ResponseFormatInterceptor);

module.config(($httpProvider) => {
    $httpProvider.interceptors.push('responseFormatInterceptor');
});

export default module.name;